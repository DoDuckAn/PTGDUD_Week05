import { useReducer, useState } from "react";

const BaiUseReducer=()=>{
    const [num1,setNum1]=useState(0);
    function handleChangeNum1(e){
        setNum1(e.target.value)
    }
    function handleChangeNum2(e){
        setNum2(e.target.value)
    }
    const [num2,setNum2]=useState(0);
    const counterReducer=(state,action)=>{
        switch (action) {
            case '+':
                return ++state;
            case '-':
                return --state;
            default:
                break;
        }
    }
    const calReducer=(state,action)=>{
        console.log(action);
        switch (action) {
            case '+':
                return parseFloat(num1)+parseFloat(num2);
            case '-':
                return num1-num2;
            case '*':
                return num1*num2;
            case '/':
                return num1/num2;    
            default:
                break;
        }
    }
    const [counter,dispatchCounter]=useReducer(counterReducer,0);
    function handleIncCounter(){
        dispatchCounter('+');
    }

    function handleDecCounter(){
        dispatchCounter('-');
    }
    const [result,dispatchResult]=useReducer(calReducer,0);
    function handleSum(){
        dispatchResult('+');
    }
    function handleSubtract(){
        dispatchResult('-');
    }
    function handleMultipler(){
        dispatchResult('*');
    }
    function handleDivide(){
        dispatchResult('/');
    }
    return(
        <>
            <div className="border">
                <h1>UseReducer1</h1>
                <div className="flex m-5 justify-around items-center">
                    <p>{counter}</p>
                    <button onClick={handleIncCounter}>+</button>
                    <button onClick={handleDecCounter}>-</button>
                </div> 
            </div>

            <div className="border mt-2">
                <h1>UseReducer2</h1>
                <div className=" flex flex-col m-5 justify-center items-center">
                    <input type='number' onChange={handleChangeNum1} className="border-2"/>
                    <input type='number' onChange={handleChangeNum2} className="border-2"/>
                    <div>
                        <button onClick={handleSum}>+</button>
                        <button onClick={handleSubtract}>-</button>
                        <button onClick={handleMultipler}>*</button>
                        <button onClick={handleDivide}>/</button>
                    </div>
                    <p>result:{result}</p>
                </div> 
            </div>
        </>
    )
};

export default BaiUseReducer;

