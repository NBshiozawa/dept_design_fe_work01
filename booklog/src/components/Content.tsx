import styles from './Content.module.css'
import { Header } from './Header'
import { Booklist } from './Booklist'
import { SearchForm } from './SearchForm'

const Content = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.search}>
          <SearchForm />
        </div>
        <Booklist />
      </main>
    </>
  )
}

export default Content
