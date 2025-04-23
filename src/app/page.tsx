"use client"

import { useState } from "react"
import { FilePicker } from "@/components/ui/FilePicker"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [files, setFiles] = useState<File[]>([])
  const [pattern, setPattern] = useState("[{counter},{date}]")

  const handleRename = () => {
    if (files.length === 0) return
    
    // Implement your renaming logic here
    const renamedFiles = files.map((file, index) => {
      const date = new Date().toISOString().split('T')[0] // YYYY-MM-DD
      const extension = file.name.split('.').pop()
      return {
        original: file.name,
        renamed: `_${String(index + 1).padStart(3, '0')}_${date}.${extension}`
      }
    })
    
    console.log(renamedFiles)
    // TODO: Add download functionality
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">File Renamer</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-2">Upload Files</h2>
          <FilePicker onFilesSelected={setFiles} />
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Naming Pattern</h2>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g. [{counter},{date}]"
          />
          <p className="text-sm text-gray-500 mt-1">
            Available placeholders: {"{counter}"}, {"{date}"}, {"{text}"}
          </p>
        </div>

        {files.length > 0 && (
          <div>
            <h2 className="text-lg font-medium mb-2">Preview</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Original Filename</th>
                    <th className="px-4 py-2 text-left">New Filename</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {files.map((file, index) => {
                    const date = new Date().toISOString().split('T')[0]
                    const extension = file.name.split('.').pop()
                    return (
                      <tr key={index}>
                        <td className="px-4 py-2">{file.name}</td>
                        <td className="px-4 py-2">
                          {`_${String(index + 1).padStart(3, '0')}_${date}.${extension}`}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <Button 
          onClick={handleRename}
          disabled={files.length === 0}
          className="w-full"
        >
          Rename & Download Files
        </Button>
      </div>
    </div>
  )
}