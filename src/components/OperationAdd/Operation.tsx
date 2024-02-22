import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export  default function OperationAdd(){
    const {add,operation} = useContext(PanelValue);

    return(
        <>
            <button className={operation === '+'? "active operation" : "operation"} onClick={add}>+</button>
        </>
    );
}