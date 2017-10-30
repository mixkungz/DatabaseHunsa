import React, { Component } from 'react';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';

class App extends Component {
  

  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default App;
