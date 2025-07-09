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
      label: "ESG Score",
      value: metrics.esgScore,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ]

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpiData.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <Card key={idx} className="w-full hover:shadow-md transition-shadow">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${kpi.bgColor} flex-shrink-0`}>
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${kpi.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">
                      {kpi.label}
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                      {kpi.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
