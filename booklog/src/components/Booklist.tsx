// import { useState } from 'react'
// import { MOCK_DATA } from '../mockdata'
import { BookItem } from '../types'
import { Book } from './Book'
import styles from './Booklist.module.css'

type Props = {
  bookItem: BookItem[]
}

export const Booklist = ({ bookItem }: Props) => {
  // const [bookItem, setBookItem] = useState<BookItem[]>([])

  return (
    <ul className={styles.booklist}>
      {bookItem.map((book) => (
        <Book {...book.volumeInfo} key={book.id} />
      ))}
    </ul>
  )
}
