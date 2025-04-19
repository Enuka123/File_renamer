import { FileText, FolderIcon as FolderSort, Cloud, Sparkles, Copy, Laptop } from "lucide-react"

export default function FeatureSection() {
  return (
    <section id="features" className="container py-12 md:py-24 lg:py-32 bg-slate-50 rounded-lg">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Powerful Features</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to take control of your file organization
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl lg:gap-8 pt-8">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <feature.icon className="h-6 w-6" />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    title: "Bulk Renaming",
    icon: FileText,
    description:
      "Rename files in batches using patterns with support for text replacement, sequential numbering, and date/time stamps.",
  },
  {
    title: "Smart Organization",
    icon: FolderSort,
    description: "Auto-sort files into folders based on file type, date created/modified, or keywords in filenames.",
  },
  {
    title: "Metadata Editing",
    icon: FileText,
    description: "Edit EXIF data for images, PDF properties, or ID3 tags for audio files with our premium plan.",
  },
  {
    title: "Cloud Integration",
    icon: Cloud,
    description: "Works with Google Drive, Dropbox, and OneDrive to rename and organize files without downloading.",
  },
  {
    title: "AI-Powered Suggestions",
    icon: Sparkles,
    description: "Get intelligent filename suggestions based on content, making your files more discoverable.",
  },
  {
    title: "Duplicate File Finder",
    icon: Copy,
    description: "Detect and manage duplicate files to save storage space and keep your files organized.",
  },
  {
    title: "Cross-Platform",
    icon: Laptop,
    description: "Access via web app, desktop application, or command-line interface for power users.",
  },
]

