import React from 'react'

const Square = ({value,onClick,isWining}) => {console.log(isWining);
    return (
        
        <button className="square" type="button" className={`square ${isWining?'winning':''} ${value === 'X'?'text-green':'text-orange'}`} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
