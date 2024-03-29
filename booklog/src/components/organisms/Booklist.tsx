import { BookItem } from '../../types'
import { Book } from '../molecules/Book'
import styles from './Booklist.module.css'

type Props = {
  bookItem: BookItem[]
}

export const Booklist = ({ bookItem }: Props) => {
  return (
    <ul className={styles.booklist}>
      {bookItem.map((book) => (
        <Book {...book.volumeInfo} key={book.id} />
      ))}
    </ul>
  )
}
