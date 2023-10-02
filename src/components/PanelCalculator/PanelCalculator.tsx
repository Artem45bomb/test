import React from "react";
import './PanelCalculator.css';
interface PanelProps{
    children: React.ReactNode;

}

export  default function PanelCalculator({children}:PanelProps){
    return(
        <div className={"panel-calculator"}>
            {children}
        </div>
    );
}
