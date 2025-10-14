"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./dropdown-menu";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/";
import { ChevronDown, Omega } from "lucide-react";
import { Controller } from "react-hook-form";

interface DropdownRadioOption {
  label: string;
  value: string;
}

interface DropdownRadioProps {
  options: DropdownRadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function DropdownRadio({
  options,
  value,
  onChange,
  className,
}: DropdownRadioProps) {
  const selected = options.find((o) => o.value === value) ?? options[0];

  return (
    <Controller name="radio-f">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "flex justify-between items-center bg-bg-secondary hover:bg-accent/10 border border-border text-foreground transition-colors",
              "rounded-md px-3 py-2 text-sm font-medium shadow-[var(--shadow-soft)]",
              className
            )}
          >
            {selected.label}
            <ChevronDown className="ml-2 size-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className={cn(
            "z-50 bg-card shadow-2xl backdrop-blur-md mt-1 border border-border rounded-md min-w-[10rem] text-card-foreground",
            "data-[state=open]:animate-in data-[state=closed]:animate-out"
          )}
        >
          <DropdownMenuRadioGroup
            value={selected.value}
            onValueChange={(v) => onChange?.(v)}
          >
            {options.map((opt) => (
              <DropdownMenuRadioItem
                key={opt.value}
                value={opt.value}
                className={cn(
                  "px-3 py-2 rounded-sm text-sm transition-colors cursor-pointer select-none",
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
    </Controller>
  );
}
