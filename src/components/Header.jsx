import styles from './Header.module.css';
import toDoListLogo from '../assets/logo-to-do-list-fav.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={toDoListLogo} alt="Logotipo do aplicativo" />
    </div>
  );
}
