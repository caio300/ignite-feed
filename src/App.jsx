import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import style from './App.module.css';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
        </main>
      </div>
    </div>
  )
}

export default App
