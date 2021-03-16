import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class Songlist extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    })
  }
  
  render() {
    //console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// state is all the data inside our redux store
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps,
  // pass action creator as a javascript object
  { selectSong })(Songlist);

/**
 * Redux code will always look like this:
 * 1 - import { connect } from 'react-redux'
 * 2 - always a react component
 * 3 - always have export default connect(mapStateToProps)(Component_name);
 * 4 - always have a mapStateToProps function
 */