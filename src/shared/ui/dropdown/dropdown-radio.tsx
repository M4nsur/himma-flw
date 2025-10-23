"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../../lib/shadcn";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/";
import { ChevronDown } from "lucide-react";
import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";

interface DropdownRadioOption {
  label: string;
  value: string;
}

interface BaseProps {
  options: DropdownRadioOption[];
  className?: string;
}

interface DropdownRadioRHFProps<TFieldValues extends FieldValues>
  extends BaseProps {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  defaultValue?: string;
}

export function DropdownRadio<T extends FieldValues>({
  name,
  control,
  options,
  className,

  defaultValue,
}: DropdownRadioRHFProps<T>) {
  const hasOptions = options?.length > 0;
  const initial = defaultValue ?? (hasOptions ? options[0].value : "");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selected =
          options.find((o) => o.value === field.value) ??
          options.find((o) => o.value === initial);

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  // структура
                  "flex justify-between items-center w-full rounded-md px-3 py-2",
                  // визуал
                  "bg-bg-secondary hover:bg-accent/10 border border-border text-inherit font-medium transition-colors shadow-[var(--shadow-soft)]",
                  className
                )}
                disabled={!hasOptions}
              >
                {selected?.label}
                <ChevronDown className="ml-2 w-4 h-4 text-muted-foreground shrink-0" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className={cn(
                "z-50 bg-card shadow-2xl backdrop-blur-md mt-1 border border-border rounded-md min-w-[10rem] text-inherit",
                "data-[state=open]:animate-in data-[state=closed]:animate-out"
              )}
            >
              <DropdownMenuRadioGroup
                value={selected?.value ?? ""}
                onValueChange={field.onChange}
              >
                {options.map((opt) => (
                  <DropdownMenuRadioItem
                    key={opt.value}
                    value={opt.value}
                    className={cn(
                      "px-3 py-2 rounded-sm text-inherit transition-colors cursor-pointer select-none",
                      "hover:bg-accent/20 focus:bg-accent/30 focus:text-accent-foreground",
                      "data-[state=checked]:text-accent-foreground data-[state=checked]:bg-accent/30"
                    )}
                  >
                    {opt.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }}
    />
  );
}
