import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Info from "./Components/Info/Info";
import { Provider } from 'react-redux';
import store from "./Store/Store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path="/EcommerceOnePageWebsite/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/appInfo" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


export default App
