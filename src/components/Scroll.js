import React from 'react'

const Scroll = (props) => {
    return (
        <div className="scroll pt1 pt3-ns" style={{overflowY: 'scroll', border: '1px solid gray'}}>
            {props.children}
        </div>
    )
}

export default Scroll