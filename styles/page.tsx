import { ArrowRight, FileText, FolderIcon as FolderSort, Image, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingSection from "@/components/pricing-section"
import DemoSection from "@/components/demo-section"
import FeatureSection from "@/components/feature-section"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <DemoSection />
        <PricingSection />

        {/* Target Users Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Who Benefits from FileFlow?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our tool is designed for anyone who deals with large numbers of files and needs an efficient way to
              organize them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {targetUsers.map((user) => (
              <Card key={user.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <user.icon className="h-5 w-5" />
                    <span>{user.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{user.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32 bg-slate-50 rounded-lg">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Ready to organize your files?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Start with our free plan and upgrade anytime as your needs grow.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#pricing">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#demo">See Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const targetUsers = [
  {
    title: "Photographers",
    icon: Image,
    description: "Organize thousands of images with meaningful names based on date, location, or content.",
  },
  {
    title: "Marketers",
    icon: FileText,
    description: "Keep ad creatives, social media assets, and campaign files structured and easily accessible.",
  },
  {
    title: "Researchers",
    icon: FileText,
    description: "Sort academic papers, datasets, and research materials with consistent naming conventions.",
  },
  {
    title: "Freelancers",
    icon: FolderSort,
    description: "Maintain clear organization of client files, deliverables, and project assets.",
  },
  {
    title: "Developers",
    icon: FileText,
    description: "Clean up project assets, manage code samples, and organize documentation efficiently.",
  },
  {
    title: "Anyone with Digital Files",
    icon: Zap,
    description: "Bring order to your personal or professional digital life with smart file organization.",
  },
]

