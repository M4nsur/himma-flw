import type { InputHTMLAttributes } from "react";
import { useFormContext, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  name: Path<T>;
  label?: string;
}

export const Input = <T extends FieldValues>({
  name,
  label,
  ...props
}: InputProps<T>) => {
  return (
    <input {...props}>
      {name} {label}
    </input>
  );
};
