import { Component, ReactNode, createElement } from "react";
import { ATpContainerProps } from "../typings/ATpProps";
import "./ui/ATp.css";
import "antd/dist/antd.css";
import { Steps, Divider } from "antd";
import Timep from "./components/TimPic";

const { Step } = Steps;

export default class ATp extends Component<ATpContainerProps> {
    cur = (): any => {
        const current = this.props.nu?.value;
        return current;
    };

    yo = (): any => {
        const list = [];
        let stepStatus = "Finished";
        const current = this.cur();
        if (this.props.data?.status === "available") {
            const len: any = this.props.data.items?.length;
            for (let i = 0; i < len; i++) {
                if (current === i) {
                    stepStatus = "In Progress";
                } else if (current > i) {
                    stepStatus = "Finished";
                } else {
                    stepStatus = "Waiting";
                }
                list.push(
                    <Step
                        title={stepStatus}
                        description={this.props.adt?.get(this.props.data?.items![i]).value}
                        key={i}
                    />
                );
            }
        }
        return list;
    };
    render(): ReactNode {
        const onOk = this.props.timeChange?.execute;
        return (
            <div>
                <Steps progressDot size="default" current={this.cur()}>
                    {this.yo()}
                </Steps>
                <Divider />
                <Timep onOk={onOk} />
            </div>
        );
    }
}
