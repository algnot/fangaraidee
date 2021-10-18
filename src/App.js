import Loading from "./component/Loading/Loading";
import { keepTheme } from "./theme/theme";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Test from './component/Test/Home'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    await keepTheme();
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
            <Home setLoading={setLoading} id="mTdG3yuGbp2GBUNMggMg" />
          </Route>
          <Route path="/test">
            <Test setLoading={setLoading} id="IR1X6Fvydxwmhvsfhegz"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
