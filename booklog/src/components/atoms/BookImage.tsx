import styles from './BookImage.module.css'

type Props = {
  title: string
  imageLinks?: {
    smallThumbnail: string
  }
}

export const BookImage = ({ title, imageLinks }: Props): JSX.Element => {
  return (
    <>
      {imageLinks ? (
        <picture className={styles.thumbnail}>
          <img src={imageLinks.smallThumbnail} alt={title} />
        </picture>
      ) : (
        <div className={styles.thumbnail}>
          <span className={styles.noImage}>NO IMAGE</span>
        </div>
      )}
    </>
  )
}
