import React from 'react'
import Card from './Card'

const CardList = ({friends}) => {
    return (
        <div>
            {
                friends.map(friend => < Card 
                    key={friend.login.uuid} 
                    id={friend.login.uuid} 
                    first={friend.name.first}
                    last={friend.name.last} 
                    email={friend.email}
                    country={friend.location.country}
                    city={friend.location.city} 
                    pic={friend.picture.medium} />)
            }
        </div>
    )
}

export default CardList