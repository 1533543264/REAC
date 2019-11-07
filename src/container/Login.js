import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                用户名 <input type="text" placeholder="" name="username1"/>
                <p></p>
                密码<text></text><input type="text" placeholder="" name="username2"/>
                <p></p>
                <button>登录</button>
            </div>
        )
    }
}
