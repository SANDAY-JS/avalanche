import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/information" component={Info} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/update-profile" component={UpdateProfile} />
        <Route exact path="/password-reset" component={PasswordReset} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
