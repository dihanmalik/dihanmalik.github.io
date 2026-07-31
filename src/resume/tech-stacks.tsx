import LogoLoop from "@/components/LogoLoop"
import { Chip } from "@/components/ui/chip"
import { useTheme, getSystemTheme } from "@/components/theme-provider"
import { useLayoutEffect, useMemo } from "react"
import React from "react"
import { getTechLogos } from "@/features/tech-stacks/constants/techLogos"
import { TECH_STACK } from "@/features/tech-stacks/constants/tectStacks"

export const TechStackSection = () => {
  const [carouselWidth, setCarouselWidth] = React.useState(window.innerWidth)
  const { theme } = useTheme()
  const techLogos = useMemo(() => {
    return getTechLogos()
  }, [theme])

  useLayoutEffect(() => {
    const handleResize = () => {
      const logoLoopContainer = document.getElementById("logo-loop-container")
      if (logoLoopContainer) {
        setCarouselWidth(logoLoopContainer.offsetWidth)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial call to set the width

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-8 pt-18" id="logo-loop-container">
      <h1 className="text-2xl font-bold">Tech Stack</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {TECH_STACK.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
      <div>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={40}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={
            theme === "dark" ||
            (theme === "system" && getSystemTheme() === "dark")
              ? "#121212"
              : "#ffffff"
          }
          ariaLabel="Technology Stack"
          width={carouselWidth - 30}
        />
      </div>
    </div>
  )
}
