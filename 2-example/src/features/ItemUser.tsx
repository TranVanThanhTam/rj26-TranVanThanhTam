import React from 'react'
import '../App';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IUser {
    id: number;
    age: number;
    name: string;
    address: string;
    ava: string;
  }     

interface IProps {
    userProps: IUser;
}
function ItemUser(props: IProps) {
    const {userProps} = props; 
  return (
    <div className="container">
           <div className="form">
           {/* <img className='img' src={user.ava} alt=""/> */}
            </div>
            
          <p><img src={userProps.ava}  className='img' alt="" /></p>
          <p>No : {userProps.id}</p>
          <p>Name : {userProps.name}</p>
          <p>Age : {userProps.age}</p>
          <p>Address : {userProps.address}</p>
          <hr></hr>
            
          </div>
            
  )
}

export default ItemUser