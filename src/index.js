import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AllFiles from './pages/AllFiles';
import Locked from './pages/Locked';
import Starred from './pages/Starred';
import Upload from './pages/Upload';
import Storage from './pages/Storage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "allfiles",
    element: <AllFiles/>,
  },
  {
    path: "locked",
    element: <Locked/>,
  },
  {
    path: "starred",
    element: <Starred/>,
  },
  {
    path: "upload",
    element: <Upload/>,
  },
  {
    path: "storage",
    element: <Storage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();