import React from 'react';
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundry from './ErrorBoundry'
import './App.css';
import { connect } from 'react-redux'
import { setSearchField, requestFriends } from '../actions';

class App extends React.Component {
  

  render() {
    const {searchField, friends, isPending, setSearchField} = this.props
    if (isPending){
      return <h1>Loading...</h1>
    }
    let filteredFriends = []
    if(friends.length > 0 ){

      filteredFriends = friends.filter(friend => {
        const searchTerm = `${friend.name.first} ${friend.name.last} ${friend.email}`
        return searchTerm.toLowerCase().includes(searchField.toLowerCase())
      })
    }

    return (
      <div className="App tc">
        <header className="pb3">
          <Header />
          <SearchBox searchField={searchField} searchChange={setSearchField} />
        </header>
        <ErrorBoundry>
          <Scroll>
            <CardList friends={filteredFriends} />
          </Scroll>
        </ErrorBoundry>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    searchField: state.setSearchField.searchField,
    friends: state.requestFriends.friends,
    isPending: state.requestFriends.isPending,
    error: state.requestFriends.error
  }
}

const mapDispatchToState = dispatch => {
  return {
    setSearchField: (event) => dispatch(setSearchField(event.target.value)),
    requestFriends: dispatch(requestFriends)
  }
}

export default connect(mapPropsToState, mapDispatchToState) (App);
