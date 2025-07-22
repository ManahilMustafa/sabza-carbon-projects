import { Calendar, Leaf, Award, Building2, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"



export function KPICards({ metrics }) {
  const kpiData = [
    {
      icon: Calendar,
      label: "Period",
      value: metrics.period,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Leaf,
      label: "CO₂e Offset",
      value: `${metrics.co2Offset.toLocaleString()} tCO₂e`,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      label: "Tokens Retired",
      value: `${metrics.tokensRetired.toLocaleString()} SCC`,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Building2,
      label: "Projects Supported",
      value: metrics.projectsSupported.toString(),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: CheckCircle,
      label: "SABZA Score",
      value: metrics.esgScore,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {kpiData.map((kpi, index) => {
        const IconComponent = kpi.icon
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                  <IconComponent className={`h-5 w-5 ${kpi.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-600 truncate">{kpi.label}</p>
                  <p className="text-lg font-semibold text-gray-900 truncate">{kpi.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
