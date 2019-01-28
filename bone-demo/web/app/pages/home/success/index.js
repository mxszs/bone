import React from "react";
import ReactDOM from "react-dom";
// 以CSS Modules方式引入404页样式
import { Empty } from 'antd'

class Stpesuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return (
            <div>
               <Empty
                    image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548682869533&di=cdcb1d53f172c23ec13bb86a8a1992a8&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F08%2F20%2F2157b8605c2db30.jpg"
                    description={<span>&nbsp;</span>}
                ></Empty> 
            </div>
        )
    }
}
export default Stpesuccess;
