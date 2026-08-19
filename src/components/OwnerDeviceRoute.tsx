import { useCallback, useEffect, useState } from "react"
import {
  IconBrandGoogle,
  IconDeviceDesktopCheck,
  IconRefresh,
  IconShieldCheck,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getSignedInOwner, signInAsOwner } from "@/lib/firebase"
import {
  getVisitorList,
  isOwnerDevice,
  setOwnerDevice,
  type VisitorRecord,
} from "@/lib/portfolio-data"

function formatVisitDate(timestamp: VisitorRecord["lastSeenAt"]) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timestamp.toDate())
}

export function OwnerDeviceRoute() {
  const [excluded, setExcluded] = useState(isOwnerDevice)
  const [ownerVerified, setOwnerVerified] = useState(false)
  const [visitors, setVisitors] = useState<VisitorRecord[]>([])
  const [loadingVisitors, setLoadingVisitors] = useState(false)
  const [visitorError, setVisitorError] = useState("")

  const loadVisitors = useCallback(async () => {
    setLoadingVisitors(true)
    setVisitorError("")
    try {
      setVisitors(await getVisitorList())
      setOwnerVerified(true)
    } catch (error) {
      setVisitorError(
        error instanceof Error ? error.message : "Visitor records unavailable."
      )
    } finally {
      setLoadingVisitors(false)
    }
  }, [])

  useEffect(() => {
    if (!excluded) return
    let cancelled = false
    void getSignedInOwner().then((owner) => {
      if (cancelled || !owner) return
      setOwnerVerified(true)
      void loadVisitors()
    })
    return () => {
      cancelled = true
    }
  }, [excluded, loadVisitors])

  const updateExclusion = (next: boolean) => {
    setOwnerDevice(next)
    setExcluded(next)
    if (!next) {
      setVisitors([])
      setOwnerVerified(false)
      setVisitorError("")
    }
  }

  const verifyOwner = async () => {
    setVisitorError("")
    try {
      await signInAsOwner()
      setOwnerVerified(true)
      await loadVisitors()
    } catch (error) {
      setVisitorError(
        error instanceof Error ? error.message : "Owner sign-in failed."
      )
    }
  }

  return (
    <main className="min-h-svh bg-background p-6 text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          {excluded ? <IconShieldCheck /> : <IconDeviceDesktopCheck />}
          <div>
            <p className="text-xs text-muted-foreground uppercase">
              Owner device settings
            </p>
            <h1 className="text-2xl font-semibold">
              {excluded
                ? "Excluded from visitor count"
                : "Included in visitor count"}
            </h1>
          </div>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          This setting applies only to the general visitor count in this browser
          profile. Games, replay history, ratings, and visitor leaderboard
          entries continue to work. Repeat it for every browser and device you
          use.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => updateExclusion(!excluded)}>
            {excluded ? "Include this browser" : "Exclude this browser"}
          </Button>
          <Button variant="outline" render={<a href="/" />}>
            Return to portfolio
          </Button>
        </div>

        {excluded ? (
          <section className="flex flex-col gap-4 border-t pt-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase">
                  Private owner view
                </p>
                <h2 className="text-xl font-semibold">Visitor list</h2>
                <p className="text-sm text-muted-foreground">
                  Up to 100 anonymous browser records, newest activity first.
                </p>
              </div>
              {ownerVerified ? (
                <Button
                  variant="outline"
                  onClick={loadVisitors}
                  disabled={loadingVisitors}
                >
                  <IconRefresh data-icon="inline-start" />
                  {loadingVisitors ? "Refreshing…" : "Refresh"}
                </Button>
              ) : (
                <Button onClick={verifyOwner} disabled={loadingVisitors}>
                  <IconBrandGoogle data-icon="inline-start" />
                  Verify owner with Google
                </Button>
              )}
            </div>

            {visitorError ? (
              <p role="alert" className="text-sm text-destructive">
                {visitorError}
              </p>
            ) : null}

            {ownerVerified ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Browser</TableHead>
                      <TableHead>First path</TableHead>
                      <TableHead>Last path</TableHead>
                      <TableHead className="text-right">Visits</TableHead>
                      <TableHead className="text-right">First seen</TableHead>
                      <TableHead className="text-right">Last seen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {visitors.map((visitor) => (
                      <TableRow key={visitor.uid}>
                        <TableCell className="font-mono">
                          {visitor.uid.slice(0, 8)}…
                        </TableCell>
                        <TableCell>{visitor.firstPath}</TableCell>
                        <TableCell>{visitor.lastPath}</TableCell>
                        <TableCell className="text-right">
                          {visitor.visitCount.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right text-xs whitespace-nowrap">
                          {formatVisitDate(visitor.firstSeenAt)}
                        </TableCell>
                        <TableCell className="text-right text-xs whitespace-nowrap">
                          {formatVisitDate(visitor.lastSeenAt)}
                        </TableCell>
                      </TableRow>
                    ))}
                    {!loadingVisitors && visitors.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="py-8 text-center">
                          No visitor records yet.
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                The local owner flag reveals this section, but your authorized
                Google account is required before Firebase returns any records.
              </p>
            )}
          </section>
        ) : null}
      </section>
    </main>
  )
}
