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
            <button className="btn option" onClick={(e) => this.setValue(e.currentTarget.value)} >
                AC
            </button>
            <button className="btn option" onClick={(e) => this.setValue(e.currentTarget.value)}>
                +/-
            </button>
            <button className="btn option">
                %
            </button>
            <button className="btn operator">
                /
            </button>
            <button className="btn number">
                7
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                8
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                9
            </button>
            <button className="btn operator">
                x
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                4
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                5
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                6
            </button>
            <button className="btn operator">
                -
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                1
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                2
            </button>
            <button className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                3
            </button>
            <button className="btn operator btn-plus">
                +
            </button>
            <button id="btn-0" className="btn number" onClick={(e) => this.setValue(e.currentTarget.value)}>
                0
            </button>
            <button className="btn number">
                ,
            </button>
            <button className="btn number">
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
