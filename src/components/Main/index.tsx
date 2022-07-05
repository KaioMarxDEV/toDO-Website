import { Input } from '../Input'
import styles from './main.module.css'

export function Main() {
  return (
    <div className={styles.main}>
      <Input handleInputChange={() => { }} />
      <button>
        <span>Criar</span>
        <PlusCircle size={32} />
      </button>
    </div>
  )
}