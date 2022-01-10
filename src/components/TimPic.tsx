import { createElement } from "react";
import { DatePicker, Space } from "antd";
import { ATpContainerProps } from "../../typings/ATpProps";

const { RangePicker } = DatePicker;

const Timep = (props: ATpContainerProps): any => {
    return (
        <Space>
            <DatePicker size="large" showTime showToday onOk={props.timeChange?.execute} />
            <RangePicker />
        </Space>
    );
};

export default Timep;
