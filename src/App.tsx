import { Input } from './Input';

import styles from './app.module.css';

import './global.css';
import { Header } from './Header';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
