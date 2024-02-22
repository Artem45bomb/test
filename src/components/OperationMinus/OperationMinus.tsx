import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export default function OperationMinus(){
    const {minus,operation} = useContext(PanelValue);
    return(
        <button className={operation === '-' ? "active operation" : "operation"} onClick={minus}>-</button>
    );
}