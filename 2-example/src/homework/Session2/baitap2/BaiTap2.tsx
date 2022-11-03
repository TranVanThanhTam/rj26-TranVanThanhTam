import React, { Component } from 'react'
import Logo2 from './2.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import './BaiTap2.css'



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


type State = {}

class BaiTap2 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='div1'>
                <img src={Logo2} alt="" />
                <div className='div2'>
                    <h6>{this.props.userProps.h1}</h6>
                </div>
                <div className='div3'>
                    <p className='name'>{this.props.userProps.p1}</p>
                    <p className='money'>{this.props.userProps.p2}</p>
                </div>

            </div>
        )
    }
}

export default BaiTap2