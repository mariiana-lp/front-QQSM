import React, {useEffect} from 'react';
import {useContext} from 'react';

const Level = () => {

  useEffect(() =>{
    console.log('Elemento level en linea');
  }, []);  

  return (
      <div>
          <h1>Level</h1>
      </div>
  )
}

export default Level;