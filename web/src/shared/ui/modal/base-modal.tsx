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
        <div className="relative bg-bg-tertiary bg-card shadow-2xl rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center p-4">
            <h2 className="font-semibold text-foreground text-lg">{title}</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="bg-inherit hover:bg-bg-secondary p-1 transition-colors"
            >
              <X />
            </button>
          </div>

          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};
