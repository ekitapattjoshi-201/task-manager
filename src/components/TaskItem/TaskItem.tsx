import { useState } from "react";
import { useDispatch } from "react-redux";
import type { TaskItemProps } from "./taskitem.types";
import styles from "./TaskItem.module.scss";
import { editTask } from "../../features/task/taskSlice";

const TaskItem = ({ task, onDeleteTask, onToggleTask }: TaskItemProps) => {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleSave = () => {
        if (!newTitle.trim()) return;

        dispatch(editTask({ id: task.id, title: newTitle }));
        setIsEditing(false);
    };

    return (
        <div className={styles.item}>
            {isEditing ? (
                <input
                    className={styles.input}
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
            ) : (
                <span
                    onClick={() => onToggleTask(task.id)}
                    className={`${styles.text} ${task.completed ? styles.completed : ""
                        }`}
                >
                    {task.completed ? "✅" : "⬜"} {task.title}
                </span>
            )}

            <div className={styles.actions}>
                {isEditing ? (
                    <button className={styles.saveBtn} onClick={handleSave}>
                        Save
                    </button>
                ) : (
                    <button
                        className={styles.editBtn}
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                )}

                <button
                    className={styles.deleteBtn}
                    onClick={() => onDeleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;