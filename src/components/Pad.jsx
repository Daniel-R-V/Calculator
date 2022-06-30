const Pad = () => {
    return (
        <div className="container">
            <button onClick={() => display} className="btn option">
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
    );


    function display(e) {
        return (
            <p>{e.target.value}</p>
        )
    }



};


// export const BtnPressed = () => {
//     console.log('btn AC pressed!');
// }

export default Pad;
