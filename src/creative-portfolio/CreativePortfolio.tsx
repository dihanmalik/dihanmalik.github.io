import { useEffect, useState } from "react"
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCheck,
  IconDownload,
  IconMail,
  IconMoon,
  IconSun,
} from "@tabler/icons-react"

import meImage from "@/assets/me4.png"
import resumeFile from "@/assets/CV_2026.pdf"
import { useTheme } from "@/components/theme-provider"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import { capabilities, experiences, technologyGroups } from "./portfolio-data"
import "./creative-portfolio.css"

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

const marqueeItems = [
  "React",
  "TypeScript",
  "Product thinking",
  "Frontend architecture",
  "Team leadership",
  "Design systems",
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })

    observer.observe(document.documentElement, { attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return (
    <Button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current theme: ${theme}`}
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </Button>
  )
}

function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.24em] uppercase">
      <span className="text-muted-foreground">{number}</span>
      <Separator className="max-w-12" />
      <span>{children}</span>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="portfolio-shell flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            NA
          </span>
          <span className="hidden text-sm font-semibold sm:inline">
            Nahid Abdulmalik
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="mailto:abdulmaliknahid@gmail.com"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
          >
            Let&apos;s talk
            <IconArrowUpRight data-icon="inline-end" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="portfolio-shell relative pt-16 pb-20 sm:pt-24 lg:pt-32"
    >
      <div className="grid items-end gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
        <div className="relative">
          <div className="portfolio-reveal mb-8 flex flex-wrap items-center gap-3">
            <span className="size-2 rounded-full bg-primary motion-safe:animate-pulse" />
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">
              Available for the right opportunity
            </p>
            <span className="text-muted-foreground">/ Philippines · GMT+8</span>
          </div>

          <h1 className="portfolio-display portfolio-reveal portfolio-reveal-delay-1 font-bold">
            I build
            <span className="block">interfaces</span>
            <span className="portfolio-outline-text block">that work.</span>
          </h1>

          <div className="portfolio-reveal portfolio-reveal-delay-2 mt-10 grid gap-8 sm:grid-cols-[minmax(0,26rem)_auto] sm:items-end">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Senior frontend engineer crafting fast, scalable digital products
              since 2016 — from fintech workflows to real-time drone operations.
            </p>
            <a
              href="#experience"
              className="flex size-14 items-center justify-center rounded-full border transition-transform hover:translate-y-1"
              aria-label="Explore my work experience"
            >
              <IconArrowDown />
            </a>
          </div>
        </div>

        <div className="portfolio-reveal portfolio-reveal-delay-3 relative mx-auto w-full max-w-72 lg:mx-0">
          <div className="portfolio-photo-frame relative overflow-hidden rounded-full bg-muted">
            <img
              src={meImage}
              alt="Nahid Abdulmalik, frontend software developer"
              className="aspect-[5/5] w-full object-cover object-top transition duration-500"
            />
          </div>
          <div className="absolute -right-5 -bottom-5 grid size-24 rotate-6 place-items-center rounded-full bg-primary text-center text-xs font-semibold tracking-wide text-primary-foreground uppercase">
            10 years
            <br />
            building
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const repeatedItems = [...marqueeItems, ...marqueeItems]

  return (
    <div className="portfolio-marquee overflow-hidden border-y bg-primary py-4 text-primary-foreground">
      <div className="portfolio-marquee-track flex items-center">
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-7 text-sm font-semibold tracking-[0.15em] whitespace-nowrap uppercase sm:px-10">
              {item}
            </span>
            <span aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="portfolio-shell scroll-mt-24 py-24 sm:py-32">
      <SectionLabel number="01">How I work</SectionLabel>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          I care about the invisible details: the architecture that keeps a
          product moving, the performance users feel, and the patterns that help
          teams ship with confidence.
        </p>
        <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          Engineering with a product mind and a designer&apos;s eye.
        </h2>
      </div>

      <div className="mt-16 grid border sm:grid-cols-3">
        {capabilities.map((capability, index) => (
          <article
            key={capability.number}
            className={cn(
              "portfolio-card flex min-h-72 flex-col p-7",
              index > 0 && "border-t sm:border-t-0 sm:border-l"
            )}
          >
            <span className="text-xs text-muted-foreground">
              {capability.number}
            </span>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-foreground py-24 text-background sm:py-32"
    >
      <div className="portfolio-shell">
        <SectionLabel number="02">Selected experience</SectionLabel>

        <div className="mt-12 flex flex-col gap-6 border-b border-background/20 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-3xl text-4xl leading-none font-semibold tracking-tight sm:text-6xl">
            A decade of shipping real products.
          </h2>
          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "w-fit rounded-full"
            )}
          >
            Resume
            <IconDownload data-icon="inline-end" />
          </a>
        </div>

        <div>
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="group grid gap-5 border-b border-background/20 py-9 transition-opacity sm:grid-cols-[4rem_1fr_1.5fr] sm:gap-8 lg:grid-cols-[5rem_1fr_1.5fr] lg:py-12"
            >
              <span className="text-sm text-background/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="text-xs tracking-[0.16em] text-background/55 uppercase">
                  {experience.period} · {experience.duration}
                </p>
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold transition-opacity hover:opacity-70"
                >
                  {experience.company}
                  <IconArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <p className="mt-1 text-sm text-background/60">
                  {experience.role}
                </p>
              </div>

              <div>
                <p className="leading-relaxed text-background/75">
                  {experience.description}
                </p>
                {experience.impact && (
                  <p className="mt-4 text-xs font-semibold tracking-wide text-background uppercase">
                    {experience.impact}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-background/25 px-3 py-1 text-xs text-background/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="portfolio-shell scroll-mt-20 py-24 sm:py-32">
      <SectionLabel number="03">Tools of the trade</SectionLabel>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-4xl leading-none font-semibold tracking-tight sm:text-6xl">
            Built for the modern web.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            My toolkit changes with the problem. The constants are strong
            fundamentals, pragmatic decisions, and software that remains easy to
            evolve.
          </p>
        </div>

        <div className="border-t">
          {technologyGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-5 border-b py-7 sm:grid-cols-[9rem_1fr]"
            >
              <h3 className="text-sm font-semibold">{group.label}</h3>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <IconCheck className="text-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-3">
        <div className="bg-background p-7">
          <IconBriefcase className="mb-8" />
          <p className="text-4xl font-semibold">10</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Years in product teams
          </p>
        </div>
        <div className="bg-background p-7">
          <p className="mb-8 text-xl font-semibold">3–6</p>
          <p className="text-4xl font-semibold">devs</p>
          <p className="mt-1 text-sm text-muted-foreground">Led and mentored</p>
        </div>
        <div className="bg-background p-7">
          <p className="mb-8 text-xl font-semibold">Web + mobile</p>
          <p className="text-4xl font-semibold">∞</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Curiosity for what&apos;s next
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t pt-24">
      <div className="portfolio-shell">
        <SectionLabel number="04">Get in touch</SectionLabel>

        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm text-muted-foreground">
              Have a role or project in mind?
            </p>
            <h2 className="mt-3 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              Let&apos;s build something useful.
            </h2>
          </div>
          <a
            href="mailto:abdulmaliknahid@gmail.com"
            className="grid size-32 place-items-center rounded-full bg-primary text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 hover:-rotate-6"
          >
            Start a
            <br />
            conversation
          </a>
        </div>

        <Separator />
        <div className="flex flex-col gap-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nahid Abdulmalik
          </p>
          <div className="flex flex-wrap items-center gap-5">
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
              href="mailto:abdulmaliknahid@gmail.com"
              className="flex items-center gap-2 hover:opacity-60"
            >
              <IconMail />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function CreativePortfolio() {
  return (
    <div className="creative-portfolio relative overflow-hidden text-foreground selection:bg-foreground selection:text-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Stack />
      </main>
      <Contact />
    </div>
  )
}
