import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Input } from '../Input'
import { Task } from '../Task'
import styles from './main.module.css'

export function Main() {
  const [newTask, setNewTask] = useState<Task>({} as Task)
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'dale', checkStatus: false }
  ])

  function handleDelete(taskIdToDelete: number) {
    setTasks(tasks.filter(task => task.id !== taskIdToDelete))
  }

  function handleChangeCheckStatus(taskId: number, type: boolean) {
    const tasksWithTypeUpdated = tasks.map(task => {
      if (task.id === taskId) {
        task.checkStatus = type
        return task
      } else {
        return task
      }
    })
    setTasks(tasksWithTypeUpdated)
  }

  const completedOnes = tasks.filter(task => task.checkStatus === true).length
  const createdOnes = tasks.length

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
            <span className={styles.createdRatio}>{createdOnes}</span>
          </div>
          <div>
            <span className={styles.headerPurple}>Tasks Completed</span>
            <span className={styles.completedRatio}>{completedOnes} de {createdOnes}</span>
          </div>
        </header>

        <div>
          {tasks.map(task => (
            <Task task={task} key={task.id} onDelete={handleDelete} changeCheckStatus={handleChangeCheckStatus} />
          ))}
        </div>
      </div>
    </div>
  )
}