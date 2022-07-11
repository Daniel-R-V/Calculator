import { useState } from "react";

const Pad = () => {
    const [display, setDisplay] = useState(0);

    const selectNumber = (e) => {
        setDisplay(e.target.value);
    };

    const removeValue = (e) => {
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
            <button className="btn option" value='AC' onClick={removeValue} >
                AC
            </button>
            <button className="btn option" value='+/-' onClick={selectNumber} >
                +/-
            </button>
            <button className="btn option" value='%' onClick={selectNumber} >
                %
            </button>
            <button className="btn operator" value='/' onClick={selectNumber} >
                /
            </button>
            <button className="btn number" value='7' onClick={selectNumber} >
                7
            </button>
            <button className="btn number" value='8' onClick={selectNumber} >
                8
            </button>
            <button className="btn number" value='9' onClick={selectNumber} >
                9
            </button>
            <button className="btn operator" value='x' onClick={selectNumber} >
                x
            </button>
            <button className="btn number" value='4' onClick={selectNumber} >
                4
            </button>
            <button className="btn number" value='5' onClick={selectNumber} >
                5
            </button>
            <button className="btn number" value='6' onClick={selectNumber} >
                6
            </button>
            <button className="btn operator" value='-' onClick={selectNumber}>
                -
            </button>
            <button className="btn number" value='1' onClick={selectNumber} >
                1
            </button>
            <button className="btn number" value='2' onClick={selectNumber} >
                2
            </button> 
            <button className="btn number" value='3' onClick={selectNumber} >
                3
            </button>
            <button className="btn operator btn-plus" value='+' onClick={selectNumber}>
                +
            </button>
            <button className="btn number" value='0' onClick={selectNumber} >
                0
            </button>
            <button className="btn number" value=',' onClick={selectNumber} >
                ,
            </button>
            <button className="btn number" value='=' onClick={selectNumber} >
                =
            </button>
        </div>

    </>    
    );


    // function display() {
    //     return (
            
    //     )
    // }



};


// export const BtnPressed = () => {
//     console.log('btn AC pressed!');
// }

export default Pad;
