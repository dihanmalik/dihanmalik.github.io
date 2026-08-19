import { Timeline2 } from "@/components/examples/c-timeline-2"
import { Button } from "@/components/ui/button"
import { IconDownload, IconLink, IconUserScan } from "@tabler/icons-react"
import myCVFile from "@/assets/CV_2026.pdf"

const roadmap = [
  {
    id: 6,
    date: "",
    important: true,
    title: (
      <a
        href="https://www.linkedin.com/in/abdulmaliknahid/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg font-bold hover:text-blue-500"
      >
        Hire me!{" "}
        <IconUserScan size={25} className="relative bottom-0.5 inline-block" />
      </a>
    ),
    description: (
      <div className="flex flex-col gap-4 rounded-lg border border-yellow-200 bg-yellow-50 p-5 dark:border-yellow-500 dark:bg-yellow-100 dark:text-gray-800">
        <p>
          I am currently seeking new opportunities as a Senior Frontend
          Developer or Full-stack TypeScript Developer. If you are looking for a
          dedicated developer who can work from interface to API and data,
          please feel free to reach out to me via{" "}
          <a
            href="https://www.linkedin.com/in/abdulmaliknahid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-500"
          >
            LinkedIn <IconLink size={15} className="inline-block" />
          </a>
        </p>
        <Button
          className="w-fit gap-2 bg-blue-500 text-white hover:bg-blue-600 hover:text-white dark:bg-black dark:text-white dark:hover:bg-gray-800"
          variant="outline"
        >
          <a href={myCVFile} target="_blank">
            Download my Resume{" "}
          </a>
          <IconDownload data-icon="inline-end" />
        </Button>
      </div>
    ),
  },
  {
    id: 1,
    date: "Feb 2024 August 2026",
    title: (
      <a
        href="https://www.amlakint.com/en/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        Amlak International <IconLink size={15} className="inline-block" />
      </a>
    ),
    subTitle: "2+ years",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          As a Sr. Frontend Developer, I successfully set up the project
          repository and initial architecture for a financing system for Amlak's
          employees, ensuring a solid foundation for future development.
        </p>
        <p>
          Implemented features such as loan application, approval, and
          disbursement processes, as well as user management and reporting
          functionalities. Collaborated with cross-functional teams to ensure
          seamless integration with backend services and third-party APIs.
        </p>
      </div>
    ),
    tags: [
      "Sr. Frontend Dev",
      "ReactJS",
      "MobX",
      "TypeScript",
      "Tanstack Query",
      "Axios",
      "Vite",
      "Vitest",
      "Cypress",
      "HTML",
      "CSS",
      "AntD",
      "Git",
      "Atlassian",
    ],
  },
  {
    id: 2,
    date: "Sept 2021 Feb 2024",
    title: (
      <a
        href="https://kite.aero/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        Swoop Aero <IconLink size={15} className="inline-block" />
      </a>
    ),
    subTitle: "2+ years",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          I played a key role in launching the beta version of pilot's portal
          for managing drone flights, contributing to the development of a
          multi-user real-time monitoring system.
        </p>
        <p>
          I had the opportunity to work in aeorospace field, which was a unique
          experience that allowed me to apply my skills in a specialized
          industry.
        </p>
      </div>
    ),
    tags: [
      "Sr. Frontend Dev",
      "Mapbox",
      "GeoJSON",
      "ReactJS",
      "Redux",
      "MobX",
      "TypeScript",
      "Tanstack Query",
      "Axios",
      "Jest",
      "Cypress",
      "TailwindCSS",
      "HTML",
      "CSS",
      "MUI",
      "AntD",
      "Git",
      "GitLab",
    ],
  },
  {
    id: 3,
    date: "July 2021 Sept 2021",
    title: (
      <a
        href="https://www.repsandcompany.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        Reps & Co. <IconLink size={15} className="inline-block" />
      </a>
    ),
    subTitle: "2 months",
    description:
      "I contributed to the development of a platform that allows users to create and manage event tickets, providing a seamless experience for both event organizers and customers.",
    tags: [
      "Frontend Dev",
      "ReactJS",
      "Redux",
      "Axios",
      "Jest",
      "Cypress",
      "TailwindCSS",
      "HTML",
      "CSS",
      "MUI",
      "Git",
    ],
  },
  {
    id: 4,
    date: "Apr 2020 June 2021",
    title: (
      <a
        href="https://www.viyahe.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        Viyahe Inc. <IconLink size={15} className="inline-block" />
      </a>
    ),
    subTitle: "1+ years",
    description:
      "Maintained and optimized Viyahe's flight booking system for travel agents, improving application performance, reliability, and the overall booking experience while supporting ongoing feature enhancements.",
    tags: [
      "Mid Frontend Dev",
      "ReactJS",
      "Redux",
      "Redux-Saga",
      "Axios",
      "Jest",
      "TailwindCSS",
      "HTML",
      "CSS",
      "MUI",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 5,
    date: "Sept 2016 March 2020",
    title: (
      <a
        href="https://www.invento.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        Invento Software Solution{" "}
        <IconLink size={15} className="inline-block" />
      </a>
    ),
    subTitle: "3+ years",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Software Developer building scalable web and mobile applications with
          TypeScript and ReactJS while creating reusable architectures,
          boilerplates, design patterns, and optimized, well-tested solutions
          that improve both system performance and user experience.
        </p>
        <p>
          I also lead frontend teams of 3–6 developers through code reviews and
          mentoring, working closely with designers to deliver reusable
          components and maintain high standards in user experience, code
          quality, and application performance.
        </p>
      </div>
    ),
    tags: [
      "Jr. to Sr. Frontend Dev",
      "Vanilla JS",
      "jQuery",
      "ReactJS",
      "React Native",
      "React Expo",
      "Redux",
      "Redux-Saga",
      "Axios",
      "Jest",
      "HTML",
      "CSS",
      "MUI",
      "Git",
      "Atlassian",
    ],
  },
]

export const WorkExperienceSection = () => {
  return (
    <div className="flex w-full flex-col gap-10 pt-18">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div>
        <Timeline2 roadmap={roadmap} />
      </div>
    </div>
  )
}
