"use client"

import { useState } from "react"
import { ProjectCard } from "./ProjectCard"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Calendar,
  FileText,
  Award,
  ExternalLink,
} from "lucide-react"
import { toast } from "sonner"

export function ProjectGrid({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleViewCertificate = (project) => {
    const url = `https://certificates.sabza.com/project/${project.id}`
    window.open(url, "_blank")
    toast.success(`Certificate for ${project.title} opened!`)
  }

  const handleDownloadReport = (project) => {
    const filename = `${project.title.replace(/\s+/g, "-").toLowerCase()}-report.pdf`
    const link = document.createElement("a")
    link.href = "#" // your real URL here
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success(`Report for ${project.title} downloaded!`)
  }

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "solar":
        return "bg-yellow-100 text-yellow-800"
      case "wind":
        return "bg-blue-100 text-blue-800"
      case "methane capture":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "verified":
      case "active":
        return "bg-green-100 text-green-800"
      case "corsia-eligible":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      {/* Grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span>Project Details</span>
                </DialogTitle>
              </DialogHeader>

              {/* Image + Basic Info */}
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    {selectedProject.subtitle}
                  </p>
                  <div className="flex items-center text-gray-600 space-x-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getTypeColor(selectedProject.type)}>
                      {selectedProject.type}
                    </Badge>
                    <Badge className={getStatusColor(selectedProject.status)}>
                      {selectedProject.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2 space-x-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800 text-sm">
                      CO₂ Reduced
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-900 truncate">
                    {selectedProject.details.co2Reduced}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-2 space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800 text-sm">
                      Vintage Year
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-900 truncate">
                    {selectedProject.details.vintage}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center mb-2 space-x-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-purple-800 text-sm">
                      Methodology
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-purple-900 truncate">
                    {selectedProject.details.methodology}
                  </p>
                </div>
              </div>

              {/* Description + Tech Details */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                    Description
                  </h3>
                  <p className="text-gray-700 text-sm">{selectedProject.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Technical Details
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capacity:</span>
                        <span className="font-medium">{selectedProject.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Verifier:</span>
                        <span className="font-medium">{selectedProject.verifier}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Offset:</span>
                        <span className="font-medium">
                          {selectedProject.offset.toLocaleString()} tCO₂e
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Co-benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.coBenefits.map((b, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {b}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleViewCertificate(selectedProject)}
                  className="flex-1 flex items-center justify-center space-x-2 text-green-600 border-green-500 hover:bg-green-50 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">View Certificate</span>
                </Button>
                <Button
                  onClick={() => handleDownloadReport(selectedProject)}
                  className="flex-1 flex items-center justify-center space-x-2 text-white bg-green-600 hover:bg-green-700 transition"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Download Report</span>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
