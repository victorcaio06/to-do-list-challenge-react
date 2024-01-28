/* eslint-disable react/prop-types */
import { Check, Trash } from 'phosphor-react';
import styles from './Item.module.css';

export default function Item({ data, taskRemove, toggleTaskStatus }) {
  function handleTaskToggle() {
    toggleTaskStatus({
      id: data.id,
      value: !data.isChecked,
    });
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];

  const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : '';

  function handleRemoveTask() {
    taskRemove(data.id);
  }

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>
      <button onClick={handleRemoveTask}>
        <Trash size={24} color="#808080" />
      </button>
    </div>
  );
}
