import { IconBriefcase, IconUser } from "@tabler/icons-react"

import { FieldLegend, FieldSet } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { AudienceType } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

type AudienceTypePickerProps = {
  value: AudienceType | null
  onValueChange: (value: AudienceType) => void
  legend?: string
  compact?: boolean
}

export function AudienceTypePicker({
  value,
  onValueChange,
  legend = "You’re visiting as…",
  compact = false,
}: AudienceTypePickerProps) {
  return (
    <FieldSet className={cn(compact && "gap-2")}>
      <FieldLegend variant="label">{legend}</FieldLegend>
      <ToggleGroup
        value={value ? [value] : []}
        onValueChange={(values) => {
          const next = values[0]
          if (next === "visitor" || next === "recruiter") {
            onValueChange(next)
          }
        }}
        variant="accent"
        size={compact ? "default" : "lg"}
        spacing={1}
        className="grid w-full grid-cols-2"
        aria-label="Your relationship to the portfolio"
      >
        <ToggleGroupItem
          value="visitor"
          className={cn("h-auto w-full", compact ? "py-2" : "py-3")}
        >
          <IconUser aria-hidden="true" />
          Visitor
        </ToggleGroupItem>
        <ToggleGroupItem
          value="recruiter"
          className={cn("h-auto w-full", compact ? "py-2" : "py-3")}
        >
          <IconBriefcase aria-hidden="true" />
          Recruiter
        </ToggleGroupItem>
      </ToggleGroup>
    </FieldSet>
  )
}
