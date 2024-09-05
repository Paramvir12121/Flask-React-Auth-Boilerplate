import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./auth/Login";
import { App } from "./App";
import NotFoundPage from './pages/errorPages/NotFoundPage';
import NotAuthorized from './pages/errorPages/NotAuthorized';

import Dashboard from './pages/dashboard/Dashboard';

import ConfirmEmail from './auth/misc/ConfirmEmail';
import Signup from './auth/Singup';
import ForgotPassoword from './auth/resetPassword/ForgotPassoword';
import ForgotPasswordEmail from './auth/resetPassword/ForgotPasswordEmail';
import ResetPasswordConfirm from './auth/resetPassword/ResetPasswordConfirm';
import ProtectedRoute from './auth/ProtectedRoutes';


import LandingPage from './pages/landingPage/LandingPage';
import ROUTES from "./Routes";  // Import the routes

const router = createBrowserRouter([
  { 
    path: ROUTES.HOME, 
    element: <App />,
    children: [
      { path: ROUTES.LOGIN, element: <Login /> },
      { path: ROUTES.CONFIRM_EMAIL, element: <ConfirmEmail /> },
      { path: ROUTES.SIGNUP, element: <Signup /> },
      { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassoword /> },
      { path: ROUTES.FORGOT_PASSWORD_EMAIL, element: <ForgotPasswordEmail /> },
      { path: ROUTES.RESET_PASSWORD_CONFIRM, element: <ResetPasswordConfirm /> },
      { path: ROUTES.LANDING_PAGE, element: <LandingPage /> },
      {
        path: ROUTES.HOME,
        element: <ProtectedRoute />,
        children: [
          { path: ROUTES.DASHBOARD, element: <Dashboard /> },
          // { path: ROUTES.CHECKOUT, element: <Checkout /> },
          // Add other protected routes here
        ],
        errorElement: <NotFoundPage />,
      },
      // Define other paths as needed
    ],
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
