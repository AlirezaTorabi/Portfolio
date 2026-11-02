"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "cn"
import { ChevronDownIcon } from "lucide-react"

type AccordionType = "single" | "multiple"

type AccordionContextValue = {
  type: AccordionType
  value: string[]
  onValueChange: (value: string) => void
  collapsible: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function normalizeValue(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value
  if (typeof value === "string" && value.length > 0) return [value]
  return []
}

function Accordion({
  type = "single",
  collapsible = false,
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  type?: AccordionType
  collapsible?: boolean
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
}) {
  const controlled = value !== undefined
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(() =>
    normalizeValue(defaultValue),
  )

  const currentValue = controlled ? normalizeValue(value) : uncontrolledValue

  const handleValueChange = React.useCallback(
    (nextValue: string) => {
      if (type === "single") {
        const next = currentValue.includes(nextValue)
          ? collapsible
            ? []
            : currentValue
          : [nextValue]

        if (!controlled) setUncontrolledValue(next)
        onValueChange?.(next[0] ?? "")
        return
      }

      const next = currentValue.includes(nextValue)
        ? currentValue.filter((item) => item !== nextValue)
        : [...currentValue, nextValue]

      if (!controlled) setUncontrolledValue(next)
      onValueChange?.(next)
    },
    [collapsible, controlled, currentValue, onValueChange, type],
  )

  return (
    <AccordionContext.Provider value={{ type, value: currentValue, onValueChange: handleValueChange, collapsible }}>
      <div data-slot="accordion" className={cn(className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({
  value,
  className,
  ...props
}: React.ComponentProps<"div"> & { value: string }) {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionItem must be used inside Accordion")
  }

  const isOpen = context.value.includes(value)

  return (
    <div
      data-slot="accordion-item"
      data-state={isOpen ? "open" : "closed"}
      className={cn("border-b border-foreground/10 last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<"button"> & { value: string }) {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionTrigger must be used inside Accordion")
  }

  const isOpen = context.value.includes(value)
  const triggerId = React.useId()
  const contentId = `${triggerId}-content`

  return (
    <button
      type="button"
      data-slot="accordion-trigger"
      data-state={isOpen ? "open" : "closed"}
      id={triggerId}
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => context.onValueChange(value)}
      className={cn(
        "flex w-full flex-1 items-center justify-between gap-4 rounded-xl px-3 py-3 text-left text-sm font-medium text-foreground outline-none transition-colors duration-200 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 sm:px-4 sm:py-3.5",
        className,
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <ChevronDownIcon
        className={cn(
          "pointer-events-none size-4 shrink-0 text-foreground/60 transition-transform duration-200 ease-out",
          isOpen && "rotate-180",
        )}
      />
    </button>
  )
}

type AccordionContentProps = Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  value: string
  children: React.ReactNode
}

function AccordionContent({
  className,
  children,
  value,
  ...props
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionContent must be used inside Accordion")
  }

  const isOpen = context.value.includes(value)
  const contentId = `${React.useId()}-content`
  const triggerId = contentId.replace("-content", "")

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          key="accordion-content"
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          initial={{ height: 0, opacity: 0, y: -6 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
          className={cn("text-sm text-foreground/70", className)}
          {...props}
        >
          <div className="pt-0 pb-4 sm:pb-5">{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
