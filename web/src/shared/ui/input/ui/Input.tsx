import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export const FormField = ({
  name,
  label,
  type = "text",
  placeholder,
}: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <span className="error">{error.message as string}</span>}
    </div>
  );
};
