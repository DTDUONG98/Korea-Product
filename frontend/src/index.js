import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, browserHistory } from '../node_modules/react-router';

import './index.css';
import Login from '../src/View/Login/Index'
import Create from '../src/View/Login/Create'
import CreateCosmetics from '../src/View/Cosmetics/Create'
import Trangchu from '../src/View/Home/Index'
import Costetics from './View/Cosmetics/Index'
import HelthyFood from '../src/View/HelthyFood/Index'
import Details from './View/Details/Index'
import Bills from './View/Bills/Index'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={Trangchu} />
        <Route exact path="/Create/:id" component={Create} />
        <Route exact path="/CreateCosmetics/:id" component={CreateCosmetics} />
        <Route exact path="/Cosmetics/:id" component={Costetics}/>
        <Route exact path="/Details/:id" component={Details} />
        <Route exact path="/HelthyFood/:id" component={HelthyFood} />
        <Route exact path="/Bills/:id" component={Bills} />
        <Route exact path="/Login/:id"  component={Login}/>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
