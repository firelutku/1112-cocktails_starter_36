import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_36 from './App_36';
import { AppProvider_36 } from './context_36';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_36>
      <App_36 />
    </AppProvider_36>
  </React.StrictMode>
);
