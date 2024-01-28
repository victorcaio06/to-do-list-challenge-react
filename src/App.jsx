import styles from './App.module.css';
import './global.css';

import { PlusCircle } from 'phosphor-react';
import Button from './components/Button';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import TaskListHeader from './components/taskList/TaskListHeader';
import { useState } from 'react';
import EmptyTaskList from './components/taskList/EmptyTaskLists';
import Item from './components/taskList/Item';

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      text: 'adasd',
      isChecked: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const checkedTaskCounter = taskList.reduce((prevValue, currentTask) => {
    if (currentTask.id !== 0) {
      if (currentTask.isChecked) {
        return prevValue + 1;
      }
      return prevValue;
    }
    return prevValue;
  }, 0);

  const auxTaskCounter = () => {
    if (taskList[0].id === 0) {
      return 0;
    } else return taskList.length;
  };

  function handleTaskAdd() {
    if (!inputValue) return;

    if (taskList[0].id === 0) {
      setTaskList(() => [
        {
          id: parseInt(new Date().getTime().toString()),
          text: inputValue,
          isChecked: false,
        },
      ]);
      return setInputValue('');
    }

    let newTask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTaskList((state) => [...state, newTask]);
    return setInputValue('');
  }

  function handleTaskRemove(id) {
    let taskRemove = taskList.filter((task) => task.id !== id);

    if (!confirm('Você realmente deseja excluir essa tarefa?')) return;

    setTaskList(taskRemove);
  }

  function handleToggleTask({ id, value }) {
    let taskUpdate = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTaskList(taskUpdate);
  }

  return (
    <div>
      <Header />

      <main className={styles.content}>
        <section className={styles.taskInput}>
          <InputTask
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleTaskAdd}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </section>

        <section className={styles.taskList}>
          <TaskListHeader
            taskCounter={auxTaskCounter()}
            checkedTaskCounter={checkedTaskCounter}
          />

          {taskList[0].id === 0 ? (
            <EmptyTaskList />
          ) : taskList.length > 0 ? (
            <div>
              {taskList.map((task) => {
                return (
                  <Item
                    key={task.id}
                    data={task}
                    taskRemove={handleTaskRemove}
                    toggleTaskStatus={handleToggleTask}
                  />
                );
              })}
            </div>
          ) : (
            <EmptyTaskList />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
