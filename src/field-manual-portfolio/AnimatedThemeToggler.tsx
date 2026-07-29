import { useCallback, useRef } from "react"
import type { ComponentPropsWithoutRef } from "react"
import { flushSync } from "react-dom"
import { IconMoon, IconSun } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

type AnimatedThemeTogglerProps = ComponentPropsWithoutRef<"button"> & {
  duration?: number
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

export function AnimatedThemeToggler({
  className,
  duration = 550,
  theme,
  onThemeChange,
  ...props
}: AnimatedThemeTogglerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isTransitioningRef = useRef(false)
  const isDark = theme === "dark"

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current

    if (!button || isTransitioningRef.current) {
      return
    }

    const nextTheme = isDark ? "light" : "dark"
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", nextTheme === "dark")
      document.documentElement.classList.toggle("light", nextTheme === "light")
      onThemeChange(nextTheme)
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (!document.startViewTransition || reduceMotion) {
      applyTheme()
      return
    }

    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    isTransitioningRef.current = true

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
      .catch(() => undefined)

    transition.finished
      .catch(() => undefined)
      .finally(() => {
        isTransitioningRef.current = false
      })
  }, [duration, isDark, onThemeChange])

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={cn("manual-theme-toggle", className)}
      {...props}
    >
      {isDark ? <IconSun /> : <IconMoon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
