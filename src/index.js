import * as React from "react";
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import { router } from "./route/routes";
import { store } from "./store/store";
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
