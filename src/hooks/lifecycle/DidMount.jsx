/* Ejemplo de uso del metodo
de ciclo de vida en componente clae ye l hook  de ciclo de vida
en componente  */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que se sw agregue al DOM(renderice)');
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    useEffect(()=>{
        console.log('Comportamiento antes de que sea agregago al dom (renderice)')
    })
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

