import Button from './Button'
import { padButtons } from '../constants';
import './pad.css'

const Pad = ({calc,updateValues}) => {

    const handleClick = (action,value) => {
        updateValues(action(value,calc))
    }

    return (
        <div className="pad">
            {padButtons.map(button => <Button key={button.value} handleClick={(value) => handleClick(button.action,value)} value={button.value} type={button.type}/>)}
        </div>
    );

};


export default Pad;
