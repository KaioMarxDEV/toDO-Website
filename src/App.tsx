import styles from './app.module.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

import './global.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
