import * as React from 'react';
import InputMask from 'react-input-mask';


const onlyNumbers = (str) =>  str.replace(/[^0-9]/g,'')


const MaskedInput = ({value, onChange}) => {

    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                value: onlyNumbers(event.target.value)
            }
        });
    }

    return (
            <InputMask
                mask="99.999.999/9999-99"
                value={value}
                onChange={handleChange}
                style={{height:'40px', width: '400px', borderRadius:"5px", fontSize:"25px", borderWidth:"0px"}}
            />
    )
}

export default MaskedInput;

