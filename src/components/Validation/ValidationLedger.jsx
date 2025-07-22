"use client"

import { useState } from "react"
import { jsPDF } from "jspdf"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink, Download } from "lucide-react"
import { ProofModal } from "./ProofModal"
import { toast } from "sonner"

export function ValidationTable({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewProof = (record) => {
    setSelectedRecord(record)
    setIsModalOpen(true)
  }

  const handleDownloadPDF = (tokenId) => {
    const record = data.find((r) => r.tokenId === tokenId)
    if (!record) {
      toast.error(`Unable to find record for ${tokenId}`)
      return
    }
    const doc = new jsPDF({ unit: "pt", format: "letter" })
    // … generate PDF …
    doc.save(`audit-report-${record.tokenId}.pdf`)
    toast.success(`Downloading audit report for ${record.tokenId}`)
  }

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[10px] md:text-lg font-semibold text-gray-600">
              Validation Ledger & Verifier Docs
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 hover:text-white border-none"
            >
              <span className="text-[10px] md:text-sm">
                {isCollapsed ? "Expand" : "Collapse"}
              </span>
              {isCollapsed ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardHeader>

        {!isCollapsed && (
          <CardContent className="p-0">
            {/* Table for md+ */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="border-b bg-gray-50">
                    {["Project Name ",
                    "Project ID",
                    "Registry",
                      "Date Validated",
                      "IPFS Hash",
                      "View Proof",
                      "Audit Report",
                    ].map((heading, i) => (
                      <th
                        key={i}
                        className="py-3 px-4 text-left font-semibold text-gray-700"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((r, i) => (
                    <tr
                      key={r.tokenId}
                      className={`border-b hover:bg-gray-50 ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                        <td className="py-2 px-4 text-sm text-gray-700">{r.name}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{r.id}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{r.registry}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{r.dateRetired}</td>
                      <td className="py-2 px-4 break-words font-mono text-sm text-gray-600">{r.ipfsHash}</td>
                      <td className="py-2 px-4">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleViewProof(r)}
                          className="flex items-center space-x-1 p-0 text-blue-600 hover:text-blue-800"
                        >
                          <span>View</span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </td>
                      <td className="py-2 px-4">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleDownloadPDF(r.tokenId)}
                          className="flex items-center space-x-1 p-0 text-blue-600 hover:text-blue-800"
                        >
                          <span>Download</span>
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card list for small screens */}
            <div className="md:hidden space-y-4 p-4">
              {data.map((r) => (
                <div
                  key={r.tokenId}
                  className="border rounded-lg bg-white p-4 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-blue-600">
                      {r.tokenId}
                    </span>
                    <div className="flex space-x-2">
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleViewProof(r)}
                        className="flex items-center space-x-1 p-0 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleDownloadPDF(r.tokenId)}
                        className="flex items-center space-x-1 p-0 text-blue-600 hover:text-blue-800"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Retired:</strong> {r.dateRetired}
                  </div>
                  <div className="break-words text-sm text-gray-600">
                    <strong>IPFS:</strong> {r.ipfsHash}
                  </div>
                </div>
              ))}
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
