import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
  children?: React.ReactNode;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ type = "single", ...props }, ref) => {
  if (type === "multiple") {
    const multipleProps = props as Omit<AccordionProps, "type" | "collapsible">;
    return (
      <AccordionPrimitive.Root
        ref={ref}
        type="multiple"
        value={Array.isArray(multipleProps.value) ? multipleProps.value : undefined}
        defaultValue={Array.isArray(multipleProps.defaultValue) ? multipleProps.defaultValue : undefined}
        onValueChange={multipleProps.onValueChange as ((value: string[]) => void) | undefined}
        className={multipleProps.className}
      >
        {multipleProps.children}
      </AccordionPrimitive.Root>
    );
  }

  const { collapsible = true, value, defaultValue, onValueChange, className, children } = props;
  return (
    <AccordionPrimitive.Root
      ref={ref}
      type="single"
      collapsible={collapsible}
      value={typeof value === "string" ? value : undefined}
      defaultValue={typeof defaultValue === "string" ? defaultValue : undefined}
      onValueChange={onValueChange as ((value: string) => void) | undefined}
      className={className}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
