import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './komponenter/deler/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'));
