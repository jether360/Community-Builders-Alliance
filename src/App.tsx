import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./app/navigation/PrivateRoute";
import privateRoutes from "./app/private/privateRoute";
import Menubar from "./components/menu/MenuBar";
import NotFound from "./app/layouts/NotFound";
import publicRoutes from "./app/navigation/public/publicRoute";
import PublicRoute from "./app/navigation/publicRoute/PublicRoute";
import PublicMainLayout from "./components/public/PublicMainLayout";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {publicRoutes.map((route: any, key: any) => {
            const { component, path } = route;
            return (
              <PublicRoute
                exact
                path={path}
                key={key}
                component={(route: any) => (
                  <PublicMainLayout component={component!} {...route} />
                )}
              />
            );
          })}
          {privateRoutes.map((route: any, key: any) => {
            const { component, path } = route;
            return (
              <PrivateRoute
                exact
                path={path}
                key={key}
                component={(route: any) => (
                  <Menubar component={component!} {...route} />
                )}
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
