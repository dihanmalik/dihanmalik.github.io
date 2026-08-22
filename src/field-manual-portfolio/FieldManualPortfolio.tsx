import { useEffect, useRef, useState } from "react"
import type {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react"
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconCheck,
  IconCircleFilled,
  IconCopy,
  IconDownload,
  IconMail,
  IconMenu2,
  IconPlus,
  IconSteeringWheel,
} from "@tabler/icons-react"

import claudeCodeLogo from "@/assets/claudecode.svg?url&no-inline"
import portrait from "@/assets/me4.png"
import resume from "@/assets/CV_2026.pdf"
import RotatingText from "@/components/RotatingText"
import type { RotatingTextRef } from "@/components/RotatingText"
import { WebsiteRatingDialog } from "@/components/WebsiteRating"
import { useTheme } from "@/components/theme-provider"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { getTechLogos } from "@/features/tech-stacks/constants/techLogos"
import { isOwnerDevice } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

import { AnimatedThemeToggler } from "./AnimatedThemeToggler"
import { educationEntries, optimizationNotes, workEntries } from "./data"
import { ArcadeGames } from "./game/ArcadeGames"
import { ARCADE_RETURN_SCROLL_KEY } from "./game/game-exit"
import { OwnerInsights } from "./OwnerInsights"
import "./field-manual.css"

const navItems = [
  ["00", "Introduction", "#introduction"],
  ["01", "Optimization", "#optimization"],
  ["02", "Work index", "#work"],
  ["03", "Education", "#education"],
  ["04", "AI practice", "#ai-practice"],
  ["05", "Arcade", "#game"],
  ["★", "Owner dashboard", "#owner-dashboard"],
  ["06", "Contact", "#contact"],
  ["↗", "Explore in 3D", "/explore"],
]

const manualSectionIds = navItems.flatMap(([, , href]) =>
  href.startsWith("#") ? [href.slice(1)] : []
)

const introductionWordPairs = [
  ["useful", "fast"],
  ["reliable", "responsive"],
  ["accessible", "intuitive"],
  ["scalable", "efficient"],
  ["durable", "adaptable"],
] as const
const builtWords = introductionWordPairs.map(([built]) => `${built},`)
const tunedWords = introductionWordPairs.map(([, tuned]) => `${tuned}.`)
const contactNumber = "+63 9154960703"

function useActiveManualSection() {
  const [activeSection, setActiveSection] = useState("introduction")

  useEffect(() => {
    let animationFrame = 0

    const updateActiveSection = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.34
        let nextSection = manualSectionIds[0]

        manualSectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId)
          if (section && section.getBoundingClientRect().top <= marker) {
            nextSection = sectionId
          }
        })

        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
        ) {
          nextSection = manualSectionIds.at(-1) ?? nextSection
        }

        setActiveSection((current) =>
          current === nextSection ? current : nextSection
        )
      })
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return activeSection
}

function useArcadeReturnScroll() {
  useEffect(() => {
    if (sessionStorage.getItem(ARCADE_RETURN_SCROLL_KEY) !== "true") return

    const restoreArcadePosition = () => {
      document.getElementById("game")?.scrollIntoView({
        behavior: "auto",
        block: "start",
      })
    }

    let secondFrame = 0
    const firstFrame = window.requestAnimationFrame(() => {
      restoreArcadePosition()
      secondFrame = window.requestAnimationFrame(() => {
        restoreArcadePosition()
        sessionStorage.removeItem(ARCADE_RETURN_SCROLL_KEY)
      })
    })

    window.addEventListener("load", restoreArcadePosition, { once: true })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
      window.removeEventListener("load", restoreArcadePosition)
    }
  }, [])
}

function scrollToManualSectionId(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) return

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  section.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  })

  if (window.location.hash !== `#${sectionId}`) {
    window.history.pushState(null, "", `#${sectionId}`)
  }
}

function scrollToManualSection(
  event: ReactMouseEvent<HTMLAnchorElement>,
  sectionId: string
) {
  event.preventDefault()
  scrollToManualSectionId(sectionId)
}

