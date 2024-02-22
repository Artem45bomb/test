import React from "react";
import './OperationModule.css';
interface OperationModuleProps{
    children: React.ReactNode
}
export  default function OperationModule({children}:OperationModuleProps){
    return(
        <div className={"module-operation"}>
            {children}
        </div>
    );
}