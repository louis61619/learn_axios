import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios'

axios.defaults.baseURL = "https://httpbin.org"
axios.defaults.timeout =  5000
axios.defaults.headers.common['token'] = "fjdlsjfsl"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals