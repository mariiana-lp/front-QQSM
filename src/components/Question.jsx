import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function Question () {
    const {name} = useParams()
    const url ='http://localhost:8080/api/'
    const [todos, setTodos] = useState()
    const [question, setQuestion] = useState()
    const extractQuestion = async ()=>{
        const response = await fetch(url+'questions/1')
        console.log(response)
        const respJson = await response.json()
        setTodos(respJson)
        console.log(respJson)
        chooseQuestion()
    }
    useEffect(() => {
        console.log('Elemento question en linea');
        extractQuestion()
        saveDataPlayer()        
    }, []);

    function chooseQuestion(){
        var selected = Math.floor(Math.random() * (5 - 0) + 1);
        console.log("Quedo la pregunta: "+selected);
    }

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
 
            let res = fetch(url+'player',config)
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