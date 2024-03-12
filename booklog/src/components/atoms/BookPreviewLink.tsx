import styles from './BookPreviewLink.module.css'

type Props = {
  previewLink?: string
}

export const BookPreviewLink = ({ previewLink }: Props): JSX.Element => {
  return (
    <>
      <a className={styles.previewLink} href={previewLink} target="_blank">
        詳しく見る
      </a>
    </>
  )
}
