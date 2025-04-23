"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

export function FilePicker({ onFilesSelected }: {
  onFilesSelected: (files: File[]) => void
}) {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFilesSelected(acceptedFiles)
  }, [onFilesSelected])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt']
    }
  })

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive ? (
            'Drop files here'
          ) : (
            'Drag & drop files here, or click to select files'
          )}
        </p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium">Selected Files:</h3>
          <ul className="divide-y divide-gray-200">
            {files.map((file, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span className="truncate">{file.name}</span>
                <span className="text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}