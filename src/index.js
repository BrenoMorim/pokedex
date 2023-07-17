import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import 'styles/index.css';
import AppRoutes from 'routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);
