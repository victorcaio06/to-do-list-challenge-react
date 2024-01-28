/* eslint-disable react/prop-types */
import styles from './TaskListHeader.module.css';

export default function TaskListHeader({ taskCounter, checkedTaskCounter }) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>

        <span>{taskCounter}</span>
      </aside>
      <aside>
        <p>Concluídas</p>

        <span>
          {taskCounter === 0
            ? taskCounter
            : `${checkedTaskCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  );
}
