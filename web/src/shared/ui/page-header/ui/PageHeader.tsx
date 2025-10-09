interface PageHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const PageHeader = ({ title, action }: PageHeaderProps) => {
  return (
    <div className="flex justify-between">
      <h1>{title}</h1>
      {action}
    </div>
  );
};
