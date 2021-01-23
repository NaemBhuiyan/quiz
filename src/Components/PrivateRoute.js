import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/Context";

export default function PrivateRoute({ component: Component, meta, ...rest }) {
  const { userType } = useContext(Context);
  console.log(userType);
  return (
    <Route
      {...rest}
      render={(props) =>
        userType && meta.access.includes(userType) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
