import { useState } from "react";

const Pad = () => {
    const [display, setDisplay] = useState(0);

    const selectNumber = (e) => {
        e.preventDefault();
        setDisplay(e.target.value);
    };

    const removeValue = () => {
        let clear = 0;
        setDisplay(clear);
    } 
    
    return (
    <>
        <div className="casio-dani">CASIO</div>
        <div className="screen">
            <p className="text-screen">{display}</p>
        </div>

        <div className="container">
            <div className="btn option">
            <button className="text textOption" value='AC' onClick={removeValue} >
                AC
            </button>
            </div>
            <div className="btn option">
            <button className="text textOption" value='+/-'>
                +/-
            </button>
            </div>
            <div className="btn option">
            <button className="text textOption" value='%'>
                %
            </button>
            </div>
            <div className="btn operator">
            <button className="text textOperator" value='/'>
                /
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='7' onClick={selectNumber} >
                7
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='8' onClick={selectNumber} >
                8
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='9' onClick={selectNumber} >
                9
            </button>
            </div>
            <div className="btn operator">
            <button className="text textOperator">
                x
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='4' onClick={selectNumber} >
                4
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='5' onClick={selectNumber} >
                5
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='6' onClick={selectNumber} >
                6
            </button>
            </div>
            <div className="btn operator">
            <button className="text textOperator" value='-'>
                -
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='1' onClick={selectNumber} >
                1
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='2' onClick={selectNumber} >
                2
            </button> 
            </div>
            <div className="btn number">
            <button className="text textNumber" value='3' onClick={selectNumber} >
                3
            </button>
            </div>
            <div className="btn operator btn-plus">
            <button className="text-plus" value='+'>
                +
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='0' onClick={selectNumber} >
                0
            </button>
            </div>
            <div className="btn number"> 
            <button className="text textNumber" value=',' onClick={selectNumber} >
                ,
            </button>
            </div>
            <div className="btn number">
            <button className="text textNumber" value='='>
                =
            </button>
            </div>
        </div>

    </>    
    );

};


export default Pad;
