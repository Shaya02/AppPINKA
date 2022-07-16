import React, { useState } from 'react'

const ButtonCount = ({ onConfirm, maxQuantity }) => {


    const [value, setValue] = useState(0);

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <button onClick={() => setValue(value => value-1)}>-</button>
            <span>{value}</span>
            <button onClick={() => setValue(value => value+1)}>+</button>
            <button className="confimar"onClick={handleConfirm}>Confirmar</button>
        </div>
    )
}

export default ButtonCount