import { ProjectGrid } from "./ProjectGrid"

export function ProjectPortfolio({ projects }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Retirement Proof – Impact You&#39;re Supporting
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Explore the verified carbon offset projects in your portfolio
          </p>
        </div>

        {/* Grid */}
        <div>
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  )
}
