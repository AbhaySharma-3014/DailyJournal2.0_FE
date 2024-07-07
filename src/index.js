import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById("root"));
const url = 'https://dailyjournal-qxeq.onrender.com/api/posts'; // Replace with your Render URL
const interval = 30000; // Interval in milliseconds (30 seconds)

root.render(
    <App />
);



