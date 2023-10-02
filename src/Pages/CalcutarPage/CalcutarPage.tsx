import React from "react";
import './CalcutarPage.css';
import PanelCalculator from "../../components/PanelCalculator/PanelCalculator";
import WriteWindow from "../../components/WritWindow/WriteWindow";
import PanelOperation from "../../components/PanelOperation/PanelOperation";
import OperationAdd from "../../components/OperationAdd/Operation";
import OperationModule from "../../components/OperationModule/OperationModule";
import OperationEqually from "../../components/OperationEqually/OperationEqually";
import OperationClean from "../../components/OperationClean/OperationClean";
import OperationMinus from "../../components/OperationMinus/OperationMinus";
import OperationDivision from "../../components/OperationDivision/OperationDivision";
import Number from "../../components/Number/Number";
import PanelNumber from "../../components/PanelNumber/PanelNumber";
import OperationMultiply from "../../components/OperationMultiply/OperationMultiply";
import OperationBack from "../../components/OperationBack/OperationBack";

export default function CalcutarPage(){
    let num:number[] = [0,1,2,3,4,5,6,7,8,9];
    return(
       <PanelCalculator>
           <WriteWindow/>
           <PanelOperation>
               <PanelNumber>
                   {num.map((e:number) => {
                       return <Number key={e} text={e} />
                   })}
                   <OperationBack/>
               </PanelNumber>
               <OperationModule>
                   <OperationAdd/>
                   <OperationMinus/>
                   <OperationDivision/>
                   <OperationMultiply/>
                   <OperationEqually/>

                   <OperationClean/>
               </OperationModule>
           </PanelOperation>
       </PanelCalculator>
    );
}
