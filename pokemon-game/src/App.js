import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderBlock from './components/headerBlock/index.js';

const AppList = () => {
  const items = ['item 1', 'item 2'];
  return (
    <ul>
      {
        items.map(item => <li>{item}</li>)
      }
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1 className="header">Hello world!</h1>
  );
}

const App = () => {
  return (
    <>
      <HeaderBlock title="React.JS is awesome!" description ="That's my first React-rendered HTML file!" />
      {/* <AppHeader />
      <AppList /> */}
    </>
  );
}

const el = <App />;

ReactDOM.render(el, document.getElementById('root'));
export default App;