import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App";

/*
    React Bootstrap Configuration
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)