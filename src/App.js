import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Home from "./components/home/Home";
import Nosotros from "./components/nosotros/Nosotros";
import Profile from "./components/profile/Profile";
import Contact from "./components/contacto/Contact";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='fluid'>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path='/' exact={true}>
              <Home />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/nosotros'>
              <Nosotros />
            </Route>
            <Route path='/my-profile'>
              <Profile />
            </Route>
            <Route path='/contacto'>
              <Contact />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
