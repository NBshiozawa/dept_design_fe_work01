import { BookItem } from '../../types'
import { BookImage } from '../atoms/BookImage'
import { BookSubInfo } from '../atoms/BookSubInfo'
import { ButtonList } from './ButtonList'
import styles from './MyBook.module.css'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const MyBook = ({ title, imageLinks, authors, previewLink, onClick }: BookItem[`volumeInfo`] & Props) => {
  return (
    <>
      <li className={styles.listitem}>
        <BookImage imageLinks={imageLinks} title={title} />
        <div className={styles.infoblock}>
          <h3 className={styles.title}>{title}</h3>
          {authors && (
            <div className={styles.subInfoWrapper}>
              <BookSubInfo authors={authors} />
            </div>
          )}
          <div className={styles.buttonListWrapper}>
            <ButtonList previewLink={previewLink} buttonLabel="MyBooksから削除" onClick={onClick} />
          </div>
        </div>
      </li>
    </>
  )
}
