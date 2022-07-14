import { useState } from "react";

const Pad = () => {
    const [calc, setCalc] = useState("");
    const [result,setResult] = useState("");

    const ops = ["/","*","+","-","."];

    const updateCalc = (value) => {
        if((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))){
            return;
        }
        setCalc(calc + value);

        if(!ops.includes(value) ){
            setResult(eval(calc + value).toString())
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }


    const del = () => {
        if(calc === ""){
            return;
        }
        const value = calc.slice(0, -1)

        setCalc(value);
    }


    const removeValue = () => {
        setCalc("");
        setResult("");
    } 
    
    return (
    <>
        <div className="casio-dani">CASIO</div>
        <div className="screen">
            <div className="text-screen">
            {calc || "0"}{result ? <span className="eval">{result}</span> : ""}

            </div>
        </div>

        <div className="container">
            <div className="btn option">
            <button className="text textOption" onClick={() => removeValue()}>
                AC
            </button>
            </div>
            <div className="btn option">
            <button className="text textOption del" onClick={del}>
                DEL
            </button>
            </div>
            <div className="btn option">
            <button className="text textOperator">
                %
            </button>
            </div>
            <div className="btn operator">
            <button className="text textOperator" onClick={() => updateCalc("/")}>
                /
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("7")}>
                7
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("8")} >
                8
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("9")} >
                9
            </button>
            </div>
            <div className="btn operator">
            <button className="text textOperator" onClick={() => updateCalc("*")}>
                x
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("4")} >
                4
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("5")} >
                5
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("6")} >
                6
            </button>
            </div>
            <div className="btn operator">
            <button className="text textOperator" onClick={() => updateCalc("-")}>
                -
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("1")} >
                1
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("2")} >
                2
            </button> 
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("3")} >
                3
            </button>
            </div>
            <div className="btn operator btn-plus">
            <button className="text-plus" onClick={() => updateCalc("+")}>
                +
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={() => updateCalc("0")}>
                0
            </button>
            </div>
            <div className="btn number"> 
            <button className="text textNumber" onClick={() => updateCalc(".")}>
                .
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" onClick={calculate}>
                =
            </button>
            </div>
        </div>

    </>    
    );

};


export default Pad;
