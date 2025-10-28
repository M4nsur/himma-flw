import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/lib/shadcn";
import React from "react";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  confirmClassName?: string;
  isConfirmDisabled?: boolean;
  isLoadingText?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onConfirm,
  title,
  description,
  cancelText = "Cancel",
  confirmText = "Confirm",
  confirmClassName = "bg-accent hover:bg-accent-hover text-text-primary",
  isConfirmDisabled = false,
  isLoadingText,
}) => {
  const handleConfirmClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent
        className="bg-bg-primary border-bg-tertiary"
        onClick={(e) => e.stopPropagation()}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-text-primary">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-text-secondary">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-bg-tertiary text-text-secondary hover:bg-bg-secondary w-[30%]"
            disabled={isConfirmDisabled}
          >
            {cancelText}
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleConfirmClick}
            className={`${confirmClassName} w-[30%]`}
          >
            {isConfirmDisabled && isLoadingText ? isLoadingText : confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