function useScrollReveals() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".field-manual")
    const items = root?.querySelectorAll<HTMLElement>("[data-manual-reveal]")

    if (!root || !items) {
      return undefined
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reduceMotion) {
      items.forEach((item) => item.classList.add("manual-visible"))
      return undefined
    }

    root.classList.add("manual-motion-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add("manual-visible")
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    )

    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      root.classList.remove("manual-motion-ready")
    }
  }, [])
}

function usePageInteractionHaptics() {
  useEffect(() => {
    if (typeof navigator.vibrate !== "function") return undefined

    const interactiveSelector = [
      "a[href]",
      "button",
      "input:not([type='hidden'])",
      "select",
      "textarea",
      "summary",
      "[role='button']",
      "[role='tab']",
      "[role='link']",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",")

    const handleInteraction = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest(".manual-arcade-dialog, [data-no-page-haptic]")) return

      const interactive = target.closest<HTMLElement>(interactiveSelector)
      if (
        !interactive ||
        interactive.matches(":disabled, [aria-disabled='true']")
      )
        return
      navigator.vibrate(12)
    }

    document.addEventListener("click", handleInteraction, { capture: true })
    return () =>
      document.removeEventListener("click", handleInteraction, {
        capture: true,
      })
  }, [])
}

function revealDelay(index: number) {
  return { "--manual-delay": `${index * 75}ms` } as CSSProperties
}

function MarginLabel({ children }: { children: ReactNode }) {
  return (
    <p className="manual-rule-text">
      <span>{children}</span>
    </p>
  )
}

function FieldManualThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  )

  useEffect(() => {
    const updateResolvedTheme = () => {
      setResolvedTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      )
    }

    updateResolvedTheme()

    const observer = new MutationObserver(updateResolvedTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <AnimatedThemeToggler
      theme={resolvedTheme}
      onThemeChange={setTheme}
      title={`Current preference: ${theme}`}
      className={className}
    />
  )
}

function Sidebar({
  ownerDevice,
  activeSection,
}: {
  ownerDevice: boolean
  activeSection: string
}) {
  const visibleNavItems = navItems.filter(
    ([, , href]) => href !== "#owner-dashboard" || ownerDevice
  )

  return (
    <aside className="hidden border-r lg:block">
      <div className="sticky top-0 flex min-h-screen flex-col p-6">
        <a href="#introduction" className="flex items-center justify-between">
          <span className="manual-accent-text text-xl font-bold tracking-tight">
            NA/10
          </span>
          <span className="text-[0.65rem] tracking-[0.18em] uppercase">
            Field manual
          </span>
        </a>

        <nav className="mt-24 flex flex-col gap-4" aria-label="Page index">
          {visibleNavItems.map(([number, label, href]) => {
            const sectionId = href.startsWith("#") ? href.slice(1) : null
            const isActive = sectionId === activeSection

            return (
              <a
                key={number}
                href={href}
                aria-current={isActive ? "location" : undefined}
                onClick={
                  sectionId
                    ? (event) => scrollToManualSection(event, sectionId)
                    : undefined
                }
                className={cn(
                  "manual-nav-link group grid grid-cols-[2rem_1fr] items-center text-xs",
                  isActive && "is-active"
                )}
              >
                <span className="manual-nav-number text-muted-foreground">
                  {number}
                </span>
                <span className="manual-nav-label">{label}</span>
              </a>
            )
          })}
        </nav>

        <div className="mt-auto">
          <a
            href="/explore"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "mb-5 w-full rounded-none"
            )}
          >
            <IconSteeringWheel data-icon="inline-start" />
            Enter 3D world
          </a>
          <p className="text-[0.65rem] leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
            Senior frontend developer
            <br />
            Full-stack TypeScript developer
            <br />
            Philippines / GMT+8
          </p>
          <Separator className="my-4" />
          <div className="flex items-center justify-between gap-3">
            <a
              href="mailto:abdulmaliknahid@gmail.com"
              className="flex items-center gap-2 text-xs font-semibold"
            >
              <IconCircleFilled className="manual-accent-text" />
              Open to work
            </a>
            <FieldManualThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  )
}

