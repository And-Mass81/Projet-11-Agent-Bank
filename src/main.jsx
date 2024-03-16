import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthGuard from './_helpers/AuthGuard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import App from './App';
import Home from './pages/Home'
import UserLayout from './pages/dashboard/UserLayout';
import Error from './pages/Error';
import Login from './pages/login'

const mainRoute = createBrowserRouter([ //missing createBrowserRouter

  {
    path: '/',
    element: <App />, // App wil be the father (oulet) and wil have the footer and navbar.
    children:
      [{
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "*",
        element: <Error />
      },
      ],
  },

  {
    path: 'user', element: (
      <AuthGuard>
        <UserLayout />
      </AuthGuard>
    )
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRoute} />
  </React.StrictMode>
);


/* path: 'user', element: (
  <AuthGuard>
    <UserLayout />
  </AuthGuard>
) */