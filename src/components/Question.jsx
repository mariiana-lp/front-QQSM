import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Question = () => {
    useEffect(() => {
        console.log('Elemento question en linea');
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Quien Quiere ser millonario!</h3>
                </div>
            </div>
        </div>
    )
}

export default Question;