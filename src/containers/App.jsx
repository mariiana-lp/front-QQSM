import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "../assets/styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "../components/Player";
import Question from "../components/Question";
//import Ranking from "../components/Player";
function App() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Player/>
                    </Route>
                    <Route path='/question/:name' exact>
                        <Question></Question>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;


