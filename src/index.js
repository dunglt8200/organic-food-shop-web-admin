import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSetting from './routerSetting';
import {BrowserRouter} from 'react-router-dom';
import "./static/css/main.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterSetting></RouterSetting>
  </BrowserRouter>
);
