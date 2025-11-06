interface PageHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const PageHeader = ({ title, action }: PageHeaderProps) => {
  return (
    <div className="flex justify-between pt-3">
      <h1 className="mb-10 font-extrabold text-xl  lg:text-3xl">{title}</h1>
      {action}
    </div>
  );
};
