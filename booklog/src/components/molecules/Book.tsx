import { BookItem } from '../../types'
import styles from './Book.module.css'
import { BookSubInfo } from '../atoms/BookSubInfo'
import { BookImage } from '../atoms/BookImage'
import { ButtonList } from './ButtonList'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Book = ({
  title,
  authors,
  description,
  publisher,
  imageLinks,
  previewLink,
  onClick,
}: BookItem['volumeInfo'] & Props): JSX.Element => {
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
          <div className={styles.buttonListWrapper}>
            <ButtonList previewLink={previewLink} buttonLabel="MyBooksに追加" onClick={onClick} />
          </div>
        </div>
      </li>
    </>
  )
}
