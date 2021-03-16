import React from 'react';
import SongList from './SongList';
// import the NAMED export using { ... }
// if export default, no {} necessary

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;