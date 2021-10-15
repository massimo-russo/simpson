import React, { Component } from 'react'

// function simpson (props) {
//         return(
//             <div className='cardContent'> 
//             <li> Name: {props.name}</li>
//             <br></br>
//             <img 
//                 src={require(`../img/simpsonimg/${props.name}.svg`)}
//                 style={{height:60}} 
//             />
//             <br></br>
//             <br></br>
//             <li> Age: {props.eta}</li> 
//             <br></br>                
//         </div>
//         );
// }
export class Simpson extends Component{
     
        render(){
            return(
                <div className='cardContent'> 
                    <li> Name: {this.props.name}</li>
                     <br></br>
                  <img 
                        src={require(`../img/simpsonimg/${this.props.name}.svg`)}
                        style={{height:60}} 
                    />
                <br></br>
                <br></br>
                <li> Age: {this.props.eta}</li> 
                <br></br>          
                <Button />      
                </div>
            )
        }
}

export default Simpson
