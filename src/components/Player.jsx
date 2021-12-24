import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

class Player extends React.Component {
    //const Player = () => {
    //const { onSubmit } = this.props
    /* const url = ''
     const fetchApi = async () => {
         const response = await fetch(url)
 
     }*/

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log("Tenemos: " + event.target.value.length)
        var btn = document.getElementById("btnPlay");
        var msg = document.getElementById("msgPlay");
        if (this.state.value.length >= 3) {
            btn.style.display = "block";
            msg.style.display = "none";
        } else {
            btn.style.display = "none";
            msg.style.display = "block";
        }
    }



    render() {

        return (
            <>
                <Header></Header>
                <form>
                    <div className="form-group">
                        <label>Nick</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="playerName" placeholder="Enter nickname" />
                    </div>
                    <br></br>
                    <Link to={`/question/${this.state.value}`}>
                        <button className="btn btn-primary" id="btnPlay" style={{ display: "none" }}>Jugar</button>
                    </Link>
                    <h4 id="msgPlay">Recuerda ingresar tu Nick</h4>
                </form>
            </>
        );
    }
}

export default Player;