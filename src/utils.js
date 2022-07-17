import {ops} from './constants'

export const updateCalc = (value,calc) => {
    if((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))){
        return {};
    }

    return {
        calc: calc + value,
        result: !ops.includes(value) ? eval(calc + value).toString() : null,
    }
}

export const calculate = (value,calc) => {
    return {
        calc: eval(calc).toString(),
        result: null
    }
}


export const del = (value,calc) => {
    return {
        calc: calc ? calc.slice(0, -1) : null,
        result: null
    }
}


export const removeValue = () => {
    return{
        calc: "",
        result: ""
    }
} 