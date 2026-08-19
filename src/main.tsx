import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
// import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { TooltipProvider } from "./components/ui/tooltip.tsx"
import ExploreRoute from "./explore/ExploreRoute.tsx"
import { preloadExploreRoute } from "./explore/preloadExplore.ts"
import FieldManualPortfolio from "./field-manual-portfolio/FieldManualPortfolio.tsx"

const restoredRoute = sessionStorage.getItem("portfolio-route")
if (restoredRoute) {
  sessionStorage.removeItem("portfolio-route")
  window.history.replaceState(null, "", restoredRoute)
}

const isExploreRoute = /^\/(explore|world)\/?$/.test(window.location.pathname)

if (!isExploreRoute) {
  const preload = () => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => void preloadExploreRoute(), { timeout: 2500 })
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
        {isExploreRoute ? (
          <Suspense fallback={<div className="grid min-h-svh place-items-center font-mono text-xs uppercase">Loading 3D world…</div>}>
            <ExploreRoute />
          </Suspense>
        ) : <FieldManualPortfolio />}
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
