import React from 'react';
import{
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
    return(
        <div className="container">
            <Router>
                <Switch>
                    <Route path='/' component={Player} exact></Route>
                    <Route path='/question' component={Question} exact></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;


