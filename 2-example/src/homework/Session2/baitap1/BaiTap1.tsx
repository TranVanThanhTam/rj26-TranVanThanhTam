import React, { Component } from 'react'
import logo from './1.jpg'



interface IUser {
  // ava: string;
  h1: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  

}  


interface Props { 
    userProps: IUser;
}


class baitap1 extends Component<Props> {
  state = {}

  render() {
    return (
        <div className="container">
        <div className="form">
        <img  src={logo} alt=""/>
         </div>
        <div  className='main'>
       {/* <p><img src={this.props.userProps.ava}  className='img' alt="" /></p> */}
       <h1>{this.props.userProps.h1}</h1>
       <p>{this.props.userProps.p1}</p>
       <p>{this.props.userProps.p2}</p>
       <p>{this.props.userProps.p3}</p>
       <p>{this.props.userProps.p4}</p>
       </div>
       </div>

    )
  }
}

export default baitap1