import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const loadingVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    variant: {
      default: "text-primary",
      muted: "text-muted-foreground",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
})

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  text?: string
  centered?: boolean
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size, variant, text, centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2",
          centered && "justify-center",
          className
        )}
        {...props}
      >
        <Loader2 className={cn(loadingVariants({ size, variant }))} />
        {text && (
          <span className="text-sm text-muted-foreground">{text}</span>
        )}
      </div>
    )
  }
)
Loading.displayName = "Loading"

// Spinner component for inline loading
const Spinner = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGSVGElement> & VariantProps<typeof loadingVariants>
>(({ className, size, variant, ...props }, ref) => {
  return (
    <Loader2
      ref={ref}
      className={cn(loadingVariants({ size, variant }), className)}
      {...props}
    />
  )
})
Spinner.displayName = "Spinner"

// Skeleton component for content loading
const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  )
})
Skeleton.displayName = "Skeleton"

export { Loading, Spinner, Skeleton, loadingVariants }