import React,{ Component } from 'react';
import { SearchBar } from 'antd-mobile';
import './search.css';


class Search extends Component{
    constructor(){
        super();
        this.state={
            support:false,
            css:null,
            height:0
        }
    }

    componentDidMount(){
        if (CSS.supports("position","sticky")||CSS.supports("position","-webkit-sticky")){
            //支持 sticky，顶部吸附
            this.setState({
                support:true
            })
        }else {
            let offsetY = 40;
            this._scrollTop = this._scrollTop.bind(this,offsetY);
            document.addEventListener('scroll',this._scrollTop);
        }
    }

    componentWillMount(){
        document.removeEventListener('scroll',this._scrollTop)
    }

    _scrollTop(){
        let css = null;
        let height = this.searchDOM.offsetHeight;
    }

    render(){
        return(
            <div className='search_Box' style={this.state.support?{position:'sticky',top:"-1px",zIndex:"999"}:{height:this.state.height===0?null:this.state.height}}>
                <div ref={(div)=>{this.searchDOM=div;}} className='search' style={this.state.support?null:this.state.css}>
                    <SearchBar placeholder="搜索商家、商品名称" ref={ref => this.autoFocusInst = ref} />
                </div>
            </div>
        )
    }
}

export default Search;