import React, { useEffect } from 'react';
import { useContext } from 'react';

const Player = () => {

    const flag = false;
    useEffect(() => {
        console.log('Elemento Player en linea');
    }, []);

    function validateNick(event) {
        console.log("Tenemos: " + event);
        flag = event.length >= 3 ? true : false;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Quien Quiere ser millonario!</h3>
                </div>
            </div>

            <form>
                <div class="form-group">
                    <label for="playerName">Nick</label>
                    <input onChangeText={(e) => validateNick(e.target.value)} type="name" class="form-control" id="playerName" placeholder="Enter nickname" />
                    <small id="playerName" class="form-text text-muted">Que inicie la diversion.</small>
                </div>
                {
                   flag == true ? 
                   <button type="submit" class="btn btn-primary">Jugar</button> 
                   : <h1>Recuerda ingresar tu Nick</h1>
                }
                
            </form>
        </div>
    );
}

export default Player;