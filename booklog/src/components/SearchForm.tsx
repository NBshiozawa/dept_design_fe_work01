import { useRef } from 'react'
import styles from './SearchForm.module.css'

export const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`"${inputRef.current?.value}" で検索しました。`)
  }
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchform}>
      <input
        onFocus={handleFocus}
        className={styles.input}
        ref={inputRef}
        type="text"
        id="query"
        name="query"
        placeholder="キーワードを入力して書籍を検索"
      />
      <button className={styles.button} type="submit">
        検索
      </button>
    </form>
  )
}
