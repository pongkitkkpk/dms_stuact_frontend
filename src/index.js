// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import GuestLayout from "layouts/Guest.js";
import { AuthProvider, useAuth } from "Auth/AuthContext"; // Import AuthProvider and useAuth
import { adminRoutes } from "routes";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated, user } = useAuth();
  console.log("isAuthenticated index.js:", isAuthenticated); // Example of using isAuthenticated
  console.log("user:", user); // Example of using user
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          // Redirect to guest login if not authenticated
          return <Redirect to="/guest/login" />;
        }

        // Check if user has the required role
        if (roles && roles.indexOf(user.role) === -1) {
          // Redirect to unauthorized page if role doesn't match
          return <Redirect to="/unauthorized" />;
        }

        // Authenticated and has required role, render the component
        return <Component {...props} />;
      }}
    />
  );
};

const RedirectByAuthStatus = () => {
  const { isAuthenticated, user } = useAuth();

  return isAuthenticated ? (
    <Redirect to={`/${user.role}/dashboard`} />
  ) : (
    <Redirect to="/guest/login" />
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        {/* Public routes accessible by anyone */}
        <Route path="/guest" render={(props) => <GuestLayout {...props} />} />

        {/* Protected routes accessible only by authenticated users */}
        <ProtectedRoute
          path="/user"
          component={adminRoutes}
          roles={["user"]}
        />
        <ProtectedRoute
          path="/admin"
          component={AdminLayout}
          roles={["admin"]}
        />

        {/* Redirect based on authentication status */}
        {/* <Route path="/" component={RedirectByAuthStatus} /> */}

        {/* Redirect any other routes to guest login */}
        <Redirect to="/guest/login" />
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  rootElement
);
