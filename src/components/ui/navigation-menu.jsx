import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex w-full items-center justify-between px-6 py-4 bg-teal shadow-sm",
      className
    )}
    {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("flex items-center gap-6 list-none", className)}
    {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

// Trigger styles: visible on colorful background
const navigationMenuTriggerStyle = cva(
  "group inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-heading " +
  "text-white hover:text-orange hover:bg-green focus:outline-none focus:ring-2 focus:ring-orange " +
  "disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-orange data-[state=open]:bg-green"
)

const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}>
    {children}
    <ChevronDown
      className="ml-1 h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180 text-white"
      aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

// Dropdown content: white background, charcoal text
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "md:absolute left-0 top-0 w-full md:w-auto mt-2 rounded-lg border border-graySoft bg-white text-foreground shadow-md overflow-hidden animate-in",
      className
    )}
    {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center w-full">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "mt-2 w-full md:w-[var(--radix-navigation-menu-viewport-width)] h-[var(--radix-navigation-menu-viewport-height)] rounded-lg border border-graySoft bg-white text-foreground shadow-md animate-in",
        className
      )}
      {...props} />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full flex h-1.5 items-end justify-center overflow-hidden",
      className
    )}
    {...props}>
    <div className="relative top-[60%] h-2 w-2 rotate-45 bg-graySoft shadow-sm" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}