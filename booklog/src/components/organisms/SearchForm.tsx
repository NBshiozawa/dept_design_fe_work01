import { forwardRef } from 'react'
import styles from './SearchForm.module.css'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const SearchForm = forwardRef<HTMLInputElement, Props>(({ onSubmit }, ref) => {
  // Content から SearchForm に ref を渡すため、forwardRef でラップするように変更

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <form onSubmit={onSubmit} className={styles.searchform}>
      <input
        onFocus={handleFocus}
        className={styles.input}
        ref={ref}
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
})
