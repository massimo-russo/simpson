import React from 'react'

function Simpson(props) {
    return (
        <div className='cardContent'>
            <li>{props.name}</li>
            <img src= {require(`../img/${props.name}.svg`).default}  alt="" style={{height:60}} />
            <li>età:{props.eta}</li>
            <button onClick={this}>Nascondi</button>
        </div>
    )
}

export default Simpson
