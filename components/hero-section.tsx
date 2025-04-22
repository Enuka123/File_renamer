import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-6 text-center">
        <div className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium">Introducing FileFlow</div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Rename and organize your files <span className="text-slate-600">effortlessly</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Save hours with intelligent file renaming and organization. Bulk rename files, auto-sort into folders, and
          manage your digital assets with ease.
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
  )
}

