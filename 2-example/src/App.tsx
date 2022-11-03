import React from 'react';
// import logo from './images/z3844819177757_c24a0388b05eefef6a2dc675eec22ece.jpg';
// import './App.css';  
import 'bootstrap/dist/css/bootstrap.min.css'
import './features/ItemUser'
import ItemUser from './features/ItemUser';
import './features/ItemUserClass'
import ItemUserClass from './features/ItemUserClass';
import './homework/Session2/baitap1/BaiTap1'
import BaiTap1 from './homework/Session2/baitap1/BaiTap1';
import './homework/Session2/baitap1/BaiTap1.css'
import BaiTap2 from './homework/Session2/baitap2/BaiTap2';
import BaiTap3 from './homework/Session2/baitap3/BaiTap3';

interface IUser {
    // ava: string;
    h1: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;

}

function App() {
const arr: Array<IUser> = [
    // bai tap 1
  // {
  //   // ava: './baitap1/1.jpg' ,
  //   h1: 'Clothing & Apparel',
  //   p1: 'Accessories',
  //   p2: "Bags",
  //   p3: "Kid's Fashion", 
  //   p4: "Mens", 
   
  // },
  // bai tap 2
  // {
  //   h1: 'YOUNG SHOP',
  //   p1: 'Samsung UHD TV 24inch',
  //   p2: "$599",
  //   p3: "fa-regular fa-star",
  //   p4: "$599",
    
  // },
  //bai tap 3
  // {
  //   h1: 'Technology',
  //   p1: 'Harman Kadon Onyx Studio Mini, Reviews & Experiences',
  //   p2: "Feb 21, 2021 by drfurion",
  //   p3: '',
  //   p4: "",
    
  // },
  
];
return (
  <div className="nen">
    <div className="main">
      {/* <h1 className="head">My Information</h1> <hr/> */}
      {arr?.map((user, index)=>{
        return (
          // <div className="bg" key={user.id}>
          //   <div className="form">
          //   {/* <img className='img' src={user.ava} alt=""/> */}
          //   </div>
            
           //   <p><img src={user.ava}  className='img' alt="" /></p>
          //   <p>No : {user.id}</p>
          //   <p>Name : {user.name}</p>
          //   <p>Age : {user.age}</p>
          //   <p>Address : {user.address}</p>
          //   <hr></hr>
            
          // </div>
          // <ItemUserClass key={index} userProps={user} /> 
        //   <ItemUser key={index} userProps={user} /> 
        // <BaiTap1 key={index} userProps={user} />
        // <BaiTap2 key={index} userProps={user} />
        <BaiTap3 key={index} userProps={user} />
        );
      })}
    </div>
  </div>
);
}



export default App;
