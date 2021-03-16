import React, { Component } from 'react';
import { connect } from 'react-redux';

class Songlist extends Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(Songlist);