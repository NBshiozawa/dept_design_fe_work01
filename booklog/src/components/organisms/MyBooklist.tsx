import { BookItem } from '../../types'
import { MyBook } from '../molecules/MyBook'
import styles from './Booklist.module.css'

type Props = {
  myBookItem: BookItem[]
  removeBook: (bookId: string) => void
}

export const MyBooklist = ({ myBookItem, removeBook }: Props) => {
  return (
    <ul className={styles.booklist}>
      {myBookItem.map((book) => (
        <MyBook {...book.volumeInfo} key={book.id} onClick={() => removeBook(book.id)} />
      ))}
    </ul>
  )
}
