import './App.css'
import { useState } from 'react'
import { MOCK_DATA } from './mockdata'
import { BookItem } from './types'

function App() {
  const [bookItem, setBookItem] = useState<BookItem[]>(MOCK_DATA.items)

  const Book = (bookInfo: BookItem): JSX.Element => {
    return (
      <>
        <ul className="booklist">
          <li className="listitem" key={bookInfo.id}>
            {bookInfo.volumeInfo.imageLinks && (
              <div className="thumbnail">
                <img src={bookInfo.volumeInfo.imageLinks.smallThumbnail} alt={bookInfo.volumeInfo.title} />
              </div>
            )}
            <div className="rightblock">
              <h2 className="title">{bookInfo.volumeInfo.title}</h2>
              {bookInfo.volumeInfo.description && <p className="description">{bookInfo.volumeInfo.description}</p>}
              <div className="sub-info">
                {bookInfo.volumeInfo.authors && <p>著者: {bookInfo.volumeInfo.authors.join(`, `)}</p>}
                {bookInfo.volumeInfo.publisher && <p>出版社: {bookInfo.volumeInfo.publisher}</p>}
              </div>
              {bookInfo.volumeInfo.previewLink && (
                <div className="preview-link-box">
                  <a className="preview-link" href={bookInfo.volumeInfo.previewLink} target="_blank">
                    詳しく見る
                  </a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <Book id={bookItem[0].id} volumeInfo={bookItem[0].volumeInfo} />
    </>
  )
}

export default App
