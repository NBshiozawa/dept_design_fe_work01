import { useState } from 'react'
import { MOCK_DATA } from './mockdata'
import { BookItem } from './types'
import { Book } from './Book'

export const Booklist = () => {
  const [bookItem, setBookItem] = useState<BookItem[]>(MOCK_DATA.items)

  return (
    <ul className="booklist">
      {bookItem.map((book) => (
        <Book {...book.volumeInfo} key={book.id} />
      ))}
    </ul>
  )
}
