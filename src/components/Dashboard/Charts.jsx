import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

export function Charts({ monthlyData, projectTypeData }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Monthly Offsets Line Chart */}
        <Card className="min-w-0">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Monthly Offsets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 sm:h-56 md:h-64 w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value) => [`${value} tCO₂e`, "Offsets"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="offsets"
                    stroke="#22C55E"
                    strokeWidth={3}
                    dot={{ fill: "#22C55E", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#22C55E", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Project Type Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Offset by Project Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 sm:h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectTypeData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="type"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value) => [`${value} tCO₂e`, "Offsets"]}
                  />
                  <Bar dataKey="offsets" fill="#22C55E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
