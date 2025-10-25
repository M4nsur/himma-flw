import { PageHeader } from "@/shared/ui/page-header";
import { AddTaskAction } from "@/features/add-task";
import { TaskList } from "@/widgets/task-list";
import { tasks } from "@/shared/values";
import { useTaskDrawer } from "@/widgets/task-drawer/model/useTaskDrawer";
import { TaskDrawer } from "@/widgets/task-drawer";

export const TasksPage = () => {
  const {
    drawerState,
    isSaving,
    isDeleting,
    openDrawer,
    closeDrawer,
    setActiveTab,
    handleSaveTask,
    handleDeleteTask,
  } = useTaskDrawer();
  return (
    <div>
      <PageHeader title="Tasks" action={<AddTaskAction />}></PageHeader>
      <div className="flex flex-col">
        <TaskList
          onOpenDrawer={openDrawer}
          onDeleteTask={handleDeleteTask}
          tasks={tasks}
        />
        <TaskList
          onOpenDrawer={openDrawer}
          onDeleteTask={handleDeleteTask}
          variant="completed"
          title="Completed tasks"
          tasks={tasks}
        />
      </div>
      <TaskDrawer
        drawerState={drawerState}
        isSaving={isSaving}
        isDeleting={isDeleting}
        setActiveTab={setActiveTab}
        closeDrawer={closeDrawer}
        handleSaveTask={handleSaveTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};
