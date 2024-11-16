import { useState } from 'react'

function ToggleButton() {
    const [ isOn, setIsOn ] = useState(false)

    function handleClick() {
        if (isOn == false ) {
            setIsOn(true)    
        }
        if (isOn == true ) {
            setIsOn(false)    
        }
    }
    const ON = "ON";
    const OFF = "OFF";
    return (
        <>
            <button onClick={handleClick}>{isOn ? ON : OFF}</button>
        </>
    )
}

export default ToggleButton