// index.js
import React, { useEffect } from 'react';
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

  console.log("session index.js:", sessionStorage.getItem('isLogged')); // Example of using user
  const storedUserData = sessionStorage.getItem('user');
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const storedUserRole = storedUser.role; // Accessing the role property

  console.log("Stored user role:", storedUserRole);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!sessionStorage.getItem('isLogged')) {
          // Redirect to guest login if not authenticated
          return <Redirect to="/guest/login" />;
        }
        return <Component {...props} />;
      }}
    />
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
        {/* <Redirect path="/" component={RedirectByAuthStatus} /> */}

        {/* Redirect any other routes to guest login */}
        {/* <Redirect to="guest/login" /> */}
        {/* <Redirect to={`/${storedUserRole}/dashboard`} /> */}
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  rootElement
);
