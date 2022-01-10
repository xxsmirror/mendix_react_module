import { createElement } from "react";
import { Steps } from "antd";
import { ATpContainerProps } from "../../typings/ATpProps";
const { Step } = Steps;
const StepMir = (props: ATpContainerProps): any => {
    const current: any = props.nu?.value;
    const yo = (): any => {
        const list = [];
        let stepStatus = "null";

        if (props.data?.status === "available") {
            const len: any = props.data.items?.length;
            for (let i = 0; i < len; i++) {
                if (current < i) {
                    stepStatus = "Waiting";
                } else if (current > i) {
                    stepStatus = "Finished";
                } else {
                    stepStatus = "Progress";
                }
                list.push(
                    <Step title={stepStatus} description={props.adt?.get(props.data?.items![i]).value} key={i} />
                );
            }
        }
    };
    return (
        <Steps progressDot size="default" current={current}>
            {yo()}
        </Steps>
    );
};

export default StepMir;
