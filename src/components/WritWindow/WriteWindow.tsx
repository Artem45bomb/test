import React, {useContext} from "react";
import "./WriteWindow.css"
import {PanelModal, PanelValue} from "../../context/Panel.value";

export  default function WriteWindow(){
    const {changeValue,value} = useContext(PanelValue);
    return(
        <input type={"text"} value={value} onChange={(e)=> changeValue(e)}/>
    );
}
