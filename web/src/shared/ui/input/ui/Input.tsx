import type {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label?: string;
  error?: FieldError;
}

export function Input<T extends FieldValues>({
  register,
  name,
  label,
  error,
  className = "",
  ...rest
}: InputProps<T>) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="font-medium text-sm">
          {label}
        </label>
      )}

      <input
        id={name}
        {...register(name)}
        {...rest}
        className={`border rounded-lg px-3 py-2 outline-none transition-colors
          ${error ? "text-text-error" : "border-gray-300 focus:accent-hover"}
          ${className}`}
      />

      {error && (
        <p id={`${name}-error`} className="text-text-error text-xs">
          {error.message}
        </p>
      )}
    </div>
  );
}
