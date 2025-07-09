import { RetirementTable } from "./RetirementTable"

export function TokenRetirement({ data }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="container mx-auto space-y-6">
        <RetirementTable data={data} />
      </div>
    </section>
  )
}