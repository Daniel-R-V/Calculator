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
        <div className="casio">CASIO</div>
        <div className="screen">
            <div className="text-screen">
            {calc || "0"}{result ? <span className="eval">{result}</span> : ""}

            </div>
        </div>

        <div className="container">
            <button className="btn option" onClick={() => removeValue()}>
                AC
            </button>
            <button className="btn option" onClick={del}>
                DEL
            </button>
            <button className="btn operator">
                %
            </button>
            <button className="btn operator" onClick={() => updateCalc("/")}>
                /
            </button>
            <button className="btn number" onClick={() => updateCalc("7")}>
                7
            </button>
            <button className="btn number" onClick={() => updateCalc("8")} >
                8
            </button>
            <button className="btn number" onClick={() => updateCalc("9")} >
                9
            </button>
            <button className="btn operator" onClick={() => updateCalc("*")}>
                x
            </button>
            <button className="btn number" onClick={() => updateCalc("4")} >
                4
            </button>
            <button className="btn number" onClick={() => updateCalc("5")} >
                5
            </button>
            <button className="btn number" onClick={() => updateCalc("6")} >
                6
            </button>
            <button className="btn operator" onClick={() => updateCalc("-")}>
                -
            </button>
            <button className="btn number" onClick={() => updateCalc("1")} >
                1
            </button>
            <button className="btn number" onClick={() => updateCalc("2")} >
                2
            </button> 
            <button className="btn number" onClick={() => updateCalc("3")} >
                3
            </button>
            <button className="btn btn-plus" onClick={() => updateCalc("+")}>
                +
            </button>
            <button className="btn number" onClick={() => updateCalc("0")}>
                0
            </button>
            <button className="btn number" onClick={() => updateCalc(".")}>
                .
            </button>
            <button className="btn number" onClick={calculate}>
                =
            </button>
        </div>

    </>    
    );

};


export default Pad;
