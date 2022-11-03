import React from 'react';
// import logo from './images/z3844819177757_c24a0388b05eefef6a2dc675eec22ece.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './baitap1/BaiTap1'
import BaiTap1 from './baitap1/BaiTap1';
interface IUser {
  ava: string;
  h1: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  

}

function App() {
const arr: Array<IUser> = [
    {
        ava: './baitap1/1.jpg' ,
        h1: 'Clothing & Apparel',
        p1: 'Accessories',
        p2: "Bags",
        p3: "Kid;s Fashion", 
        p4: "Mens", 
       
      },

];
return (
  <div className="nen">
    <div className="main">
      {/* <h1 className="head">{user.h1}</h1> <hr/> */}
      {arr?.map((user, index)=>{
        return (
        //   <div className="bg" key={user.id}>
        //     <div className="form">
        //     {/* <img className='img' src={user.ava} alt=""/> */}
        //     </div>
        
        //     <p>No : {user.p1}</p>
        //     <p>Name : {user.p2}</p>
        //     <p>Age : {user.p3}</p>
        //     <p>Address : {user.p4}</p>
        //     <hr></hr>
            
        //   </div>
          <BaiTap1 key={index} userProps={user} /> 
         

        );
      })}
    </div>
  </div>
);
}


export default App;
