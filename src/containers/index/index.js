import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Headersmart from './header';
import Search from '../../components/index/search/search';
import Hotsmart from './hot';

class Index extends Component{
    render(){
        return(
            <div>
                <Headersmart/>
                <Search/>
                <Hotsmart/>
            </div>
        )
    }
}
export default Index;