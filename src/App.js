import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:country">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
