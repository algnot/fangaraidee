import Loading from './component/Loading/Loading'
import { keepTheme } from './theme/theme'
import { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import styles from './App.module.css'

function App() {
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    },2000)
    keepTheme();
  })

  return (
    <div className={styles.container}>
      { loading && <Loading/> }
      <div className={styles.navbar}>
        <Navbar/>
      </div>

      <div>
        feagrg
      </div>
    </div>
  );
}

export default App;
