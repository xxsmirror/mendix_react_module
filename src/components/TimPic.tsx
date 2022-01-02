import { createElement } from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

interface Props {
    onOk?: () => void;
}
const Timep = ({ onOk }: Props): any => {
    return (
        <Space>
            <DatePicker size="large" showTime showToday onOk={onOk} />
            <RangePicker />
        </Space>
    );
};

export default Timep;
