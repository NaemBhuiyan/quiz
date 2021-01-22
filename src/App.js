import React from "react";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "./Components/Navbar";
import routers from "./router/router";

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Switch>
        {routers.map((route) => {
          return <Route {...route} key={route.name}></Route>;
        })}
      </Switch>
    </div>
  );
}

export default App;
