import React from "react";
import ReactDOM from "react-dom";
// 以CSS Modules方式引入404页样式
import { Form, Input } from 'antd' 
import style from "./index.css";

class Stpeone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return (
            <div>
                <Form>
                    <Form.Item
                        label="姓名"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="昵称"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Stpeone;
