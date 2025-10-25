import React, { useState } from "react";
import { X, Trash2 } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/lib/shadcn";
import { Tabs, TabsList, TabsTrigger } from "@/shared/lib/shadcn";
import { Button } from "@/shared/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/lib/shadcn";

import type { TaskCardType } from "@/entities/task/model/types";
import type { DrawerMode, DrawerState } from "./model/types";
import { TaskInfo } from "@/entities/task/ui/TaskInfo";

interface TaskDrawerProps {
  drawerState: DrawerState;
  isSaving: boolean;
  isDeleting: boolean;
  setActiveTab: (mode: DrawerMode) => void;
  closeDrawer: () => void;
  handleSaveTask: (task: TaskCardType) => Promise<void>;
  handleDeleteTask: (taskId: number) => Promise<void>;
}

export const TaskDrawer = ({
  drawerState,
  isSaving,
  isDeleting,
  setActiveTab,
  closeDrawer,
  handleSaveTask,
  handleDeleteTask,
}: TaskDrawerProps) => {
  const { isOpen, task, mode } = drawerState;

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  if (!task) return null;

  const tabs: Array<{ value: DrawerMode; label: string }> = [
    { value: "view", label: "View" },
    { value: "edit", label: "Edit" },
  ];

  const handleDelete = async () => {
    setShowDeleteDialog(false);
    await handleDeleteTask(task.id);
  };

  const handleSave = async () => {
    setShowSaveDialog(false);
    await handleSaveTask(task);
  };

  return (
    <>
      <Drawer open={isOpen} onOpenChange={closeDrawer} direction="right">
        <DrawerContent className=" bg-bg-primary border-bg-tertiary">
          <div className="flex flex-col h-full">
            {/* Header */}
            <DrawerHeader className="border-b border-bg-tertiary px-6 py-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <DrawerTitle className="text-text-primary text-lg font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  {task.title}
                </DrawerTitle>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeDrawer}
                  className="text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Tabs */}
              <Tabs
                value={mode}
                onValueChange={(v) => setActiveTab(v as DrawerMode)}
              >
                <TabsList className="bg-bg-tertiary border-none h-10">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-bg-secondary text-text-secondary data-[state=active]:text-text-primary flex items-center gap-2"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </DrawerHeader>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {mode === "view" ? (
                <TaskInfo task={task} />
              ) : (
                <div className="text-text-secondary italic">
                  {/* Тут можно отрендерить форму редактирования */}
                  Edit form placeholder
                </div>
              )}
            </div>

            <div className="border-t border-bg-tertiary px-6 py-4 flex items-center justify-between flex-shrink-0">
              <Button
                variant="ghost"
                onClick={() => setShowDeleteDialog(true)}
                disabled={isDeleting}
                className="text-text-secondary hover:text-text-error hover:bg-bg-tertiary flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>

              <Button
                onClick={() => setShowSaveDialog(true)}
                disabled={isSaving}
                className="bg-accent hover:bg-accent-hover text-text-primary"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="bg-bg-primary border-bg-tertiary">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-text-primary">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-text-secondary">
              This action cannot be undone. This will permanently delete the
              task.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-bg-tertiary text-text-secondary hover:bg-bg-secondary">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-text-error hover:bg-red-600 text-text-primary"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Save Confirmation Dialog */}
      <AlertDialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <AlertDialogContent className="bg-bg-primary border-bg-tertiary">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-text-primary">
              Save changes?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-text-secondary">
              Are you sure you want to save these changes?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-bg-tertiary text-text-secondary hover:bg-bg-secondary">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSave}
              className="bg-accent hover:bg-accent-hover text-text-primary"
            >
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
