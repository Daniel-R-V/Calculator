import { useState } from "react";
import Pad from "./components/Pad";

function App() {
    const [value, setValue] = useState(0)

    return (
        <div className="App">
            {/* <ScreenCalculator/>  */}
            {/* <Board /> */}
            <Pad/>
            
        </div>
    );
}

export default App;
