import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export  default function OperationDivision(){
    const {operation,division} = useContext(PanelValue);
    return(
        <button className={operation==='/'? "active operation" : "operation"} onClick={division}>/</button>
    );
}