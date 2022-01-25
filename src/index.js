import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-aspira/font-aspira.css';
import './font-proxima-nova/font-proxima-nova.css';
// import SimpleReactLightbox from 'simple-react-lightbox';
import SimplerReactLightbox from 'simpler-react-lightbox'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
<React.StrictMode>
<SimplerReactLightbox>
<App />
</SimplerReactLightbox>
</React.StrictMode>
, document.getElementById('root'));