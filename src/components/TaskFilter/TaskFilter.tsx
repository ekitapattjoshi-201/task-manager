import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskFilter.module.scss";
import { selectFilter } from "../../features/task/taskSelector";
import { setFilter } from "../../features/task/taskSlice";

const TaskFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);

    return (
        <div className={styles.container}>
            <button
                className={`${styles.button} ${currentFilter === "all" ? styles.active : ""
                    }`}
                onClick={() => dispatch(setFilter("all"))}
            >
                All
            </button>

            <button
                className={`${styles.button} ${currentFilter === "completed" ? styles.active : ""
                    }`}
                onClick={() => dispatch(setFilter("completed"))}
            >
                Completed
            </button>

            <button
                className={`${styles.button} ${currentFilter === "pending" ? styles.active : ""
                    }`}
                onClick={() => dispatch(setFilter("pending"))}
            >
                Pending
            </button>
        </div>
    );
};

export default TaskFilter;