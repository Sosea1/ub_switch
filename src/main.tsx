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
import { createStore, applyMiddleware, Store } from "redux"
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { EnterPassword } from './components/EnterPassword/EnterPassword';
import axios from 'axios';


axios.defaults.baseURL = "http://192.168.0.104:5000"

const router = createBrowserRouter([
  {
    path: "/",
    element: <EnterPassword key={0}/>,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "/monitoring",
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

export interface CounterState {
  value: string;
};

const initialState: CounterState = {
  value: "null",
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
});

export const { update } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

const store = configureStore({
  reducer: counterReducer,
  preloadedState: initialState,
})

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <App />
    <div id="model"></div>
  </Provider>,
  
);
