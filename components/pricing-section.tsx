import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  return (
    <section id="pricing" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that works best for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card key={plan.title} className={`flex flex-col ${plan.featured ? "border-slate-600 shadow-lg" : ""}`}>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
              </div>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.featured ? "default" : "outline"} asChild>
                <Link href="#signup">{plan.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const pricingPlans = [
  {
    title: "Free",
    description: "Basic file renaming for individuals",
    price: "0",
    period: "forever",
    buttonText: "Get Started",
    featured: false,
    features: [
      "Basic bulk renaming",
      "Up to 50 files at once",
      "Simple organization rules",
      "Web access only",
      "Community support",
    ],
  },
  {
    title: "Pro",
    description: "Advanced features for professionals",
    price: "9.99",
    period: "month",
    buttonText: "Start Free Trial",
    featured: true,
    features: [
      "Advanced renaming patterns",
      "Unlimited files",
      "Smart organization rules",
      "Cloud storage integration",
      "Metadata editing",
      "AI-powered suggestions",
      "Priority support",
    ],
  },
  {
    title: "Team",
    description: "For teams and businesses",
    price: "19.99",
    period: "month",
    buttonText: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "5+ user accounts",
      "Team collaboration",
      "Shared templates",
      "Admin controls",
      "API access",
      "Dedicated support",
    ],
  },
]

