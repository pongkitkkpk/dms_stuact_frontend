import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0';
import './assets/css/demo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminLayout from 'layouts/Admin.js';
import GuestLayout from 'layouts/Guest.js';
import StudentLayout from 'layouts/Student.js';
import { AuthProvider } from 'Auth/AuthContext'; // Import AuthProvider

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
// 
  const storedUserData = sessionStorage.getItem('user');
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const storedUserRole = storedUser.account_type; // Accessing the account_type property
// 
console.log(storedUser)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!sessionStorage.getItem('isLogged')) {
          // Redirect to guest login if not authenticated
          return <Redirect to="/guest/login" />;
        }
        // Check if the user has the required role
        if (roles && !roles.includes(storedUserRole)) {
          // Redirect to unauthorized page if the user doesn't have the required role
          return <Redirect to="/unauthorized" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <AuthProvider> {/* Wrap the application with AuthProvider */}
    <BrowserRouter>
      <Switch>
        {/* Public routes accessible by anyone */}
        <Route path="/guest" render={(props) => <GuestLayout {...props} />} />

        {/* Protected routes accessible only by authenticated users */}
        <ProtectedRoute
          path="/students"
          component={StudentLayout}
          roles={['students']}
        />
        <ProtectedRoute
          path="/admin"
          component={AdminLayout}
          roles={['admin']}
        />

        {/* Redirect any other routes to guest login */}
        <Redirect to="/guest/login" />
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  rootElement
);

