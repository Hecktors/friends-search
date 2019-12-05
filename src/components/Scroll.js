import React from 'react'

const Scroll = (props) => {
    return (
        <div className="scroll pt3" style={{overflowY: 'scroll', border: '1px solid gray'}}>
            {props.children}
        </div>
    )
}

export default Scroll