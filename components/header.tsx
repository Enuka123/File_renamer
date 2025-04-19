"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <span className="text-xl font-bold">FileFlow</span>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-2">
                <Link href="#features" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Features
                </Link>
                <Link href="#demo" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Demo
                </Link>
                <Link href="#pricing" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Pricing
                </Link>
                <div className="flex flex-col gap-2 mt-2">
                  <Button variant="outline" onClick={toggleMenu} asChild>
                    <Link href="#login">Log in</Link>
                  </Button>
                  <Button onClick={toggleMenu} asChild>
                    <Link href="#signup">Sign up</Link>
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="#features" className="transition-colors hover:text-foreground/80">
                Features
              </Link>
              <Link href="#demo" className="transition-colors hover:text-foreground/80">
                Demo
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="#login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="#signup">Sign up</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

