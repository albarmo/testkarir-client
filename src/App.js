import "./App.css";
import qoreContext from "./qoreContext";

import {
  LoginPage,
  RegsiterPage,
  UserProfile,
  HomePage,
  TestPage,
  TestResult,
  Agreement,
  PremiumTest,
} from "./pages/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <qoreContext.context.Provider
      value={{
        client: qoreContext.client,
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/register" component={RegsiterPage} />
            <Route path="/profile/:id" component={UserProfile} />
            <Route path="/test" component={TestPage} />
            <Route path="/result" component={TestResult} />
            <Route path="/agreement" component={Agreement} />
            <Route path="/testkarir" component={PremiumTest} />
          </Switch>
        </Router>
      </div>
    </qoreContext.context.Provider>
  );
}

export default App;
