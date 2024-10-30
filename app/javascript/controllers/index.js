import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components';

// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

ReactDOM.render(     <React.StrictMode>      <App />     </React.StrictMode>,     document.getElementById('root')     );