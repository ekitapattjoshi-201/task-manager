import { useState } from "react";
import styles from "./TaskForm.module.scss";
import { addTask } from "../../features/task/taskSlice";
import { useDispatch } from "react-redux";

const TaskForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const handleSubmit = () => {
        if (!title.trim()) return;

        dispatch(addTask(title));;
        setTitle("");
    };

    return (
        <div className={styles.form}>
            <input
                className={styles.input}
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button className={styles.button} onClick={handleSubmit}>
                Add Task
            </button>
        </div>);
}

export default TaskForm;