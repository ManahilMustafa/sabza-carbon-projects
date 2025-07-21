import { KPICards } from "./KPICards"
import { Charts } from "./Charts"

export function Dashboard({ metrics, monthlyData, projectTypeData }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Intro */}
      <div className="max-w-full mx-auto space-y-2 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Your Carbon Offset Portfolio at a Glance
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Track your environmental impact and carbon offset achievements
        </p>
      </div>

      {/* KPIs + Charts */}
      <div className="max-w-7xl mx-auto space-y-8">
        <KPICards metrics={metrics} />
        <Charts monthlyData={monthlyData} projectTypeData={projectTypeData} />
      </div>
    </section>
  )
}
