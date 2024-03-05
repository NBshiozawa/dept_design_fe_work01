import { useState, useRef } from 'react'
import { BookItem } from '../types'
import styles from './Content.module.css'
import { Header } from './Header'
import { Booklist } from './Booklist'
import { SearchForm } from './SearchForm'

// 取得するjsonの型を定義（ドキュメントから確認できる）
// キーワードがヒットしない場合は"kind", "totalItems"のみ返ってくるため、"items"はoptionalとする
type BookData = {
  items?: BookItem[]
  kind: string
  totalItems: number
}

const Content = () => {
  const [bookItem, setBookItem] = useState<BookItem[]>([])
  const [total, setTotal] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // thenメソッドを使って書き換え、エラー処理を追加
  const fetchBookData = (): Promise<BookData> => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputRef.current?.value}`)
      .then((response) => {
        // fetch()の戻り値（Promiseオブジェクト）を response という引数に格納
        // !response.ok の場合に Error を throw するようにする
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
          // promiseStatusが rejected の場合、後に記述する catch へ
        }
        // responseは HTTP レスポンス全体を表現するものとなるため、json()メソッドで本体のテキストを JSON として抽出して return
        return response.json()
      })
      .then((data) => {
        // 上のthenの戻り値を data という引数に格納
        // この data は BookData型の Promiseオブジェクトとなるため、BookDataで型アサーションして return
        return data as BookData
      })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current?.value === '') return

    fetchBookData()
      .then((data) => {
        const bookItem = data.items
        const total = data.totalItems
        // dataで受け取った値をそれぞれ bookItem と total に格納

        bookItem ? setBookItem(bookItem) : setBookItem([])
        // bookItem を set（ヒットしない場合は空の配列をsetする...？）

        setTotal(total)
        // total を set
      })
      .catch((error) => {
        console.error(error)
        // fetchBookData で throw したエラーを出力
      })

    console.log(fetchBookData())
    // Promise {<pending>} のまま...？
  }

  const totalCount = () => {
    if (total === 0) {
      return inputRef.current?.value && <p>{inputRef.current?.value}は見つかりませんでした。</p>
      // total === 0（ヒットなし）かつ inputRef に値があるときに表示
    }
    if (total > 0) {
      return (
        <>
          <p>{total}件の書籍が見つかりました。</p>
          {total >= 10 && <p>そのうち10件を表示します。</p>}
          {/* 返される結果の最大数が10件のため、2行目のテキストは10件以上ヒットした場合のみ表示 */}
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
