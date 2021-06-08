import React from "react";
import Sidebar from "./Sidebar";
import About from "./About";
import HomeCard from "./HomeCard";
import { Switch, Route } from 'react-router-dom';

function App() {
    return <div className="my-row row-full-vw app">
        <Sidebar />
        <Main className="main-content"/>
    </div>
}

const Main = () => (
    <Switch>
        <Route exact path='/' component={HomeCard}></Route>
        <Route exact path='/about' component={About}></Route>
    </Switch>
);

export default App;