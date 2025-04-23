import { ArrowRight, FileText, FolderIcon as FolderSort, Image, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingSection from "@/components/pricing-section"
import DemoSection from "@/components/demo-section"
import FeatureSection from "@/components/feature-section"
import HeroSection from "@/components/hero-section"
import { FilePicker } from "@/components/ui/FilePicker"

export default function Home() {
  const [showFilePicker, setShowFilePicker] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [pattern, setPattern] = useState("[{counter},{date}]")

  const handleRename = async () => {
    if (files.length === 0) return
    
    // Process each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const date = new Date().toISOString().split('T')[0]
      const extension = file.name.split('.').pop()
      const newName = `_${String(i + 1).padStart(3, '0')}_${date}.${extension}`
      
      // In a real app, you would implement the actual file renaming/download here
      console.log(`Renaming ${file.name} to ${newName}`)
    }
    
    alert(`${files.length} files processed! Check console for details.`)
    setFiles([])
    setShowFilePicker(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        
        {/* New File Renamer Section */}
        <section className="container py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Try Our File Renamer
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Upload files and see how they would be renamed with your pattern
            </p>
            
            {!showFilePicker ? (
              <Button 
                size="lg" 
                onClick={() => setShowFilePicker(true)}
                className="mt-6"
              >
                Start Renaming Files
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <div className="w-full max-w-2xl space-y-6 mt-8">
                <FilePicker onFilesSelected={setFiles} />
                
                {files.length > 0 && (
                  <>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Naming Pattern</h3>
                      <input
                        type="text"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="e.g. [{counter},{date}]"
                      />
                      <p className="text-sm text-muted-foreground">
                        Available placeholders: {"{counter}"}, {"{date}"}, {"{text}"}
                      </p>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left">Original</th>
                            <th className="px-4 py-2 text-left">Renamed</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {files.map((file, index) => {
                            const date = new Date().toISOString().split('T')[0]
                            const extension = file.name.split('.').pop()
                            return (
                              <tr key={index}>
                                <td className="px-4 py-2 truncate max-w-xs">{file.name}</td>
                                <td className="px-4 py-2">
                                  {`_${String(index + 1).padStart(3, '0')}_${date}.${extension}`}
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        onClick={handleRename}
                        className="flex-1"
                      >
                        Process Files
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setFiles([])
                          setShowFilePicker(false)
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        <DemoSection />
        <PricingSection />

        {/* Rest of your existing sections... */}
        <section className="container py-12 md:py-24 lg:py-32">
          {/* ... existing target users section ... */}
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-slate-50 rounded-lg">
          {/* ... existing CTA section ... */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

// ... keep your existing targetUsers array ...