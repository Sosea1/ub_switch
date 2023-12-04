import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Errorpage from './error-page'
import { App } from './App';
import './resets.css';
import { Router, RouterProvider,createBrowserRouter } from 'react-router-dom';
import {MainMonitoring} from './components/MainMonitoring/MainMonitoring';
import ErrorPage from './error-page';
import { Switching } from './components/Switching/Switching';
import { Routing } from './components/Routing/Routing';
import { QoS } from './components/QoS/QoS';
import { Security } from './components/Security/Security';
import { System } from './components/System/System';
import { Diagnosis } from './components/Diagnosis/Diagnosis';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMonitoring key={1}/>,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "/switching",
    element: <Switching key={2}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/routing",
    element: <Routing key={3}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/qos",
    element: <QoS key={4}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/security",
    element: <Security key={5}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/system",
    element: <System key={6}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/diagnosis",
    element: <Diagnosis key={7}/>,
    errorElement: <ErrorPage />,
  },
  
  
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
  
);
