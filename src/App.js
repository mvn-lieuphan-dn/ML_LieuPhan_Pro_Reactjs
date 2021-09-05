import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/scss/styles.scss'
import Features from './pages/Features'
import Account from './pages/Account/index'
import { Switch, Route } from "react-router-dom"
import PrivateRoute from "./guard/PrivateRoute"
import Auth from "./pages/Auth/index"
function App() {
  return (
    <div>
      <Header />
      <div className="page-main flex-centered">
        <Switch>
          <React.Suspense fallback={<span>Loading...</span>}>
            <PrivateRoute path="/account">
              <Route path="/">
                <Account />
              </Route>
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Features />
            </Route>
          </React.Suspense>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
