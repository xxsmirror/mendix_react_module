/**
 * This file was generated from ATp.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface ATpContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    nu?: EditableValue<Big>;
    data?: ListValue;
    adt?: ListAttributeValue<string>;
    timeChange?: ActionValue;
}

export interface ATpPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    nu: string;
    data: {} | { type: string } | null;
    adt: string;
    timeChange: {} | null;
}
