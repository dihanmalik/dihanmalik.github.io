export type WorkEntry = {
  company: string
  role: string
  period: string
  note: string
  focus: string[]
  href: string
}

export const workEntries: WorkEntry[] = [
  {
    company: "Amlak International",
    role: "Senior Frontend Developer",
    period: "2024—2026",
    note: "Set up the frontend architecture for an employee financing system and delivered loan application, approval, disbursement, user management, and reporting flows.",
    focus: ["Fintech", "Architecture", "React", "TypeScript", "MobX"],
    href: "https://www.amlakint.com/en/",
  },
  {
    company: "Swoop Aero",
    role: "Senior Frontend Developer",
    period: "2021—2024",
    note: "Helped launch a pilot portal for drone-flight operations and built for real-time, multi-user monitoring in a demanding aerospace environment.",
    focus: ["Aerospace", "Mapbox", "GeoJSON", "Real-time UI", "React"],
    href: "https://kite.aero/",
  },
  {
    company: "Reps & Co.",
    role: "Frontend Developer",
    period: "2021",
    note: "Contributed to a platform for creating, managing, and purchasing event tickets.",
    focus: ["Ticketing", "Redux", "Material UI", "Testing"],
    href: "https://www.repsandcompany.com/",
  },
  {
    company: "Viyahe Inc.",
    role: "Mid Frontend Developer",
    period: "2020—2021",
    note: "Maintained and optimized a flight-booking system for travel agents, improving speed, reliability, and the booking experience.",
    focus: ["Travel", "Optimization", "Redux Saga", "React"],
    href: "https://www.viyahe.com/",
  },
  {
    company: "Invento Software Solution",
    role: "Junior → Senior Frontend Developer",
    period: "2016—2020",
    note: "Built web and mobile products, created reusable frontend foundations, and led teams of three to six developers through reviews and mentoring.",
    focus: ["Team lead", "React Native", "Reusable systems", "Mentoring"],
    href: "https://www.invento.com/",
  },
]

export const optimizationNotes = [
  {
    title: "Render less",
    copy: "Trace wasted work, keep state close to where it belongs, and make re-renders intentional.",
  },
  {
    title: "Ship less",
    copy: "Treat bundle weight as a product constraint through sensible boundaries, lazy loading, and dependency discipline.",
  },
  {
    title: "Wait less",
    copy: "Design data flows, caching, optimistic feedback, and loading states around perceived speed—not only lab scores.",
  },
  {
    title: "Regress less",
    copy: "Pair measurement with repeatable checks so performance stays healthy after the first optimization pass.",
  },
]

export const toolkit = [
  "React",
  "TypeScript",
  "Next.js",
  "MobX",
  "Redux",
  "TanStack Query",
  "Tailwind CSS",
  "Storybook",
  "Jest",
  "Cypress",
  "Node.js",
  "Fastify",
  "PostgreSQL",
  "Docker",
]
