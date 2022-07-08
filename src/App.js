import './App.scss';

import Tag from './components/Tag'
import Header from './components/Header'
import Thumb from './components/Thumb'
import List from './components/list'

import data from './data/data.json'

function App() {
  return (
    <div className="App">
      <Header name="test"></Header>
      <Tag name="Paris 10"></Tag>
      <Thumb name="test" data={data[0]}></Thumb>
      <List name="test" data={data[0]}></List>
    </div>
  );
}

export default App;
