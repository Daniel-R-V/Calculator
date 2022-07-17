import { updateCalc,del, calculate, removeValue } from "./utils";
export const ops = ["/","*","+","-","."];

export const padButtons = 
    [
    {
        action: removeValue,
        value: 'AC',
        type: 'option'
    },
    {
        action: del,
        value: 'DEL',
        type: 'option'
    },
    {
        action: () => null,
        value: '%',
        type: 'operator'
    },
    {
        action: updateCalc,
        value: '/',
        type: 'operator'
    },
    {
        action: updateCalc,
        value: '7',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '8',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '9',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '*',
        type: 'operator'
    },
    {
        action: updateCalc,
        value: '4',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '5',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '6',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '-',
        type: 'operator'
    },
    {
        action: updateCalc,
        value: '1',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '2',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '3',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '+',
        type: 'btn-plus'
    },
    {
        action: updateCalc,
        value: '0',
        type: 'number'
    },
    {
        action: updateCalc,
        value: '.',
        type: 'number'
    },
    {
        action: calculate,
        value: '=',
        type: 'number'
    },
]