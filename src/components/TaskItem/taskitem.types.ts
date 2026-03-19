import type { Task } from "../../features/task/taskTypes";

export interface TaskItemProps {
    task: Task;
    onDeleteTask: (id: number) => void;
    onToggleTask: (id: number) => void;
}