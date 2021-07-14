import React from 'react';
import ReactDom from 'react-dom';
import App from "./app";



ReactDom.render(
   <App></App>,               //can be written as<App/> as no data si passed oin between
    document.getElementById('root')
)

