import React,{ Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';


class Header extends Component{
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={{backgroundImage:"linear-gradient(90deg, #0af, #0085ff)"}}
                >{this.props.title}</NavBar>

            </div>
        )
    }
}

export default Header;