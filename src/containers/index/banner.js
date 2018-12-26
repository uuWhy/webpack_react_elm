import React,{Component} from 'react';
import Banner from '../../components/index/banner/banner';
import {bannerData} from "../../data/data";

class Bannersmart extends Component{
    constructor(){
        super();

        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        this.setState({
            data:bannerData[0].entries
        })
    }

    render(){
        return(

            <Banner data={this.state.data}/>
        )
    }

}

export default Bannersmart;