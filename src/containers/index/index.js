import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Headersmart from './header';
import Search from '../../components/index/search/search';
import Hotsmart from './hot';
import Bannersmart from './banner';

class Index extends Component{
    render(){
        return(
            <div>
                <Headersmart/>
                <Search/>
                <Hotsmart/>
                <Bannersmart/>
            </div>
        )
    }
}
export default Index;