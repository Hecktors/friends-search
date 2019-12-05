import React from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundry from './ErrorBoundry'
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=30')
      .then(response => response.json())
      // .then(response => console.log(response.results))
      .then(data => this.setState({ friends: data.results }))
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    const filteredFriends = this.state.friends.filter(friend => {
      const searchTerm = `${friend.name.first} ${friend.name.last} ${friend.email}`
      return searchTerm.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className="App tc">
        <header className="pb3">
          <h1 className="ma0 p0 f1 white">Find your Friend!</h1>
          <SearchBox searchfield={this.searchfield} searchChange={this.onSearchChange} />
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

export default App;
