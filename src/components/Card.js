import React from 'react'

const Card = ({ id, first, last, email, pic, country, city }) => {
    return (
        // <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        //     {/* <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/> */}
        //     <img src={pic} alt="robot"/>
        //     <h3>{name}</h3>
        //     <p className="fz-xs">{id}</p>
        //     <p className="fz-sm">{email}</p>
        // </div>
        <article className="card ma1 dib br3 pa1 pa3-ns ba b--black-10">
            <div className="tc">
                <img src={pic} className="br-100 w3 w4-ns dib ba b--black-05 pa1" alt="friend" />
                <h3 className="f5 mt1 mt3-ns mb1 mb2-ns">{first}<br/>{last}</h3>
                <p className="fz-sm fw4 dark-gray mt0 mb2 mb3-ns">{`${city}, ${country}`}</p>
            </div>
        </article>
    )
}

export default Card