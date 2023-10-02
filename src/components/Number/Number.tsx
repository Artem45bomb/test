import React, {useContext} from "react";
import {PanelValue} from "../../context/Panel.value";
import './Number.css';

interface Number{
    text:number
}
export  default  function Number({text}:Number){
    const  {addNumber} = useContext(PanelValue);
    return(<button className={"number"} onClick={() => addNumber(text)}>{text}</button>);
}