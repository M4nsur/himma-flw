import { cn } from "@/shared/lib";
import Pencil from "@/shared/assets/icons/edit.svg?react";
import Trash from "@/shared/assets/icons/trash.svg?react";

const icons = {
  trash: Trash,
  pencil: Pencil,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
  color?: string;
}

export function Icon({ name, size = 16, className, color }: IconProps) {
  const Svg = icons[name];
  if (!Svg) return null;

  return (
    <Svg
      width={size}
      height={size}
      style={{ color }}
      className={cn("inline-block text-current shrink-0", className)}
    />
  );
}
