import { BookItem } from '../../types'
import { MyBook } from '../molecules/MyBook'
import styles from './Booklist.module.css'

type Props = {
  myBookItem: BookItem[]
}

export const MyBooklist = ({ myBookItem }: Props) => {
  return (
    <ul className={styles.booklist}>
      {myBookItem.map((book) => (
        <MyBook {...book.volumeInfo} key={book.id} />
      ))}
    </ul>
  )
}
