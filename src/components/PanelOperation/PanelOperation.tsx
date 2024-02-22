import React from "react";
import './PanelOperation.css';
interface PanelOperationProps{
    children:React.ReactNode
}

export default function PanelOperation({children}:PanelOperationProps){
    return(
        <div className={"panel-operation"}>
            {children}
        </div>
    );
}