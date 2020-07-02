import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
// import Home from './home.js';
import History from '../components/history/history';

const Routes = props => {
    console.log('yazan my nigga love u baby you are my bitch no hazoma',props.item);
    var item = localStorage.getItem("item");
console.log('asassdw',item);
    let items = props.item.map((item, i)=> <li key={i}>{item}</li> )
    

    return (
        <main>
            <Route path="/" exact>
                {/* <Home /> */}
            </Route> 
            <Route path="/history" exact render={() => <History>{items}</History>} />
        </main>
    )
}


export default Routes;
