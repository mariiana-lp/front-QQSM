import React, { useEffect } from 'react';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';

const Player = () => {
    const history = useHistory();
    const handleClick=()=> history.push("/question");
    let flag = false;
    useEffect(() => {
        console.log('Elemento Player en linea');
    }, []);

    function validateNick(event) {
        flag = event.length >= 3 ? true : false;
        var btn = document.getElementById("btnPlay");
        var msg = document.getElementById("msgPlay");

        if (flag) {
            btn.style.display = "block";
            msg.style.display = "none";
        } else {
            btn.style.display = "none";
            msg.style.display = "block";
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Quien Quiere ser millonario!</h3>
                </div>
            </div>

            <form>
                <div className="form-group">
                    <label>Nick</label>
                    <input onChange={(e) => validateNick(e.target.value)} type="name" className="form-control" id="playerName" placeholder="Enter nickname" />
                    <small id="playerName" className="form-text text-muted">Que inicie la diversion.</small>
                </div>
                <button onClick={handleClick} className="btn btn-primary" id="btnPlay" style={{ display: "none" }}>Jugar</button>
                <h4 id="msgPlay">Recuerda ingresar tu Nick</h4>
            </form>
        </div>
    );
}

export default Player;