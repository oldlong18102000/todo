import logo from './logo.svg';
// import './App.css';
import { connect, useDispatch } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

import Home from './components/Home';

function App(props) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter())
  }

  const handleDecrease = () => {
    dispatch(decreaseCounter())
  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>Count: {props.count}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => handleDecrease()}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
