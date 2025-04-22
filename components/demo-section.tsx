"use client"

import { useState } from "react"
import { FileText, FolderOpen, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DemoSection() {
  const [pattern, setPattern] = useState("Project_{counter}_{date}")
  const [files, setFiles] = useState([
    { original: "IMG_0001.jpg", preview: "Project_001_2024-04-02.jpg" },
    { original: "IMG_0002.jpg", preview: "Project_002_2024-04-02.jpg" },
    { original: "IMG_0003.jpg", preview: "Project_003_2024-04-02.jpg" },
    { original: "document.pdf", preview: "Project_004_2024-04-02.pdf" },
    { original: "screenshot.png", preview: "Project_005_2024-04-02.png" },
  ])

  const updatePattern = (newPattern: string) => {
    setPattern(newPattern)
    // Update previews based on new pattern
    const date = new Date().toISOString().split("T")[0]
    const updatedFiles = files.map((file, index) => {
      const extension = file.original.split(".").pop()
      const preview = newPattern.replace("{counter}", String(index + 1).padStart(3, "0")).replace("{date}", date)

      return {
        original: file.original,
        preview: `${preview}.${extension}`,
      }
    })
    setFiles(updatedFiles)
  }

  return (
    <section id="demo" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">See FileFlow in Action</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Try our interactive demo to see how easy it is to rename and organize your files
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <Tabs defaultValue="rename" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="rename">Bulk Rename</TabsTrigger>
            <TabsTrigger value="organize">Smart Organization</TabsTrigger>
          </TabsList>
          <TabsContent value="rename">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Rename Files</CardTitle>
                <CardDescription>
                  Create a naming pattern using placeholders like {"{counter}"}, {"{date}"}, or {"{text}"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pattern">Naming Pattern</Label>
                    <div className="flex gap-2">
                      <Input
                        id="pattern"
                        value={pattern}
                        onChange={(e) => updatePattern(e.target.value)}
                        placeholder="Project_{counter}_{date}"
                      />
                      <Button variant="outline" onClick={() => updatePattern("Project_{counter}_{date}")}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <div className="grid grid-cols-2 border-b px-4 py-2 font-medium">
                      <div>Original Filename</div>
                      <div>New Filename</div>
                    </div>
                    <div className="divide-y">
                      {files.map((file, index) => (
                        <div key={index} className="grid grid-cols-2 px-4 py-3 text-sm">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            {file.original}
                          </div>
                          <div className="flex items-center gap-2 text-green-600 font-medium">
                            <FileText className="h-4 w-4" />
                            {file.preview}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Renaming</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="organize">
            <Card>
              <CardHeader>
                <CardTitle>Smart Organization</CardTitle>
                <CardDescription>Automatically sort files into folders based on rules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rule">Organization Rule</Label>
                    <Select defaultValue="filetype">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a rule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="filetype">By File Type</SelectItem>
                        <SelectItem value="date">By Date Created</SelectItem>
                        <SelectItem value="name">By Filename Pattern</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="rounded-md border">
                    <div className="grid grid-cols-2 border-b px-4 py-2 font-medium">
                      <div>File</div>
                      <div>Destination Folder</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-2 px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          IMG_0001.jpg
                        </div>
                        <div className="flex items-center gap-2">
                          <FolderOpen className="h-4 w-4 text-amber-500" />
                          Images/
                        </div>
                      </div>
                      <div className="grid grid-cols-2 px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          IMG_0002.jpg
                        </div>
                        <div className="flex items-center gap-2">
                          <FolderOpen className="h-4 w-4 text-amber-500" />
                          Images/
                        </div>
                      </div>
                      <div className="grid grid-cols-2 px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          document.pdf
                        </div>
                        <div className="flex items-center gap-2">
                          <FolderOpen className="h-4 w-4 text-amber-500" />
                          Documents/
                        </div>
                      </div>
                      <div className="grid grid-cols-2 px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          screenshot.png
                        </div>
                        <div className="flex items-center gap-2">
                          <FolderOpen className="h-4 w-4 text-amber-500" />
                          Images/
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Organization</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

