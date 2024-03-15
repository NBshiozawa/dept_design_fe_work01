import { BookItem } from '../../types'
import styles from './Book.module.css'
import { BookSubInfo } from '../atoms/BookSubInfo'
import { BookImage } from '../atoms/BookImage'
import { BookPreviewLink } from '../atoms/BookPreviewLink'

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
        <BookImage imageLinks={imageLinks} title={title} />
        <div className={styles.infoblock}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          {(authors || publisher) && (
            <div className={styles.subInfoWrapper}>
              <BookSubInfo authors={authors} publisher={publisher} />
            </div>
          )}
          {previewLink && (
            <div className={styles.previewLinkWrapper}>
              <BookPreviewLink previewLink={previewLink} />
            </div>
          )}
        </div>
      </li>
    </>
  )
}
