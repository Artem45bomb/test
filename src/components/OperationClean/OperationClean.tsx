import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export  default function OperationClean(){
    const {clean} = useContext(PanelValue);
    return(
        <button onClick={clean} className={"operation"}>C</button>
    );
}