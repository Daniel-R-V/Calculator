import Pad from "./Pad";
import ScreenCalculator from "./ScreenCalculator";

const Board = () => {
    return (
        <div className="Board">
            <section className="Board-section">
                <ScreenCalculator />
                <Pad />
            </section>
        </div>
    );
};

export default Board;
