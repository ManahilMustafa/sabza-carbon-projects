"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Zap, Award, ExternalLink } from "lucide-react"
import { toast } from "sonner"


export function ProjectCard({ project, onViewDetails }) {
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
const handleViewCertificate = (project) => {
    // Mock certificate viewing functionality
    const certificateUrl = `https://certificates.sabza.com/project/${project.id}`
    
    // Show loading state (you can add a toast notification here)
    console.log(`Opening certificate for ${project.title}...`)
    
    // Simulate opening certificate in new tab
    window.open(certificateUrl, '_blank')
    
    // Show success notification (mock)
    setTimeout(() => {
     toast(`Certificate for ${project.title} opened successfully!`)
    }, 500)
  }
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-2">
           <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-lg text-gray-900 leading-tight">{project.title}</h3>
                                 <Badge className="bg-blue-100 text-blue-900" variant="secondary">
                                  Id-{project.id}
                                </Badge>
                                </div>
  
          <p className="text-sm text-gray-600">{project.subtitle}</p>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{project.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-1 ">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-gray-600">Capacity:</span>
            </div>
            <span className="font-medium text-gray-600">{project.capacity}</span>

            <div className="flex items-center space-x-1 text-gray-600">
              <Award className="h-4 w-4 text-green-500" />
              <span className="text-gray-600">CO₂ Offset:</span>
            </div>
            <span className="font-medium text-gray-600">{project.offset.toLocaleString()} tCO₂e</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-gray-600">
              <span className="text-sm text-gray-600">Verifier:</span>
              <span className="text-sm font-medium">{project.verifier}</span>
            </div>
            <div className="flex items-center justify-between text-gray-600">
              <span className="text-sm text-gray-600">Status:</span>
              <Badge className={getStatusColor(project.status)} variant="secondary">
                {project.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-2 text-gray-600">
            <p className="text-sm text-gray-600">Co-benefits:</p>
            <div className="flex flex-wrap gap-1">
              {project.coBenefits.map((benefit, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
        </div>

        <div className="pt-4 mt-4 border-t space-y-2">
          <Button onClick={() => onViewDetails(project)} className="w-full text-green-600">
            View Details
          </Button>
          <Button  onClick={() => handleViewCertificate(project)}  className="w-full flex items-center justify-center space-x-2 bg-green-600 px-4 py-2 rounded">
            <ExternalLink className="h-4 w-4" />
            <span>View Certificate</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
