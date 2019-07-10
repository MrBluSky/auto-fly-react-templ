import React from 'react';
import './index.less';
import './index.css';
import imgTest from './11.png';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app">
        <h1>auto-fly-react-templ</h1>
        <img src={imgTest} alt="测试用途" />
      </div>
    );
  }
}

export default App;

