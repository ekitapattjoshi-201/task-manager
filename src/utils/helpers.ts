export const generateId = (): number => {
    return Math.floor(Math.random() * 1000000);
};

export const formatTaskTitle = (title: string): string => {
    return title.trim().replace(/\s+/g, " ");
};

export const loadTasksFromStorage = () => {
    try {
        const data = localStorage.getItem("tasks");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error loading tasks from localStorage", error);
        return [];
    }
};

export const saveTasksToStorage = (tasks: unknown) => {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to localStorage", error);
    }
};

export const loadFilterFromStorage = (): "all" | "completed" | "pending" => {
    try {
        const data = localStorage.getItem("filter");
        return data ? JSON.parse(data) : "all";
    } catch {
        return "all";
    }
};

export const saveFilterToStorage = (filter: string) => {
    try {
        localStorage.setItem("filter", JSON.stringify(filter));
    } catch (error) {
        console.error("Error saving filter", error);
    }
};