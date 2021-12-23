import React, { useEffect } from 'react';
import { useContext } from 'react';

const Player = () => {

    useEffect(() => {
        console.log('Elemento Player en linea');
    }, []);

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
                    <input type="name" class="form-control" id="playerName" placeholder="Enter nickname"/>
                        <small id="playerName" class="form-text text-muted">Que inicie la diversion.</small>
                </div>
            </form>
        </div>
    );
}

export default Player;