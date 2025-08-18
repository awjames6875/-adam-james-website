import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

const iconVariants = cva("", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4", 
      default: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
      "2xl": "h-10 w-10",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      destructive: "text-destructive",
      success: "text-success",
      warning: "text-warning",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
})

export interface IconProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, variant, icon: IconComponent, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, variant }), className)}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }