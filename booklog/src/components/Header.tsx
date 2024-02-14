import styles from './Header.module.css'
import { Timer } from './Timer'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.title}>Booklog</h1>
        <Timer />
      </div>
    </header>
  )
}
