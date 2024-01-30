import React, { useState, useEffect, useRef } from 'react'
import styles from './Timer.module.css'

const times: number[] = [5, 10, 15]
// ゼロ埋め
const zeroPadding = (time: number) => {
  return String(time).padStart(2, '0')
}

export const Timer = () => {
  const [countTime, setCountTime] = useState<number>(0)
  const [isStart, setIsStart] = useState<boolean>(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCountTime(Number(selectRef.current?.value))
    // Number型に変換（型エラーでNumber使用しましたがこれで良いのかの状態
    setIsStart(true)
  }
  // selectのrefの値をbuttonクリックでカウントダウン時間にセットしてタイマースタート...的なことをやろうとしています

  useEffect(() => {
    const countDown = setInterval(() => {
      if (isStart && countTime > 0) {
        setCountTime(countTime - 1)
      }
      if (countTime === 0) {
        clearInterval(countDown)
        setIsStart(false)
      }
    }, 1000)

    return () => {
      clearInterval(countDown)
    }
  }, [countTime])

  return (
    <>
      <div className={styles.timer}>
        <div className={styles.countblock}>
          <p>読書タイマー</p>
          <p className={styles.countnum}>00:00:{zeroPadding(countTime)}</p>
        </div>
        <form className={styles.timerform}>
          <select className={styles.selectbox} ref={selectRef}>
            {times.map((time) => (
              <option value={time} key={time}>
                {time}秒
              </option>
            ))}
          </select>
          <button type="submit" className={styles.button} onClick={handleClick}>
            Start
          </button>
        </form>
      </div>
    </>
  )
}
