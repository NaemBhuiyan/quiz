import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AppNavbar from "./Components/Navbar";
import routers from "./router/router";
import PrivateRoute from "./Components/PrivateRoute";
import Context from "./context/Context";
import ToastNotice from "./Components/Toast";

function App() {
  const { userType } = useContext(Context);
  const [show, setShow] = useState(false);

  useEffect(() => {
    userType && setShow(true);
  }, [userType]);

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
      <ToastNotice
        message={`You are logged in as ${userType}`}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default App;
