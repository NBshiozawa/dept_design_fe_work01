import { BookItem } from '../../types'
import { BookImage } from '../atoms/BookImage'
import { BookSubInfo } from '../atoms/BookSubInfo'
import { BookPreviewLink } from '../atoms/BookPreviewLink'
import styles from './MyBook.module.css'

export const MyBook = ({ title, imageLinks, authors, previewLink }: BookItem[`volumeInfo`]) => {
  return (
    <>
      <li className={styles.listitem}>
        <BookImage imageLinks={imageLinks} title={title} />
        <div className={styles.infoblock}>
          <h2 className={styles.title}>{title}</h2>
          {authors && (
            <div className={styles.subInfoWrapper}>
              <BookSubInfo authors={authors} />
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
