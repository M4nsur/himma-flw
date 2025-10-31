import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from "@/shared/lib/shadcn";
import { cn } from "@/shared/lib/classnames";

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const BaseModal = ({
  open,
  onOpenChange,
  title,
  children,
  className,
}: BaseModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-bg-tertiary/60 backdrop-blur-lg" />
        <DialogContent
          className={cn(
            "bg-bg-tertiary bg-card shadow-2xl rounded-lg w-full max-w-md p-0",
            className
          )}
          showCloseButton={true}
        >
          <DialogHeader className="flex flex-row justify-between items-center p-4 pb-0">
            <DialogTitle className="font-semibold text-foreground text-lg">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="p-4">{children}</div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
