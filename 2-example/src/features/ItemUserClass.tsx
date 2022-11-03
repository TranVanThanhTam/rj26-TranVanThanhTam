import React, { Component } from 'react'


interface IUser {
    id: number;
    age: number;
    name: string;
    address: string;
    ava: string;
  }     


interface Props { 
    userProps: IUser;
}

class ItemUserClass extends Component<Props> {
  render() {
    return (
        <div className="container">
        <div className="form">
        {/* <img className='img' src={user.ava} alt=""/> */}
         </div>
         
       <p><img src={this.props.userProps.ava}  className='img' alt="" /></p>
       <p>No : {this.props.userProps.id}</p>
       <p>Name : {this.props.userProps.name}</p>
       <p>Age : {this.props.userProps.age}</p>
       <p>Address : {this.props.userProps.address}</p>
       <hr></hr>
         
       </div>
    )
  }
}

export default ItemUserClass