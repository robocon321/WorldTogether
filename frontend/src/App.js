import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Client from "./views/client/Client";
import Admin from "./views/admin/Admin";
import AuthIndex from "./views/auth/AuthIndex";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/auth" component={AuthIndex} />
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Client} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
