import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  link?: string;
}

// const isEqual = (element: number) => element % 2 === 0;
const TIMEOUT_MS = 2000;

// const App = (props: Props) => {
// const App = ({ link = 'https://reactjs.org' }: Props) => {
const App = ({ link }: Props) => {
  // const isEqual = (element: number) => element % 2 === 0;
  // const TIMEOUT_MS = 2000;
  // const link = () => 'https://reactjs.org';

  // const { link } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          {`Hello world ${TIMEOUT_MS}`}
        </p>
        <a
          className="App-link"
          href={link || 'https://reactjs.org'} // href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
