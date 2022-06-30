import { useState } from "react";

const Pad = () => {
    const [value, setValue] = useState(0)
    return (
    <>
        <div className="casio-dani">CASIO</div>
        <div className="screen">
            <p className="text-screen">{value}</p>
        </div>

        <div className="container">
            <button onClick={(e) => setValue(e.target.value)} className="btn option">
                <div className="btn-size">AC</div>
            </button>
            <button className="btn option">
                <div className="btn-size">+/-</div>
            </button>
            <button className="btn option">
                <div className="btn-size">%</div>
            </button>
            <button className="btn operator">
                <div className="btn-size">/</div>
            </button>
            <button className="btn number">
                <div className="btn-size">7</div>
            </button>
            <button className="btn number">
                <div className="btn-size">8</div>
            </button>
            <button className="btn number">
                <div className="btn-size">9</div>
            </button>
            <button className="btn operator">
                <div className="btn-size">x</div>
            </button>
            <button className="btn number">
                <div className="btn-size">4</div>
            </button>
            <button className="btn number">
                <div className="btn-size">5</div>
            </button>
            <button className="btn number">
                <div className="btn-size">6</div>
            </button>
            <button className="btn operator">
                <div className="btn-size">-</div>
            </button>
            <button className="btn number">
                <div className="btn-size">1</div>
            </button>
            <button className="btn number">
                <div className="btn-size">2</div>
            </button>
            <button className="btn number">
                <div className="btn-size">3</div>
            </button>
            <button className="btn operator btn-plus">
                <div className="btn-size">+</div>
            </button>
            <button id="btn-0" className="btn number">
                <div className="btn-size">0</div>
            </button>
            <button className="btn number">
                <div className="btn-size">,</div>
            </button>
            <button className="btn number">
                <div className="btn-size">=</div>
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
