import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredTasks } from "../../features/task/taskSelector";
import { deleteTask, toggleTask } from "../../features/task/taskSlice";

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectFilteredTasks);

    return (
        <div className={styles.list}>
            {tasks.length === 0 ? (
                <p className={styles.empty}>No tasks yet</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDeleteTask={(id) => dispatch(deleteTask(id))}
                        onToggleTask={(id) => dispatch(toggleTask(id))}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;