function MobileNavigation({
  ownerDevice,
  activeSection,
}: {
  ownerDevice: boolean
  activeSection: string
}) {
  const [open, setOpen] = useState(false)
  const visibleNavItems = navItems.filter(
    ([, , href]) => href !== "#owner-dashboard" || ownerDevice
  )
  const currentLabel =
    visibleNavItems.find(([, , href]) => href === `#${activeSection}`)?.[1] ??
    "Introduction"

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <header className="manual-mobile-nav">
        <a
          href="#introduction"
          className="manual-mobile-brand"
          onClick={(event) => scrollToManualSection(event, "introduction")}
          aria-label="Return to introduction"
        >
          NA/10
        </a>
        <div className="manual-mobile-location" aria-live="polite">
          <span>Now viewing</span>
          <strong>{currentLabel}</strong>
        </div>
        <div className="manual-mobile-actions">
          <FieldManualThemeToggle />
          <DialogTrigger
            render={
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="manual-mobile-menu-trigger rounded-full"
              />
            }
          >
            <IconMenu2 />
            <span className="sr-only">Open navigation</span>
          </DialogTrigger>
        </div>
      </header>

      <DialogContent className="manual-mobile-menu top-auto right-0 bottom-0 left-0 max-h-[92svh] max-w-none translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-t-3xl rounded-b-none border-x-0 border-b-0 p-0 sm:max-w-none lg:hidden">
        <DialogHeader className="manual-mobile-menu-header">
          <DialogTitle>Where would you like to go?</DialogTitle>
          <DialogDescription>
            Jump to any part of the field manual.
          </DialogDescription>
        </DialogHeader>

        <nav className="manual-mobile-menu-list" aria-label="Mobile page index">
          {visibleNavItems.map(([number, label, href]) => {
            const sectionId = href.startsWith("#") ? href.slice(1) : null
            const isActive = sectionId === activeSection

            return (
              <a
                key={`${number}-${label}`}
                href={href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "manual-mobile-menu-link",
                  isActive && "is-active"
                )}
                onClick={(event) => {
                  if (sectionId) {
                    event.preventDefault()
                    setOpen(false)
                    window.requestAnimationFrame(() =>
                      scrollToManualSectionId(sectionId)
                    )
                    return
                  }
                  setOpen(false)
                }}
              >
                <span>{number}</span>
                <strong>{label}</strong>
                {href.startsWith("/") ? <IconArrowUpRight /> : null}
              </a>
            )
          })}
        </nav>

        <div className="manual-mobile-menu-footer">
          <span>Senior frontend developer</span>
          <span>Full-stack TypeScript developer</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function Introduction() {
  const [wordPairIndex, setWordPairIndex] = useState(0)
  const tunedWordRef = useRef<RotatingTextRef>(null)
  const [builtWord, tunedWord] = introductionWordPairs[wordPairIndex]

  return (
    <section id="introduction" className="scroll-mt-8">
      <div className="flex items-center justify-between border-b px-5 py-3 text-[0.65rem] tracking-[0.16em] uppercase sm:px-10">
        <span>Issue 10 / since 2016</span>
        <span className="hidden sm:inline">
          Senior frontend · Full-stack TypeScript
        </span>
        <span className="flex items-center gap-3">
          <span>Manila time</span>
          <FieldManualThemeToggle className="hidden lg:inline-grid" />
        </span>
      </div>

      <div
        data-manual-reveal
        className="grid gap-12 px-5 py-14 sm:px-10 sm:py-20 xl:grid-cols-[1fr_19rem] xl:items-end"
      >
        <div>
          <p className="mb-8 flex items-center gap-2 text-xs font-semibold">
            <IconCircleFilled className="manual-accent-text" />
            Senior Frontend & Full-stack TypeScript Developer
          </p>
          <h1
            className="manual-title"
            aria-label={`Built to be ${builtWord}, tuned to be ${tunedWord}.`}
          >
            <span aria-hidden="true">
              <span className="block">Built to be</span>
              <span className="block">
                <em className="manual-rolling-word">
                  <RotatingText
                    texts={builtWords}
                    rotationInterval={5_000}
                    staggerDuration={0.035}
                    animatePresenceMode="sync"
                    mainClassName="manual-rotating-text"
                    onNext={(index) => {
                      setWordPairIndex(index)
                      tunedWordRef.current?.jumpTo(index)
                    }}
                  />
                </em>
              </span>
              <span className="block">tuned to be</span>
              <span className="block">
                <em className="manual-rolling-word">
                  <RotatingText
                    ref={tunedWordRef}
                    texts={tunedWords}
                    auto={false}
                    staggerDuration={0.035}
                    animatePresenceMode="sync"
                    mainClassName="manual-rotating-text"
                  />
                </em>
              </span>
            </span>
          </h1>
          <div className="mt-12 grid max-w-4xl gap-7 border-t pt-6 sm:grid-cols-[8rem_1fr]">
            <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              In brief
            </p>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              I&apos;m Nahid Abdulmalik, you can call me Dihan. My core strength
              is senior frontend engineering, and I also build full-stack
              TypeScript systems—from thoughtful interfaces to reliable APIs and
              data flows. I stay around to{" "}
              <span className="manual-highlight font-semibold">
                make them faster
              </span>
              , clearer, and easier to evolve.
            </p>
          </div>
          <a
            href="/explore"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-8 rounded-none lg:hidden"
            )}
          >
            <IconSteeringWheel data-icon="inline-start" />
            Explore my work in 3D
          </a>
        </div>

        <div className="manual-portrait-wrap relative mx-auto w-full max-w-80">
          <span className="manual-tape -top-3 left-1/2 -translate-x-1/2" />
          <div className="overflow-hidden border bg-muted p-2">
            <img
              src={portrait}
              alt="Nahid Abdulmalik"
              className="manual-portrait aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <p className="absolute -right-4 -bottom-4 bg-background px-3 py-2 font-serif text-sm italic shadow-sm">
            still curious / 10 yrs building
          </p>
        </div>
      </div>

      <div
        data-manual-reveal="left"
        className="manual-open-strip grid border-y sm:grid-cols-[1fr_auto]"
      >
        <div className="flex items-center gap-4 px-5 py-5 sm:px-10">
          <span className="relative flex size-3">
            <span className="manual-status-ping absolute inline-flex size-full animate-ping rounded-full opacity-30" />
            <span className="manual-status-dot relative inline-flex size-3 rounded-full" />
          </span>
          <p className="text-sm">
            Quietly open to a strong team and a useful problem.
          </p>
        </div>
        <a
          href="mailto:abdulmaliknahid@gmail.com"
          className="flex items-center justify-between gap-12 border-t px-5 py-5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background sm:border-t-0 sm:border-l sm:px-8"
        >
          Tell me what you&apos;re building
          <IconArrowDownRight />
        </a>
      </div>
    </section>
  )
}

