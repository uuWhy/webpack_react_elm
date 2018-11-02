import React,{ Component }  from 'react';
import Header from '../../components/header/header';
import MyunLogin from '../../components/my/myunLogin/myunLogin';


class My extends Component{
    render(){
        return(
            <div>
                <Header title={'我的'}></Header>
                <MyunLogin/>
            </div>
        )
    }
}

export default My;