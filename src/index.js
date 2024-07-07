import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById("root"));
const url = 'https://dailyjournal-qxeq.onrender.com/api/posts'; // Replace with your Render URL
const interval = 30000; // Interval in milliseconds (30 seconds)

function reloadWebsite() {
axios.get(url)
  .then(response => {
    console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
  })
  .catch(error => {
    console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
  });
}

setInterval(reloadWebsite, interval);
root.render(
    <App />
);



