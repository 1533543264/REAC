import React,{Component} from "react";
import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import RounterIndex from "../router/router";
import Login from '../container/Login';
import Api from '../container/Api';
import Header from '../components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
export default class App extends Component {
    render(){
        return (
            <Router>
            <div>
                <Header/>
                <div className='main'>
                    <div className="content">

                        <Route path='/api' component={Api} />

                        <Route path='/login' component={Login} />
                    </div>
                    <div className="sider">
                        <p>CNode:Node.js专业中文社区</p>
                        <p>您可以登录或注册，也可以</p>
                        <button>通过 GitHub 登录</button>
                        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                        <p></p>
                        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""/>
                        <p></p>
                        <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""/>

                    </div>
                </div>
            </div>
       
           <div className="wrap">
               
               <MainHeader />
               <main className="main">
                    <RounterIndex />
               </main>
                <MainFooter/>
           </div> 
           </Router>
        );
    }
}