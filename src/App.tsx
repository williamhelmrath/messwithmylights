import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buttons from "./components/Buttons";
import Login from "./components/Login";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Buttons} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
