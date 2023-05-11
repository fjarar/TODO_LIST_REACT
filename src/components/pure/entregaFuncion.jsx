import React, { useEffect, useState } from 'react';
//import ‘../../styles/clock.scss’;

const EntregaFuncion = (props) => {
    const [fecha, setFecha] = useState(new Date());

    const [age, setAge] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setFecha(new Date());
            setAge(age+1)
        }, 1000);
    }, [fecha, age]);


    return (        
        <div>
            <hr />
            <h2>
            Hora Actual: {fecha.toLocaleTimeString()}
            </h2>
            <h3>{ props.name } { props.lastName }</h3>
            <h1>Edad: {age} </h1>
         </div>
    );
}

export default EntregaFuncion;