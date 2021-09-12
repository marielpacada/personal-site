import React from "react";
import Sidebar from "./navbar/Sidebar";
import HomeCard from "./home/HomeCard";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Musings from './musings/Musings';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Main />
        </div>
    );
}

const Main = () => (
    <Switch>
        <Route exact path='/' component={HomeCard}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/musings' component={Musings}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </Switch>
);

export default App;