import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function Question () {
    const {name} = useParams()

    useEffect(() => {
        console.log('Elemento question en linea');
        saveDataPlayer()

    }, []);

     function saveDataPlayer() {
         console.log("estoy guardando")
        try{
            let config ={
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name:name, score:0})
            }
 
            let res = fetch('http://localhost:8080/api/player',config)
            let json = res.json()
            console.log(json)
        }catch(error){
            console.error();
        } 
     }

    return (
        <>
        <h4>Esta jugando: {name}</h4>
            <Header></Header>

        </>
    )
}

export default Question;