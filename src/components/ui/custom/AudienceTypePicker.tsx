import { IconBriefcase, IconUser } from "@tabler/icons-react"

import { FieldLegend, FieldSet } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { AudienceType } from "@/lib/portfolio-data"

type AudienceTypePickerProps = {
  value: AudienceType | null
  onValueChange: (value: AudienceType) => void
  legend?: string
}

export function AudienceTypePicker({
  value,
  onValueChange,
  legend = "You’re visiting as…",
}: AudienceTypePickerProps) {
  return (
    <FieldSet>
      <FieldLegend variant="label">{legend}</FieldLegend>
      <ToggleGroup
        value={value ? [value] : []}
        onValueChange={(values) => {
          const next = values[0]
          if (next === "visitor" || next === "recruiter") {
            onValueChange(next)
          }
        }}
        variant="outline"
        size="lg"
        spacing={1}
        className="grid w-full grid-cols-2"
        aria-label="Your relationship to the portfolio"
      >
        <ToggleGroupItem
          value="visitor"
          className="h-auto w-full py-3 aria-pressed:bg-primary aria-pressed:text-primary-foreground"
        >
          <IconUser aria-hidden="true" />
          Visitor
        </ToggleGroupItem>
        <ToggleGroupItem
          value="recruiter"
          className="h-auto w-full py-3 aria-pressed:bg-primary aria-pressed:text-primary-foreground"
        >
          <IconBriefcase aria-hidden="true" />
          Recruiter
        </ToggleGroupItem>
      </ToggleGroup>
    </FieldSet>
  )
}
