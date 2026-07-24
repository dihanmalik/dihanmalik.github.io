import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import { Chip } from "../ui/chip"

type RoadMapItem = {
  id: number
  date: string
  title: React.ReactNode
  subTitle?: string
  description: React.ReactNode
  tags?: string[]
  important?: boolean
}

const baseRoadmap: RoadMapItem[] = [
  {
    id: 1,
    date: "Feb 2024 August 2026",
    title: "Amlak International",
    subTitle: "Frontend Developer",
    description:
      "Deep integration of advanced LLMs for real-time code generation and context-aware suggestions.",
  },
  {
    id: 2,
    date: "Sept 2021 Feb 2024",
    title: "Swoop Aero",
    subTitle: "Frontend Developer",
    description:
      "Multi-user real-time collaboration with shared cursors and instant synchronization across workspaces.",
  },
  {
    id: 3,
    date: "Aug 2021 Sept 2021",
    title: "Reps & Co.",
    subTitle: "Frontend Developer",
    description:
      "Interactive interface for creating and managing custom design systems with automated CSS variable generation.",
  },
  {
    id: 4,
    date: "Apr 2020 June 2021",
    title: "Viyahe Inc.",
    subTitle: "Frontend Developer",
    description:
      "Role-based access control, SOC2 compliance audit, and enhanced data encryption protocols.",
  },
  {
    id: 5,
    date: "Sept 2016 March 2020",
    title: "Invento Software Solution",
    subTitle: "Frontend Developer",
    description:
      "Role-based access control, SOC2 compliance audit, and enhanced data encryption protocols.",
  },
]

export const Timeline2: React.FC<{ roadmap?: RoadMapItem[] }> = ({
  roadmap = baseRoadmap,
}) => {
  return (
    <Timeline defaultValue={roadmap.length} className="w-full">
      {roadmap.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="sm:group-data-[orientation=vertical]/timeline:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator
            // className={item.important ? "!bg-yellow-500" : ""}
            />
            <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-center">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="flex flex-row items-baseline gap-2 text-lg sm:-mt-1.5">
              {item.title}{" "}
              {item.subTitle && (
                <span className="text-[0.75rem] text-muted-foreground">
                  {item.subTitle}
                </span>
              )}
            </TimelineTitle>
            <TimelineIndicator
              className={
                item.important ? "!border-yellow-800 bg-yellow-500" : ""
              }
            />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
          {item.tags && (
            <div className="flex flex-row flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  )
}
