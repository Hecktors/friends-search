import React from 'react'

const Card = ({ first, last, pic, country, city }) => {
    return (
        <article className="card ma1 br2 pa3 ba b--black-10">
            <div className="tc">
                <img src={pic} className="br-100 ba b--black-05" alt="friend" />
                <h3 className="f5 mt1 mt3-ns mb1 mb2-ns">{first}<br/>{last}</h3>
                <p className="fz-sm fw4 dark-gray ma0 mb1">{`${city}, ${country}`}</p>
            </div>
        </article>
    )
}

export default Card