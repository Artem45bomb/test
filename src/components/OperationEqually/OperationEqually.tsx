import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export default function OperationEqually(){
    const {equally} =useContext(PanelValue);
    return(
        <button onClick={equally} className={"operation"}>=</button>
    );
}