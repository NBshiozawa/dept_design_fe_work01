import styles from './BookActionButton.module.css'

type Props = {
  buttonLabel: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BookActionButton = ({ buttonLabel, onClick }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.actionButton}>
      {buttonLabel}
    </button>
  )
}
