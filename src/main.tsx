import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
// import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { TooltipProvider } from "./components/ui/tooltip.tsx"
import FieldManualPortfolio from "./field-manual-portfolio/FieldManualPortfolio.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        <FieldManualPortfolio />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
