import type { Task } from "../../features/task/taskTypes";

export interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    onToggleTask: (id: number) => void;
}