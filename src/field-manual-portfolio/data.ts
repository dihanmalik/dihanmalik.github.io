export type WorkEntry = {
  company: string
  role: string
  period: string
  note: string
  focus: string[]
  href: string
}

export type EducationEntry = {
  title: string
  period: string
  description: string
  highlights: string[]
  href?: string
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

export const educationEntries: EducationEntry[] = [
  {
    title: "First Asia Institute of Technology and Humanities",
    period: "2012—2016",
    description:
      "Graduated with a Bachelor of Science in Computer Science. Participated in the two-day PLDT Hackathon 2015, creating a system solution for a local government unit.",
    highlights: [
      "Dean's Lister ×2",
      "John von Neumann Medal nominee",
      "Best Thesis of SY 2016 nominee",
    ],
    href: "https://www.firstasia.edu.ph/",
  },
  {
    title: "PCCI-Batangas sponsored thesis",
    period: "2015—2016",
    description:
      "Built a content management system for the Philippine Chamber of Commerce and Industry in Batangas, using a weighted PageRank algorithm to help people locate nearby services across the province.",
    highlights: [
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Semantic UI",
      "Laravel",
      "MySQL",
    ],
    href: "http://pcci-bats.tk/",
  },
  {
    title: "Summer internship",
    period: "SY 2015",
    description:
      "Collaborated in a four-person team on Pre-Jordan, an electronic baptismal management system for a church in Balele, Tanauan City, and E-Museum, a virtual showcase of Batangas culture and history.",
    highlights: ["C#", "VB.NET", "Unity 3D", "Blender"],
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
