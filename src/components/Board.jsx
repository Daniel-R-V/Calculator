import Pad from "./Pad";
import ScreenCalculator from "./ScreenCalculator";

const Board = () => {
    return (
        <section className="Board">
            <ScreenCalculator />
            <Pad />
        </section>
    );
};

export default Board;
