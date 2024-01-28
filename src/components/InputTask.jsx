import styles from './InputTask.module.css';

export function InputTask({ ...rest }) {
  return (
    <input
      id="input-new-task"
      className={styles.inputTask}
      type="text"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}
