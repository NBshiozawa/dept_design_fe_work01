import { BookItem } from '../types'
import styles from './Book.module.css'

export const Book = ({
  title,
  authors,
  description,
  publisher,
  imageLinks,
  previewLink,
}: BookItem['volumeInfo']): JSX.Element => {
  return (
    <>
      <li className={styles.listitem}>
        {imageLinks && (
          <div className={styles.thumbnail}>
            <img src={imageLinks.smallThumbnail} alt={title} />
          </div>
        )}
        <div className={styles.rightblock}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          {(authors || publisher) && (
            <div className={styles.subInfo}>
              {authors && <p>著者: {authors.join(`, `)}</p>}
              {publisher && <p>出版社: {publisher}</p>}
            </div>
          )}
          {previewLink && (
            <div className={styles.previewLinkbox}>
              <a className={styles.previewLink} href={previewLink} target="_blank">
                詳しく見る
              </a>
            </div>
          )}
        </div>
      </li>
    </>
  )
}
