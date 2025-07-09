"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Zap, Award, ExternalLink } from "lucide-react"

export function ProjectCard({ project, onViewDetails }) {
  const getTypeColor = (type) => { /* same as before */ }
  const getStatusColor = (status) => { /* same as before */ }

  const handleViewCertificate = (project) => {
    const url = `https://certificates.sabza.com/project/${project.id}`
    window.open(url, "_blank")
    // ...toast logic
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
      {/* IMAGE */}
      <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getTypeColor(project.type)}>
            {project.type}
          </Badge>
        </div>
      </div>

      {/* HEADER */}
      <CardHeader className="pb-2 px-4 sm:px-6">
        <h3 className="font-semibold text-base sm:text-lg text-gray-900">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          {project.subtitle}
        </p>
        <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 mt-1">
          <MapPin className="h-4 w-4" />
          <span>{project.location}</span>
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex-1 flex flex-col px-4 sm:px-6">
        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base mb-4">
          <div className="flex items-center space-x-1">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-gray-600">Capacity:</span>
            <span className="font-medium text-gray-700">
              {project.capacity}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Award className="h-4 w-4 text-green-500" />
            <span className="text-gray-600">CO₂ Offset:</span>
            <span className="font-medium text-gray-700">
              {project.offset.toLocaleString()} tCO₂e
            </span>
          </div>
        </div>

        {/* Verifier & Status */}
        <div className="space-y-2 mb-4 text-sm sm:text-base text-gray-600">
          <div className="flex justify-between">
            <span>Verifier:</span>
            <span className="font-medium">{project.verifier}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Status:</span>
            <Badge
              className={getStatusColor(project.status)}
              variant="secondary"
            >
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Co-benefits */}
        <div className="mb-4 text-sm sm:text-base text-gray-600">
          <p className="mb-1">Co-benefits:</p>
          <div className="flex flex-wrap gap-1">
            {project.coBenefits.map((b, i) => (
              <Badge key={i} variant="outline" className="text-xs sm:text-sm">
                {b}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* ACTIONS */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <Button
            onClick={() => onViewDetails(project)}
            className="flex-1 text-green-600 border-green-600 hover:bg-green-50"
            variant="outline"
          >
            View Details
          </Button>
          <Button
            onClick={() => handleViewCertificate(project)}
            className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white hover:bg-green-700"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Certificate</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
