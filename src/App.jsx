import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';
import { InputTask } from './components/InputTask';

function App() {
  return (
    <div>
      <Header />

      <section className={styles.home}>
        <InputTask />
      </section>
    </div>
  );
}

export default App;
