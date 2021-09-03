import React from 'react'

const Message = ({winner,current}) => {
    const noLeftSpace = current.board.every((ele)=>ele!==null);
    return (
            <div className="status-message">
                {winner && 
                <>Winner is <span className={winner ==='X'?'text-green':'text-orange'}>{winner}</span>
                </>}
                {!winner && !noLeftSpace && 
                <>Next player is <span className={current.isNext?'text-orange':'text-green'}>{current.isNext?'O':'X'}</span></>}
                {!winner && noLeftSpace && <><span className='text-green'>X</span> and <span className='text-orange'>O</span> Tied</>}
                </div>
    )
}

export default Message