function Optimization() {
  return (
    <section
      id="optimization"
      className="scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28"
    >
      <MarginLabel>01 / Frontend optimization</MarginLabel>

      <div className="mt-12 grid gap-12 xl:grid-cols-[0.8fr_1.2fr]">
        <div data-manual-reveal="left">
          <p className="text-4xl leading-[0.98] font-semibold tracking-tight sm:text-6xl">
            Performance is not a final polish.
          </p>
          <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
            It shapes architecture, interaction, and whether a product feels
            trustworthy. I optimize with evidence, then protect the improvement
            with repeatable engineering habits.
          </p>
        </div>

        <ol className="border-t">
          {optimizationNotes.map((item, index) => (
            <li
              key={item.title}
              data-manual-reveal="right"
              style={revealDelay(index)}
              className="manual-optimization-row grid gap-4 border-b py-6 sm:grid-cols-[3rem_9rem_1fr] sm:items-start"
            >
              <span className="font-serif text-sm text-muted-foreground italic">
                0{index + 1}
              </span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 grid gap-px border bg-border sm:grid-cols-3">
        <div
          data-manual-reveal
          style={revealDelay(0)}
          className="group manual-metric bg-background p-6"
        >
          <p className="text-3xl font-semibold">Measure</p>
          <p className="mt-2 text-xs text-muted-foreground group-hover:text-white">
            Runtime behavior · bundles · network · user flows
          </p>
        </div>
        <div
          data-manual-reveal
          style={revealDelay(1)}
          className="group manual-metric bg-background p-6"
        >
          <p className="text-3xl font-semibold">Prioritize</p>
          <p className="mt-2 text-xs text-muted-foreground group-hover:text-white">
            User impact · frequency · engineering cost
          </p>
        </div>
        <div
          data-manual-reveal
          style={revealDelay(2)}
          className="group manual-metric bg-background p-6"
        >
          <p className="text-3xl font-semibold">Verify</p>
          <p className="mt-2 text-xs text-muted-foreground group-hover:text-white">
            Before/after evidence · regression coverage
          </p>
        </div>
      </div>
    </section>
  )
}

function WorkIndex() {
  return (
    <section id="work" className="scroll-mt-8 border-y">
      <div data-manual-reveal className="px-5 py-16 sm:px-10">
        <MarginLabel>02 / Work index</MarginLabel>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-5xl leading-none font-semibold tracking-tight sm:text-7xl">
            Selected log
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Five teams. Fintech, aerospace, travel, ticketing, and product
            foundations.
          </p>
        </div>
      </div>

      <div className="border-t px-5 sm:px-10">
        {workEntries.map((entry, index) => (
          <details
            key={entry.company}
            data-manual-reveal="left"
            style={revealDelay(index)}
            className="manual-index-row border-b"
          >
            <summary className="grid cursor-pointer list-none gap-4 py-6 sm:grid-cols-[3rem_8rem_1fr_2rem] sm:items-center">
              <span className="text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs">{entry.period}</span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {entry.company}
                </span>
                <IconPlus className="manual-index-plus" />
              </div>
            </summary>
            <div className="grid gap-7 pr-10 pb-8 sm:ml-44 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase">
                  {entry.role}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                  {entry.note}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {entry.focus.map((item) => (
                    <span key={item} className="text-xs">
                      / {item}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="flex size-12 items-center justify-center rounded-full border transition-colors hover:bg-foreground hover:text-background"
                aria-label={`Visit ${entry.company}`}
              >
                <IconArrowUpRight />
              </a>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-8 px-5 py-20 !pb-0 sm:px-10 sm:py-28"
    >
      <MarginLabel>03 / Education background</MarginLabel>

      <div
        data-manual-reveal
        className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
      >
        <div>
          <p className="font-serif text-xl text-muted-foreground italic">
            The foundation
          </p>
          <h2 className="mt-5 max-w-lg text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">
            Study, build, repeat.
          </h2>
        </div>

        <ol className="border-t">
          {educationEntries.map((entry, index) => (
            <li
              key={entry.title}
              data-manual-reveal="right"
              style={revealDelay(index)}
              className="grid gap-5 border-b py-7 sm:grid-cols-[7rem_1fr]"
            >
              <p className="text-xs text-muted-foreground">{entry.period}</p>
              <div>
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {entry.title}
                  </h3>
                  {entry.href ? (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors hover:bg-foreground hover:text-background"
                      aria-label={`Visit ${entry.title}`}
                    >
                      <IconArrowUpRight />
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {entry.highlights.map((highlight) => (
                    <span key={highlight} className="text-xs">
                      / {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function AiPractice() {
  return (
    <section
      id="ai-practice"
      className="scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28"
    >
      <MarginLabel>04 / Extending the stack</MarginLabel>

      <div className="mt-12 grid gap-12 xl:grid-cols-[1fr_1.1fr]">
        <div data-manual-reveal="left">
          <p className="font-serif text-xl text-muted-foreground italic">
            A practical note on AI
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-tight sm:text-6xl">
            Senior frontend depth. Full-stack TypeScript delivery.
          </h2>
          <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
            I use <strong className="text-foreground">Claude Code</strong> as a
            context-aware engineering companion to accelerate work across the
            stack. I understand how to structure the context around the work—not
            just how to ask for code.
          </p>
        </div>

        <div
          data-manual-reveal="right"
          className="manual-ai-map relative min-h-[30rem] overflow-hidden border p-6"
        >
          <div className="absolute top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed" />
          <div className="manual-map-node manual-ai-core absolute top-1/2 left-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-center text-xs font-semibold">
            <img src={claudeCodeLogo} alt="" aria-hidden="true" />
            <span className="relative bottom-2">Claude Code</span>
          </div>
          <div className="manual-map-node manual-node-agents border bg-background px-4 py-2 text-xs">
            Agents
          </div>
          <div className="manual-map-node manual-node-plugins border bg-background px-4 py-2 text-xs">
            Plugins
          </div>
          <div className="manual-map-node manual-node-skills border bg-background px-4 py-2 text-xs">
            Skills
          </div>
          <div className="manual-map-node manual-node-hooks border bg-background px-4 py-2 text-xs">
            Hooks
          </div>
          <div className="manual-map-node manual-node-rules border bg-background px-4 py-2 text-xs">
            Rules
          </div>
          <div className="manual-map-node manual-node-mcp border bg-background px-4 py-2 text-xs">
            MCP integrations
          </div>
          <div className="manual-map-node manual-node-context border bg-background px-4 py-2 text-xs">
            Repo context
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 border-t pt-7 md:grid-cols-3">
        <div data-manual-reveal style={revealDelay(0)}>
          <p className="text-xs font-semibold uppercase">01 / Structure</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Give the companion durable project knowledge, clear boundaries, and
            the right instructions.
          </p>
        </div>
        <div data-manual-reveal style={revealDelay(1)}>
          <p className="text-xs font-semibold uppercase">02 / Integrate</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Connect tools and services through MCP instead of reducing every
            workflow to copied text.
          </p>
        </div>
        <div data-manual-reveal style={revealDelay(2)}>
          <p className="text-xs font-semibold uppercase">03 / Verify</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Keep architectural judgment, testing, review, and ownership firmly
            human.
          </p>
        </div>
      </div>
    </section>
  )
}

function Toolkit() {
  const toolkit = getTechLogos()
  const repeated = [...toolkit, ...toolkit]

  return (
    <div
      data-manual-reveal
      className="manual-toolkit overflow-hidden border-y py-4"
    >
      <div className="manual-crawl flex items-center">
        {repeated.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="manual-toolkit-item flex items-center"
            aria-hidden={index >= toolkit.length}
          >
            <span className="manual-toolkit-logo" aria-hidden="true">
              {item.node}
            </span>
            <span className="text-xs tracking-[0.16em] whitespace-nowrap uppercase">
              {item.title}
            </span>
            <span className="manual-toolkit-separator">×</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Contact() {
  const [hasCopiedContact, setHasCopiedContact] = useState(false)
  const copyFeedbackTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (copyFeedbackTimer.current !== null) {
        window.clearTimeout(copyFeedbackTimer.current)
      }
    }
  }, [])

  const copyContactNumber = async () => {
    try {
      await navigator.clipboard.writeText(contactNumber)
      setHasCopiedContact(true)

      if (copyFeedbackTimer.current !== null) {
        window.clearTimeout(copyFeedbackTimer.current)
      }

      copyFeedbackTimer.current = window.setTimeout(() => {
        setHasCopiedContact(false)
      }, 2000)
    } catch {
      setHasCopiedContact(false)
    }
  }

  return (
    <footer id="contact" className="scroll-mt-8 px-5 py-20 sm:px-10 sm:py-28">
      <div
        data-manual-reveal
        className="grid gap-12 xl:grid-cols-[1fr_auto] xl:items-end"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">
            06 / Open channel
          </p>
          <h2 className="mt-8 max-w-4xl text-5xl leading-[0.92] font-semibold tracking-tight sm:text-8xl">
            Have something good in mind? Let&apos;s talk.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Whether you&apos;re hiring, building something useful, or simply
            want to say hello, I&apos;d be happy to hear from you.
          </p>
        </div>
        <div className="manual-open-stamp grid size-44 place-items-center p-5 text-center text-sm font-bold tracking-[0.08em] uppercase">
          Currently open
          <br />
          for new
          <br />
          opportunities
        </div>
      </div>

      <div className="mt-16 border-t pt-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase">
              Choose what feels easiest
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Start a conversation, keep my résumé, or leave a quick rating.
            </p>
          </div>
          <span className="text-xs text-muted-foreground">
            Thanks for stopping by.
          </span>
        </div>

        <div className="manual-contact-actions">
          <a
            href="mailto:abdulmaliknahid@gmail.com"
            className={cn(
              buttonVariants({ size: "lg" }),
              "manual-contact-action"
            )}
          >
            <IconMail data-icon="inline-start" />
            Start a conversation
          </a>
          <a
            href={resume}
            download="Nahid-Abdulmalik-Resume.pdf"
            className={cn(
              buttonVariants({ size: "lg" }),
              "manual-contact-action"
            )}
          >
            <IconDownload data-icon="inline-start" />
            Download my résumé
          </a>
          <WebsiteRatingDialog
            triggerVariant="default"
            triggerClassName="manual-contact-action"
          />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5 text-sm">
          <a
            href="https://github.com/dihanmalik"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-60"
          >
            <IconBrandGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdulmaliknahid/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-60"
          >
            <IconBrandLinkedin />
            LinkedIn
          </a>
          <a
            href="https://www.tiktok.com/@dihanmalik0"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-60"
          >
            <IconBrandTiktok />
            TikTok
          </a>
          <div className="flex items-center gap-1 rounded-full border py-1 pr-1 pl-3">
            <span aria-hidden="true">🇵🇭</span>
            <a
              href="tel:+639154960703"
              className="px-1 hover:opacity-60"
              aria-label={`Call ${contactNumber}`}
            >
              {contactNumber}
            </a>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={copyContactNumber}
              aria-label={
                hasCopiedContact
                  ? "Contact number copied"
                  : "Copy contact number"
              }
            >
              {hasCopiedContact ? (
                <IconCheck data-icon="inline-start" />
              ) : (
                <IconCopy data-icon="inline-start" />
              )}
              {hasCopiedContact ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-16 flex flex-wrap items-center justify-between gap-3 text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
        <span>Nahid Abdulmalik © {new Date().getFullYear()}</span>
        <span className="flex flex-wrap items-center gap-3">
          <a className="underline underline-offset-4" href="/privacy">
            Privacy choices
          </a>
          <span>Built with intent. Optimized with evidence.</span>
        </span>
      </p>
    </footer>
  )
}

export default function FieldManualPortfolio() {
  useArcadeReturnScroll()
  useScrollReveals()
  usePageInteractionHaptics()
  const ownerDevice = isOwnerDevice()
  const activeSection = useActiveManualSection()

  return (
    <div className="field-manual selection:bg-foreground selection:text-background">
      <div className="manual-page">
        <MobileNavigation
          ownerDevice={ownerDevice}
          activeSection={activeSection}
        />
        <div className="manual-grid">
          <Sidebar ownerDevice={ownerDevice} activeSection={activeSection} />
          <main>
            <Introduction />
            <Optimization />
            <WorkIndex />
            <Education />
            <AiPractice />
            <Toolkit />
            <ArcadeGames />
            {ownerDevice ? <OwnerInsights /> : null}
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}
