import { Component, ReactNode, createElement } from "react";
import { ATpContainerProps } from "../typings/ATpProps";
import "./ui/ATp.css";
import "antd/dist/antd.css";
import { Divider } from "antd";
import Timep from "./components/TimPic";
import StepMir from "./components/StepMir";

export default class ATp extends Component<ATpContainerProps> {
    render(): ReactNode {
        return (
            <div>
                <Timep name="timNir" class="timp-mir" />
                <Divider />
                <StepMir name="stepMir" class="timp-mir" />
            </div>
        );
    }
}
