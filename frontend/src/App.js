import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Client from "./views/client/Client";
import Admin from "./views/admin/Admin";
import AuthIndex from "./views/auth/AuthIndex";
import AuthProvider from "./contexts/AuthContext";
import Error404 from './views/error/Error404';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthIndex} />
          <Route path="/admin" component={Admin} />
          <Route path="/error" component={Error404} />          
          <Route path="/" exact component={Client} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
