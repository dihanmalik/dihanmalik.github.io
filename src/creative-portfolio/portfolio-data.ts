export type Experience = {
  company: string
  role: string
  period: string
  duration: string
  description: string
  impact?: string
  href: string
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: "Amlak International",
    role: "Senior Frontend Developer",
    period: "2024 — 2026",
    duration: "2+ years",
    description:
      "Established the frontend architecture for an employee financing platform, then built the loan application, approval, disbursement, user management, and reporting journeys.",
    impact: "Architecture · Fintech workflows · Cross-functional delivery",
    href: "https://www.amlakint.com/en/",
    stack: ["React", "TypeScript", "MobX", "TanStack Query", "Ant Design"],
  },
  {
    company: "Swoop Aero",
    role: "Senior Frontend Developer",
    period: "2021 — 2024",
    duration: "2+ years",
    description:
      "Helped launch the beta of a pilot portal for managing drone flights and contributed to a real-time, multi-user flight monitoring system.",
    impact: "Aerospace · Real-time monitoring · Geospatial UI",
    href: "https://kite.aero/",
    stack: ["React", "Mapbox", "GeoJSON", "Redux", "Cypress"],
  },
  {
    company: "Reps & Co.",
    role: "Frontend Developer",
    period: "2021",
    duration: "2 months",
    description:
      "Contributed to an event ticketing platform that made creating, managing, and purchasing tickets feel seamless for organizers and customers.",
    href: "https://www.repsandcompany.com/",
    stack: ["React", "Redux", "Material UI", "Jest"],
  },
  {
    company: "Viyahe Inc.",
    role: "Mid Frontend Developer",
    period: "2020 — 2021",
    duration: "1+ year",
    description:
      "Maintained and optimized a flight booking system for travel agents, improving performance, reliability, and the overall booking experience.",
    href: "https://www.viyahe.com/",
    stack: ["React", "Redux Saga", "Material UI", "Jest"],
  },
  {
    company: "Invento Software Solution",
    role: "Junior → Senior Frontend Developer",
    period: "2016 — 2020",
    duration: "3+ years",
    description:
      "Built scalable web and mobile products, created reusable frontend foundations, and led teams of 3–6 developers through mentoring and code reviews.",
    impact: "Team leadership · React Native · Design systems",
    href: "https://www.invento.com/",
    stack: ["React", "React Native", "Redux", "jQuery", "Material UI"],
  },
]

export const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    description:
      "I turn complex requirements into clear, fast interfaces that hold up in real production workflows.",
  },
  {
    number: "02",
    title: "Frontend architecture",
    description:
      "Scalable foundations, predictable state, reusable systems, and a codebase the next developer can understand.",
  },
  {
    number: "03",
    title: "Team multiplier",
    description:
      "Thoughtful reviews, practical mentoring, and close collaboration with design, product, and backend teams.",
  },
]

export const technologyGroups = [
  {
    label: "Core",
    items: ["TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "State & data",
    items: ["MobX", "Redux", "TanStack Query", "Zustand", "Axios"],
  },
  {
    label: "Quality",
    items: ["Vitest", "Jest", "Cypress", "Storybook"],
  },
  {
    label: "Systems",
    items: ["Node.js", "Fastify", "PostgreSQL", "Redis", "Docker"],
  },
]
