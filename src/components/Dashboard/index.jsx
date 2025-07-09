import { KPICards } from "./KPICards"
import { Charts } from "./Charts"



export function Dashboard({ metrics, monthlyData, projectTypeData }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Carbon Offset Portfolio at a Glance</h2>
        <p className="text-gray-600">Track your environmental impact and carbon offset achievements</p>
      </div>

      <KPICards metrics={metrics} />
      <Charts monthlyData={monthlyData} projectTypeData={projectTypeData} />
    </div>
  )
}
