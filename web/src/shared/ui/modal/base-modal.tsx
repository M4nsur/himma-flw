import { X } from "lucide-react";

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const BaseModal = ({
  open,
  onOpenChange,
  title,
  children,
}: BaseModalProps) => {
  if (!open) return null;

  return (
    <>
      <div
        className="z-40 fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      <div className="z-50 fixed inset-0 flex justify-center items-center p-4">
        <div className="relative bg-card shadow-2xl border border-border rounded-lg w-full max-w-md">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-border">
            <h2 className="font-semibold text-foreground text-lg">{title}</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="hover:bg-accent/20 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5 text-card-foreground" />
            </button>
          </div>

          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};
