import React from 'react';
import {getPopularGameData} from '../server';
import {setActiveNavLink} from '../server';
import GamesTable from './gamesTable';
export default class Games extends React.Component {
  constructor(props) {
    super(props);
    setActiveNavLink("Games");
    this.state = {
      contents: []
    };
  }
  componentDidMount() {
    this.refresh();
  }

  refresh() {
    getPopularGameData((games) => {
      this.setState({ "games": games });
    });
  }
  render(){
    return(
      <div>
        <div>
          <h2>List of Games</h2>
          <GamesTable games={this.state.games} />
        </div>
      </div>
    );
  }
}
