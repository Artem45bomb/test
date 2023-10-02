import React, {createContext, useContext, useState} from "react";

interface IPanelValue{
    value: number,
    valueStore: number,
    valueEnter: number,
    operation: string,
    changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
    add: () => void,
    equally: () => void,
    clean: () => void,
    minus: () => void,
    division: () => void,
    addNumber: (elem:number) => void,
    multiply: () => void,
    back: () => void,
}

export  const  PanelValue = createContext<IPanelValue>({
    value: 0,
    valueStore: 0,
    valueEnter: 0,
    operation: '',
    changeValue: (event:React.ChangeEvent<HTMLInputElement>) => {},
    add: () => {},
    equally: () => {},
    clean:() => {},
    minus: () => {},
    division: () => {},
    addNumber: (elem: number) => {},
    multiply: () => {},
    back:() => {},
});

export const PanelModal = ({children}:{children:React.ReactNode}) =>{
    const [value,setValue] = useState(0);
    const [valueEnter,setValueEnter] =useState(0);
    const [valueStore,setValueStore] =useState(0);
    const [operation,setOperation] = useState('');
    const [active,setActive] = useState('');
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(event.target.value)){
            setValue(Number(event.target.value));
        }


    }

    const op = (event:string) => {
        setValueStore(value);
        setOperation(event);
        setValue(0);
    }

    const  add = () => {
        op('+');
    }

    const equally = () => {
        switch (operation){
            case '+': {
                setValue(valueStore + value);
                setOperation('');
                break;
            }
            case '-': {
                setValue(valueStore - value);
                setOperation('');
                break;
            }
            case '/': {
                setValue(valueStore / value);
                setOperation('');
                break;
            }
            case '*': {
                setValue(valueStore * value);
                setOperation('');
                break;
            }
        }

    }

    const clean = () => {
        setOperation('');
        setValueStore(0);
        setValue(0);
    }

    const minus = () => {
        op('-');
    }
    const division = () => {
        op('/');
    }

    const addNumber = (elem:number) => {
        setValue(Number(String(value) + elem));
    }

    const multiply = () =>{
        op('*');
    }

    const back = () =>{
        setValue(Number(String(value).slice(0,String(value).length - 1)));
    }

    return(
        <PanelValue.Provider value={{changeValue,value,add,valueEnter,valueStore,equally,operation,clean,minus,division,addNumber,multiply,back}}>
            {children}
        </PanelValue.Provider>
    )

}
