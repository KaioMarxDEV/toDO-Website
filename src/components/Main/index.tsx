import { PlusCircle } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { Task } from '../Task'
import styles from './main.module.css'

export function Main() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const taskCreated = [...tasks, {
      id: tasks.length + 1,
      text,
      checkStatus: false
    }]
    setTasks(taskCreated)
    setText('')
    localStorage.setItem('@toDO-website', JSON.stringify(taskCreated))
  }

  function handleInputChange(e: any) {
    setText(e.target.value)
  }

  function handleDelete(taskIdToDelete: number) {
    const tasksFiltred = tasks.filter(task => task.id !== taskIdToDelete)
    setTasks(tasksFiltred)
    localStorage.setItem('@toDO-website', JSON.stringify(tasksFiltred))
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

  useEffect(() => {
    const loadTasks = () => {
      const localTasks = JSON.parse(localStorage.getItem('@toDO-website')!)
      if (localTasks) {
        setTasks(localTasks)
      }
    }

    loadTasks()
  }, [])

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.inputSection}>
        <input
          value={text}
          className={styles.input}
          placeholder="Add a new task"
          onChange={handleInputChange}
          required
        />
        <button className={styles.createTask} disabled={text.length === 0} type="submit">
          <span>Create</span>
          <PlusCircle size={16} />
        </button>
      </form>
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