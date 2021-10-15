import React, { Component } from 'react'
import simpsons from '../dati/simpsonData.json'
import Simpson from './Simpson'

export class SimpsonList extends Component {
    hideHandler = () =>{
            
    }
    render() {
        return (
            <div className="SimpsonContainer">
                {simpsons.map( simpson => (
                     <Simpson
                        key={simpson.id}
                        id={simpson.id}
                        name={simpson.name}
                        eta={simpson.age}
                     />
                 ))}
                
            </div>
        )
    }
}

export default SimpsonList