import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Find from './find/find';
import Order from './order/order';
import My from './my/my';
import Index from './index/index';

import Login from '../components/login/login'

import Footer from '../components/footer/footer'


class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Index}/>
                    <Route path='/find' component={Find}/>
                    <Route path='/my' component={My}/>
                    <Route path='/order' component={Order}/>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route  component={Footer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}


export default App;