import React, { Component } from "react";
// 以CSS Modules方式引入Home页样式
import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css'
import Stepone from './step-one'
import Steptwo from './step-two'
import Stpesuccess from './success'

import style from "./index.css";
// 引入图片
import LOGO from "./LOGO.png";

// 导出Home页组件
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
    const current = this.state.current - 1;
    this.setState({ current });
    }
    render(){
        const steps = [{
            title: 'First',
            content: <Stepone />,
          }, {
            title: 'Second',
            content: <Steptwo />,
          }, {
            title: 'Success',
            content: <Stpesuccess />,
          }];
        const { current } = this.state;
        const Step = Steps.Step;
        return (
            <div className={style.container}>
                <p className={ style.welcome }></p>
                <div className={style.stepContainer}>
                    <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className={style.stepsContent}>{steps[current].content}</div>
                        <div className={style.stepSaction}>
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>确定</Button>
                        }
                        {
                            current > 0
                            && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            上一步
                            </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}