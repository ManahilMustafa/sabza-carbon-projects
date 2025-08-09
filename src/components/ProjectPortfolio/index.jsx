import { ProjectGrid } from "./ProjectGrid"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function ProjectPortfolio({ projects }) {
  return (
    <div className="space-y-6">
      {/* Top Section: Title + Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Retirement Proof - Impact You're Supporting
          </h2>
          <p className="text-gray-600">
            Explore the verified carbon offset projects
          </p>
        </div>

        {/* Filters in a row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 focus:outline-none focus:ring-0 focus:border-gray-300" />
            <Input placeholder="Search projects..." className="pl-9 w-64 focus:outline-none focus:ring-0 focus:border-gray-300" />
          </div>

          {/* Dropdown */}
          <Select>
            <SelectTrigger className="w-56 bg-white">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="forest">Forest Conservation</SelectItem>
              <SelectItem value="renewable">Renewable Energy</SelectItem>
              <SelectItem value="community">Community Projects</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectGrid projects={projects} />
    </div>
  );
}
