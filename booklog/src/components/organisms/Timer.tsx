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
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCountTime(Number(selectRef.current?.value))
    setIsStart(true)
    setIsEnd(false)
  }

  useEffect(() => {
    // isStartがtrueではない場合は、以降の処理をさせないようにする
    if (!isStart) return
    const countDown = setInterval(() => {
      // if (!isStart) return によって、isStart=trueの場合のみ以降の処理が実施されることになるため、isStart && の記述は不要に
      if (countTime - 1 > 0) {
        setCountTime(countTime - 1)
      } else {
        clearInterval(countDown)
        setIsStart(false)
        setIsEnd(true)
      }
    }, 1000)

    return () => {
      clearInterval(countDown)
    }
  }, [countTime])

  const countText = () => {
    if (isEnd) {
      return <p className={styles.isEnd}>読書タイマー 終了</p>
    } else {
      return (
        <p>
          読書タイマー 残り
          <span className={styles.countnum}>{zeroPadding(countTime)}</span>秒
        </p>
      )
    }
  }

  return (
    <>
      <div className={styles.timer}>
        <div className={styles.countblock}>{countText()}</div>
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
