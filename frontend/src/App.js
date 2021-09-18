import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Client from "./views/client/Client";
import Admin from "./views/admin/Admin";
import AuthIndex from "./views/auth/AuthIndex";

function App() {
  return (
    <Router>
      <Route path="/auth" component={AuthIndex} />
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Client} />
      </Switch>
    </Router>
  );
}

export default App;
