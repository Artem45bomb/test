import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export default function OperationMultiply(){
    const {multiply,operation} = useContext(PanelValue);
    return(<button className={operation ==="*"? "active operation":"operation"} onClick={multiply}> *</button>);
}