import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import moment from "moment";
import Mealy from "./components/Mealy";
import "./styles/style.scss";
import "normalize.css/normalize.css";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional cofiguration
const options = {
    position: 'bottom right',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <Mealy />
    </AlertProvider>,
    document.getElementById("app")
);
