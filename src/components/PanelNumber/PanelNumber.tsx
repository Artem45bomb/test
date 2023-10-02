import React from "react";

interface PanelNumberProps{
    children:React.ReactNode
}

export  default function PanelNumber({children}:PanelNumberProps){
    return(<div className={"panel-number"}>{children}</div>)
}