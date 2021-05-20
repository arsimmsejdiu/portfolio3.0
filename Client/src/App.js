import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Contact from "./components/Contact";
import MainContent from './components/MainContent';
//import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent}/>
        <Route exact path="/contact" component={Contact} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
