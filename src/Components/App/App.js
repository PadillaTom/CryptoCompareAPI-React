import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages
import {Dashboard, Login, Error} from "../../Pages"

function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
        </Route>    
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
