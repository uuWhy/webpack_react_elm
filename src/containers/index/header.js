import React, { Component } from 'react';
import { weather, address} from '../../data/data';

import Header from '../../components/index/header/header';

class Headersmart extends Component{
    constructor(){
        super();
        this.state={
            temperature:'',
            description:'',
            image_hash:'',
            address:'',
        }
    }

    componentWillMount(){
        this.setState({
            temperature:weather.temperature,
            description:weather.description,
            image_hash:weather.image_hash,
            address:address.address,
        })
    }

    render(){
        return(
            <div>
                <Header data={this.state}/>
            </div>
        )
    }
}

export default Headersmart;