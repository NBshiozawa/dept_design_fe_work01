import styles from './BookPreviewLink.module.css'

type Props = {
  previewLink?: string
}

export const BookPreviewLink = ({ previewLink }: Props): JSX.Element | null => {
  if (typeof previewLink !== 'string') return null
  // previewLinkがstring型でない場合はnullを返し、fragment(<></>)も返さない。
  // previewLinkがstring型の場合は、a要素のみを返す。
  return (
    <a className={styles.previewLink} href={previewLink} target="_blank">
      詳しく見る
    </a>
  )
}
