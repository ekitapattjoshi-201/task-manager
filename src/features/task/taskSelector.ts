import type { RootState } from "../../app/store";

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const selectFilter = (state: RootState) => state.tasks.filter;

export const selectFilteredTasks = (state: RootState) => {
    const tasks = state.tasks.tasks;
    const filter = state.tasks.filter;

    if (filter === "completed") {
        return tasks.filter((task) => task.completed);
    }

    if (filter === "pending") {
        return tasks.filter((task) => !task.completed);
    }

    return tasks;
};