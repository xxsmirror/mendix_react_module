import { Button, Col, Row } from "antd";
import { createElement, useState } from "react";
import { ATpContainerProps } from "../../typings/ATpProps";

const StateCount = (props: ATpContainerProps) => {
    const [count, setcount] = useState(0);

    return (
        <Row>
            <Col>
                <h1>数字:{count}</h1>
            </Col>
            <Col>
                <Button onClick={() => setcount(count + 1)}>增加</Button>
            </Col>
        </Row>
    );
};

export default StateCount;
