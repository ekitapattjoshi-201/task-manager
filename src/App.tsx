import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.scss";
import { useSelector } from "react-redux";
import { selectFilter, selectTasks } from "./features/task/taskSelector";
import { saveFilterToStorage, saveTasksToStorage } from "./utils/helpers";
import { useEffect } from "react";

function App() {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  useEffect(() => {
    saveFilterToStorage(filter);
  }, [filter]);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);
  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <h1 className={styles.title}>Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </div>
  );
}

export default App;