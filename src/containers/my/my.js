import React,{ Component }  from 'react';
import Header from '../../components/header/header';
import MyunLogin from '../../components/my/myunLogin/myunLogin';


class My extends Component{
    render(){
        const {fromDashboard} = this.props.location.state;//this.props.location 上一个页面跳转传过的参数
        console.log(fromDashboard);
        return(
            <div>
                <Header title={'我的'}></Header>
                <MyunLogin/>
            </div>
        )
    }
}

export default My;