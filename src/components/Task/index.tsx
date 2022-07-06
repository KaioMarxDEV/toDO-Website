import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";

import styles from './task.module.css'

export interface Task {
  id: number;
  text: string;
}

interface TaskProps {
  task: Task
  onDelete: (taskId: number) => void;
}

export function Task({ task, onDelete }: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleOnClickCheckBox() {
    setChecked(!checked)
  }

  function handleOnDelete() {
    onDelete(task.id)
  }

  return (
    <div className={styles.taskComponent}>
      <button onClick={handleOnClickCheckBox} className={styles.checkbox}>
        {checked ? <CheckCircle className={styles.checked} size={18} /> : <Circle className={styles.unchecked} size={18} />}
      </button>
      <p style={checked ? { textDecoration: 'line-through', color: '#808080' } : {}} >
        {task.text}
      </p>
      <button onClick={handleOnDelete} className={styles.delete} >
        <Trash size={20} />
      </button>
    </div>
  )
}