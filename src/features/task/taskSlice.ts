import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskState } from "./taskTypes";
import { loadFilterFromStorage, loadTasksFromStorage } from "../../utils/helpers";

const initialState: TaskState = {
    tasks: loadTasksFromStorage(),
    filter: loadFilterFromStorage(),
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask: Task = {
                id: Date.now(),
                title: action.payload,
                completed: false,
            };
            state.tasks.push(newTask);

            state.filter = "all";
        },

        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },

        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find(
                (t) => t.id === action.payload
            );
            if (task) {
                task.completed = !task.completed;
            }
        },

        setFilter: (
            state,
            action: PayloadAction<"all" | "completed" | "pending">
        ) => {
            state.filter = action.payload;
        },

        editTask: (state, action: PayloadAction<{ id: number; title: string }>) => {
            const task = state.tasks.find(t => t.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
            }
        },
    },
});

export const { addTask, deleteTask, toggleTask, setFilter, editTask } = taskSlice.actions;

export default taskSlice.reducer;