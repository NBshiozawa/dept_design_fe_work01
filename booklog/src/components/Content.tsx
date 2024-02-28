import { useState, useRef } from 'react'
import { BookItem } from '../types'
import styles from './Content.module.css'
import { Header } from './Header'
import { Booklist } from './Booklist'
import { SearchForm } from './SearchForm'

// 取得するjsonの型を定義
type BookData = {
  items: BookItem[]
  totalItems: number
}

const Content = () => {
  const [bookItem, setBookItem] = useState<BookItem[]>([])
  const [total, setTotal] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const bookData = async (): Promise<BookData> => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputRef.current?.value}`)
    const data = (await res.json()) as BookData // 型アサーション
    return data
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current?.value === '') return
    const data = await bookData()
    const bookItem = data.items
    const total = data.totalItems
    setTotal(total)

    if (total === 0) {
      return setBookItem([])
    } else {
      return setBookItem(bookItem)
    }
  }

  const totalCount = () => {
    if (total === 0) {
      return <p>{inputRef.current?.value}は見つかりませんでした。</p>
    } else {
      return (
        <>
          <p>{total}件の書籍が見つかりました。</p>
          <p>そのうち{total <= 10 ? total : '10'}件を表示します。</p>
          {/* 返される結果の最大数が10件のため、10件未満ではtotalの値を表示する */}
        </>
      )
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.search}>
          <SearchForm ref={inputRef} onSubmit={handleSubmit} />
          {/* ここのエラーの解消方法がわからずでした...
           * Promise-returning function provided to attribute where a void return was expected.
           */}
          <div className={styles.totalCount}>{totalCount()}</div>
        </div>
        <div className={styles.booklist}>
          <Booklist bookItem={bookItem} />
        </div>
      </main>
    </>
  )
}

export default Content
