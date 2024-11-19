import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import TripDetail from './components/TripDetail';
import TripsList from './components/TripsList';
import Nav from './components/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <div>
 <Nav /> <Home />,
    </div>)
   
  },
   {
    path:"/TripsList",
    element:(<>
    <Nav /> <TripsList />
    </>)
  },
  {
    path:"/TripDetail/:tripId",
    element:(<>
   <Nav /> <TripDetail/>
    </>)
  }
]);

ReactDOM.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
