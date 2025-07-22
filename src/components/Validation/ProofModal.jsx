"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Calendar, Hash, FileText } from "lucide-react"


export function ProofModal({ isOpen, onClose, record }) {
  if (!record) return null

  const handleViewOnChain = () => {
    // Mock blockchain explorer link
    window.open(`https://etherscan.io/token/${record.smartContract}`, "_blank")
  }

  const handleViewIPFS = () => {
    // Mock IPFS link
    window.open(`https://ipfs.io/ipfs/${record.ipfsHash}`, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-green-600" />
            <span>Validation Proof</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Token Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Validation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Hash className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Project ID</p>
                  <p className="font-mono text-sm font-medium">{record.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Validated Date</p>
                  <p className="text-sm font-medium">{record.dateRetired}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Coordinates</p>
                  <p className="text-sm font-medium">{record.geoCoordinates}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Vintage Year</p>
                  <p className="text-sm font-medium">{record.vintageYear}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Information */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Blockchain Verification</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Smart Contract</p>
                <p className="font-mono text-sm font-medium text-blue-600">{record.smartContract}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">IPFS Hash</p>
                <p className="font-mono text-sm font-medium text-blue-600">{record.ipfsHash}</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Verified
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                On-Chain
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={handleViewOnChain} className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white">
              <ExternalLink className="h-4 w-4" />
              <span>View on Blockchain</span>
            </Button>
            <Button variant="outline" onClick={handleViewIPFS} className="flex items-center space-x-2 bg-transparent text-green-500 hover:text-green-600">
              <ExternalLink className="h-4 w-4" />
              <span>View IPFS Metadata</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
