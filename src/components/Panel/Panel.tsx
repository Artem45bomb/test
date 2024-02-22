import React from "react";

interface PanelProps{
    children: React.ReactNode;
}

export  default function Panel({children}:PanelProps){
    return(
        <>
            {children}
        </>
    );
}