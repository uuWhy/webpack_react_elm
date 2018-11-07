import React,{ Component } from 'react';
import { hot_data } from "../../data/data";
import {shuffle} from "../../data/shuffle";
import Hot from '../../components/index/hot/hot';

class Hotsmart extends Component {

    constructor(){
        super();
        this.state={
            hot_data:[]
        }
    }

    componentWillMount(){
        if(hot_data){
            this.setState({
                hot_data:shuffle(hot_data)
            })
        }

    }

    render() {
        return (
            <div>
                <Hot hot_data={this.state.hot_data}/>
            </div>
        )
    }
}
export default Hotsmart;