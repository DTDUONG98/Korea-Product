import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, browserHistory } from '../node_modules/react-router';

import './index.css';
import Login from '../src/View/Login/Index'
import Create from '../src/View/Login/Create'
import Trangchu from '../src/View/Home/Index'
import Custetics from '../src/View/Cusmetics/Index'
import HelthyFood from '../src/View/HelthyFood/Index'
import Ohui from './View/Details/Ohui'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/Create/:id" component={Create} />
        <Route exact path="/Trangchu/:id" component={Trangchu} />
        <Route exact path="/Cusmetics/:id" component={Custetics}/>
        <Route exact path="/Ohui/:id" component={Ohui} />
        <Route exact path="/HelthyFood/:id" component={HelthyFood} />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
