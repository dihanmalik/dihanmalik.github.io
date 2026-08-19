import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
// import App from "./App.tsx"
import { ConsentBanner } from "@/components/ConsentBanner.tsx"
import { OwnerDeviceRoute } from "@/components/OwnerDeviceRoute.tsx"
import { PrivacyRoute } from "@/components/PrivacyRoute.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { VisitorTracker } from "@/components/VisitorTracker.tsx"
import { TooltipProvider } from "./components/ui/tooltip.tsx"
import ExploreRoute from "./explore/ExploreRoute.tsx"
import { preloadExploreRoute } from "./explore/preloadExplore.ts"
import FieldManualPortfolio from "./field-manual-portfolio/FieldManualPortfolio.tsx"
import { ArcadeGameRoute } from "./field-manual-portfolio/game/ArcadeGameRoute.tsx"

const restoredRoute = sessionStorage.getItem("portfolio-route")
if (restoredRoute) {
  sessionStorage.removeItem("portfolio-route")
  window.history.replaceState(null, "", restoredRoute)
}

const isExploreRoute = /^\/(explore|world)\/?$/.test(window.location.pathname)
const isOwnerDeviceRoute = /^\/owner-device\/?$/.test(window.location.pathname)
const isPrivacyRoute = /^\/privacy\/?$/.test(window.location.pathname)
const arcadeGameMatch = window.location.pathname.match(
  /^\/games\/(void-patrol|night-shift)\/?$/
)
const arcadeGame = arcadeGameMatch?.[1] as
  "void-patrol" | "night-shift" | undefined

if (!isExploreRoute && !arcadeGame && !isOwnerDeviceRoute) {
  const preload = () => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => void preloadExploreRoute(), {
        timeout: 2500,
      })
    } else {
      window.setTimeout(() => void preloadExploreRoute(), 1000)
    }
  }
  if (document.readyState === "complete") preload()
  else window.addEventListener("load", preload, { once: true })
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        {isOwnerDeviceRoute ? (
          <OwnerDeviceRoute />
        ) : (
          <>
            <VisitorTracker />
            {isPrivacyRoute ? (
              <PrivacyRoute />
            ) : arcadeGame ? (
              <ArcadeGameRoute game={arcadeGame} />
            ) : isExploreRoute ? (
              <Suspense
                fallback={
                  <div className="grid min-h-svh place-items-center font-mono text-xs uppercase">
                    Loading 3D world…
                  </div>
                }
              >
                <ExploreRoute />
              </Suspense>
            ) : (
              <FieldManualPortfolio />
            )}
            {!isPrivacyRoute ? <ConsentBanner /> : null}
          </>
        )}
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
