"use client"

import { useState } from "react"
import { jsPDF } from "jspdf"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink, Download } from "lucide-react"
import { ProofModal } from "./ProofModal"
import { toast } from "sonner"

export function RetirementTable({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewProof = (record) => {
    setSelectedRecord(record)
    setIsModalOpen(true)
  }

  const handleDownloadPDF = (tokenId) => {
    // 1. Find the full record
    const record = data.find((r) => r.tokenId === tokenId)
    if (!record) {
      console.error("Record not found for tokenId", tokenId)
      toast(`Unable to find record for ${tokenId}`)
      return
    }

    // 2. Create the PDF
    const doc = new jsPDF({ unit: "pt", format: "letter" })

    // Header
    doc.setFontSize(18)
    doc.text(" Audit Report", 40, 60)

    // Body
    doc.setFontSize(12)
    const lineHeight = 20
    let y = 100

    doc.text(`Token ID: ${record.tokenId}`, 40, y)
    y += lineHeight
    doc.text(`Date Retired: ${record.dateRetired}`, 40, y)
    y += lineHeight
    doc.text(`IPFS Hash: ${record.ipfsHash}`, 40, y)
    y += lineHeight
    doc.text(`Smart Contract: ${record.smartContract}`, 40, y)
    y += lineHeight
    doc.text(`Geo Coordinates: ${record.geoCoordinates}`, 40, y)
    y += lineHeight
    doc.text(`Vintage Year: ${record.vintageYear}`, 40, y)

    // 3. Trigger download
    doc.save(`audit-report-${record.tokenId}.pdf`)

    // 4. Notify user
    toast.success(`Downloading audit report for ${record.tokenId}`)
  }

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-600">
              Retirement Ledger & Verifier Docs
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 hover:text-white border-none"
            >
              <span className="text-sm">{isCollapsed ? "Expand" : "Collapse"}</span>
              {isCollapsed ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardHeader>
        {!isCollapsed && (
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Token ID
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Date Retired
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      IPFS Hash
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      View Proof
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Audit Report
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((record, index) => (
                    <tr
                      key={record.tokenId}
                      className={`border-b border-gray-100 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-3 px-4 font-mono text-sm text-blue-600">
                        {record.tokenId}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {record.dateRetired}
                      </td>
                      <td className="py-3 px-4 font-mono text-sm text-gray-600">
                        {record.ipfsHash}
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleViewProof(record)}
                          className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal flex items-center space-x-1"
                        >
                          <span>View NFT on-chain</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleDownloadPDF(record.tokenId)}
                          className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal flex items-center space-x-1"
                        >
                          <span>Download PDF</span>
                          <Download className="h-3 w-3" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        )}
      </Card>

      <ProofModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        record={selectedRecord}
      />
    </>
  )
}
