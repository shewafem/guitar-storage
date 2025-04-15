import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted"
}

export function Section({ children, className = "", background = "default" }: SectionProps) {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${background === "muted" ? "bg-muted" : ""} ${className}`}>
      <div className="container px-6 md:px-8 mx-auto">{children}</div>
    </section>
  )
}
