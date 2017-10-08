import React from 'react';

import HeaderContainer from './layout/HeaderContainer';
import CounterContainer from './counter/CounterContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderContainer />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
