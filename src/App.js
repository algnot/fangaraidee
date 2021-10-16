import Loading from "./component/Loading/Loading";
import { keepTheme } from "./theme/theme";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
    keepTheme();
  });

  return (
    <Router basename="/fangaraidee">
      <div className={styles.container}>
        {loading && <Loading />}
        <div className={styles.navbar}>
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
