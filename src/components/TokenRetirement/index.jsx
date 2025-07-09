import { RetirementTable } from "./RetirementTable"



export function TokenRetirement({ data }) {
  return (
    <div className="space-y-6">
      <RetirementTable data={data} />
    </div>
  )
}
