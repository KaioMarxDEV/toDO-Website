import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Input } from '../Input'
import { Task } from '../Task'
import styles from './main.module.css'

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'dale koroi' },
    { id: 2, text: 'dale paizao' },
    { id: 3, text: 'dale paizao' },
    { id: 4, text: 'dale paizao' },
  ])

  function handleDelete(taskIdToDelete: number) {
    setTasks(tasks.filter(task => task.id !== taskIdToDelete))
  }

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
            <span className={styles.createdRatio}>{tasks.length}</span>
          </div>
          <div>
            <span className={styles.headerPurple}>Tasks Completed</span>
            <span className={styles.completedRatio}>2 de 5</span>
          </div>
        </header>

        <div>
          {tasks.map(task => (
            <Task task={task} key={task.id} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  )
}