import { PlusCircle } from 'phosphor-react';
import styles from './InputTask.module.css';

export function InputTask() {
  return (
    <div className={styles.inputTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </div>
  );
}
