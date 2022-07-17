import {useState} from 'react'
import Screen from './Screen'
import Pad from './Pad'
import './calculator.css'

const useCalculator = () => {
  const [calc, setCalc] = useState("");
    const [result,setResult] = useState("");

    const updateValues = (values) => {
        if(values.calc != null ) setCalc(values.calc)
        if(values.result != null) setResult(values.result)
    }
    return {
      calc,
      result,
      updateValues
    }
}


export const Calculator = () => {
  const {calc,result,updateValues} = useCalculator()


  return (
    
    <div className="calculator">
        <div className="calculator-section">
            <div className="casio">CASIO</div>
                <Screen calc={calc} result={result}/>
                <Pad calc={calc} updateValues={updateValues}/>
        </div>
    </div>
  )
}
