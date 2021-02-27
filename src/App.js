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
  TestSubmision,
  Article,
  ReadArticle,
  UploadReport,
  FreeTestResult,
  AboutPage,
  NotFoundP404,
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
            <Route path="/freetest" component={TestPage} />
            <Route path="/result" component={TestResult} />
            <Route path="/agreement" component={Agreement} />
            <Route path="/teskarir/:id" component={PremiumTest} />
            <Route path="/submision" component={TestSubmision} />
            <Route path="/article" component={Article} />
            <Route path="/read/:id" component={ReadArticle} />
            <Route exact path="/report" component={UploadReport} />
            <Route exact path="/resultfree" component={FreeTestResult} />
            <Route path="/about" component={AboutPage} />
            <Route path="*" component={NotFoundP404} />
          </Switch>
        </Router>
      </div>
    </qoreContext.context.Provider>
  );
}

export default App;
