import styles from './BookSubInfo.module.css'

type Props = {
  authors?: string[]
  publisher?: string
}

export const BookSubInfo = ({ authors, publisher }: Props): JSX.Element => {
  return (
    <>
      {authors === undefined && publisher === undefined ? null : (
        <div className={styles.subInfo}>
          {authors && <p>著者: {authors.join(`, `)}</p>}
          {publisher && <p>出版社: {publisher}</p>}
        </div>
      )}
    </>
  )
}
