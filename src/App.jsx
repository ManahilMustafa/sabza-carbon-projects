import { Header } from "./components/common/Header"
import { Dashboard } from "./components/Dashboard"
import { TokenRetirement } from "./components/TokenRetirement"
import { ProjectPortfolio } from "./components/ProjectPortfolio"
import { esgMetrics, monthlyOffsetsData, projectTypeData, retirementData, projectsData } from "./data/mockData"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-full mx-auto px-6 py-8 space-y-12">
        {/* Dashboard Section */}
        <Dashboard metrics={esgMetrics} monthlyData={monthlyOffsetsData} projectTypeData={projectTypeData} />

        {/* Token Retirement Section */}
        <TokenRetirement data={retirementData} />

        {/* Project Portfolio Section */}
        <ProjectPortfolio projects={projectsData} />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-green-100 rounded">
                <div className="h-4 w-4 bg-green-600 rounded"></div>
              </div>
              <span className="text-sm text-gray-600">© 2025 SABZA Carbon Dashboard. Built with React.js</span>
            </div>
            <div className="text-sm text-gray-500">Assignment by Zafar Imran | ZICOND CLOUD</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
