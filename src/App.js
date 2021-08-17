import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: '',
    }
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (value) => {
    this.setState({searchField: value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name?.toLowerCase().trim().includes(searchField.toLowerCase().trim())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'Search monsters'}
          handleChange={this.handleChange}
        />
        <CardList 
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
