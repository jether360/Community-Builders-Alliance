import React from "react";
import {
  RouteProps,
  RouteComponentProps,
  Route,

} from "react-router-dom";


interface IProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>;
}

const RouterPrivate: React.FC<IProps> = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) =>
         <Component {...props} /> 
      }
    />
  );
};

export default RouterPrivate;
