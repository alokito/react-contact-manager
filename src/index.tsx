import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  Params,
  RouterProvider,
} from "react-router-dom";
import { api } from './web-api';

interface LoaderParams {
  params: {
    contactId: number
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contacts/:contactId",
    element: <App/>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
