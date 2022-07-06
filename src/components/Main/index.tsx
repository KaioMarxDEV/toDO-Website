import { PlusCircle } from 'phosphor-react'
import { Input } from '../Input'
import styles from './main.module.css'

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.inputSection}>
        <Input handleInputChange={() => { }} />
        <button className={styles.createTask} >
          <span>Create</span>
          <PlusCircle size={16} />
        </button>
      </div>
      <div className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <span className={styles.headerBlue}>Tasks Created</span>
            <span className={styles.createdRatio}>5</span>
          </div>
          <div>
            <span className={styles.headerPurple}>Tasks Completed</span>
            <span className={styles.completedRatio}>2 de 5</span>
          </div>
        </header>
      </div>
    </div>
  )
}