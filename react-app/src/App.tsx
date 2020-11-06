import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

// state is data at a given time
// views are a function of state
// views = f(state)

interface Props {
  link?: string;
}

// const isEqual = (element: number) => element % 2 === 0;
const TIMEOUT_MS = 2000;

// const App = (props: Props) => {
// const App = ({ link = 'https://reactjs.org' }: Props) => {
const App = ({ link }: Props) => {
  // const link = () => 'https://reactjs.org';
  // const count = 1;
  // const name = 'asher';
  // const { link } = props;

  // hook
  const [state, setState] = useState({
    name: 'asher',
    age: 1,
    surname: 'cohen',
  });
  console.log('App -> state', state);

  const [visible, setVisible] = useState(false);

  const [count, setCount] = useState(1);
  const [name, setName] = useState('asher');
  const [surname, setSurname] = useState('cohen');

  // console.log('App -> state', state);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          {`Hello world ${name}, count: ${count}`}
        </p>
        <a
          className="App-link"
          href={link || 'https://reactjs.org'} // href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={() => count + 1}>CLICK</button> */}
        {/* <button onClick={() => setState(count + 1)}>CLICK</button> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>CLICK</button> */}
        <button
          onClick={() =>
            setState((state) => ({
              ...state,
              name: 'jason',
            }))
          }
        >
          CLICK
        </button>
        Show Input
        <button onClick={() => setVisible((visible) => !visible)}>
          TOGGLE
        </button>
        {/* {visible === true && <Form />} */}
        {/* {visible && <Form />} */}
        {visible === true ? <Form setVisible={setVisible} /> : null}
      </header>
    </div>
  );
};

// class Welcome extends React.Component {
// this.state = {name: null, surname: '', age: ''} // with state it's a stateful component

//   // lifeCycles
//   componenDidMount() {
//     // call API
//   }

//   componenDidUpdate() {
//     //  logic to check if something has changed
//   }

//   componenDidUnmount() {
//     //  logic to check if something has changed
//   }

//   render() {
//     if (!this.props.link) {
//       return null;
//     }

//     const props = {};

//     return (
//       <>
//         <h1>Hello, {this.props.link}</h1>
//         <span>Hello, {this.state.name}</span>

//         <button
//           onClick={() =>
//             this.setState({ name: `${this.state.name} + ${this.props.link}` })
//           }
//         >
//           Click
//         </button>

//         <DumbFunctionalComp {...props} />
//       </>
//     );
//   }
// }

export default App;
