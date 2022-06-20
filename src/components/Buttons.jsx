const Buttons = () => {
    return (
        <div className="container">
            <button className="btn option">AC</button>
            <button className="btn option">+/-</button>
            <button className="btn option">%</button>
            <button className="btn operator">/</button>
            <button className="btn number">7</button>
            <button className="btn number">8</button>
            <button className="btn number">9</button>
            <button className="btn operator">X</button>
            <button className="btn number">4</button>
            <button className="btn number">5</button>
            <button className="btn number">6</button>
            <button className="btn operator">-</button>
            <button className="btn number">1</button>
            <button className="btn number">2</button>
            <button className="btn number">3</button>
            <button className="btn operator">+</button>
            <button id="btn-0" className="btn number">
                0
            </button>
            <button className="btn number">,</button>
            <button className="btn operator">=</button>
        </div>
    );
};

export default Buttons;
