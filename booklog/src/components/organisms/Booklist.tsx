import { BookItem } from '../../types'
import { Book } from '../molecules/Book'
import styles from './Booklist.module.css'

type Props = {
  bookItem: BookItem[]
  addBook: (index: number, bookId: string) => void
}

export const Booklist = ({ bookItem, addBook }: Props) => {
  return (
    <ul className={styles.booklist}>
      {bookItem.map((book, index) => (
        <Book {...book.volumeInfo} key={book.id} onClick={() => addBook(index, book.id)} />
      ))}
    </ul>
  )
}
