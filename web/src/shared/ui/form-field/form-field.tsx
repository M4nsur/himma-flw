interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  htmlFor?: string;
}

export const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      {children}
      {error && <p className="text-destructive">{error}</p>}
    </div>
  );
};
