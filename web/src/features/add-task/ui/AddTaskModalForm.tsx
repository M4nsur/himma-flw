import { Input } from "@/shared/ui/input";

export const AddTaskModalForm = () => {
  return (
    <div>
      <h1>Add New Task</h1>
      <div>
        <div>
          <label htmlFor="">Title</label>
          <Input />
        </div>
      </div>
    </div>
  );
};
