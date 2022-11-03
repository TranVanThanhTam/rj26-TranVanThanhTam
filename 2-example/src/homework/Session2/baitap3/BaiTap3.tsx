import React, { Component } from 'react'
import './BaiTap3.css'
import Logo3 from './3.jpg'

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

class BaiTap3 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='div1'>
                <img src={Logo3} alt="" />
                <div className='div2'>
                    <p className='title'>{this.props.userProps.h1}</p>
                    <p className='topic'>{this.props.userProps.p1}</p>
                    <p className='coppyright'>{this.props.userProps.p2}</p>
                </div>
            </div>
        )
    }
}

export default BaiTap3