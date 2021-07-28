import React from 'react'

const MessageSet = ({winner, current}) => {
    const tie = !current.board.includes(null);
    return (
        <div className="status-message">
            {
                winner && <>
                    Winner is {''}<span className={winner==='X'? 'text-green':'text-orange'}>{winner}</span>
                </>
            }
            {
                !winner && !tie && 
                <>
                Next player is <span className = {current.isXNext? 'text-green':'text-orange'}>{current.isXNext ? 'X' : 'O'}</span>
                </>
            }
            {
                !winner && tie && 
                <>
                    <span className="text-green">'X'</span> and <span className="text-orange">'O'</span> tied
                </>
            }
        </div>
    )
}

export default MessageSet
