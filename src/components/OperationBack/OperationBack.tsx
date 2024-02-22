import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";

export  default function OperationBack(){
    const {back} = useContext(PanelValue);
    return(<button className={"number"} onClick={back}>{'<'}</button>)
}