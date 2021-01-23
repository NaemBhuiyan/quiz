import React from "react";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "./Components/Navbar";
import routers from "./router/router";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Switch>
        {routers.map((route) =>
          route.meta ? (
            <PrivateRoute {...route} key={route.name}></PrivateRoute>
          ) : (
            <Route {...route} key={route.name} />
          )
        )}
      </Switch>
    </div>
  );
}

export default App;
