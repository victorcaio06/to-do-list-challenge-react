import styles from './EmptyTaskList.module.css';
import { ClipboardText } from 'phosphor-react';

export default function EmptyTaskList() {
  return (
    <div className={styles.container}>
      <ClipboardText size={70} weight="thin" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
