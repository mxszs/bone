import React from "react";
import ReactDOM from "react-dom";
// 以CSS Modules方式引入404页样式
import { Form, Input } from 'antd'

class Stpetwo extends React.Component {
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
                        label="年龄"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="性别"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 12 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="生日"
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
export default Stpetwo;
