import { BookPreviewLink } from '../atoms/BookPreviewLink'
import { BookActionButton } from '../atoms/BookActionButton'
import styles from './ButtonList.module.css'

type Props = {
  previewLink?: string
  buttonLabel: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonList = ({ previewLink, buttonLabel, onClick }: Props): JSX.Element => {
  return (
    <>
      <ul className={styles.buttonList}>
        {previewLink && (
          <li className={styles.buttonItem}>
            <BookPreviewLink previewLink={previewLink} />
          </li>
        )}
        <li className={styles.buttonItem}>
          <BookActionButton onClick={onClick} buttonLabel={buttonLabel} />
        </li>
      </ul>
    </>
  )
}
