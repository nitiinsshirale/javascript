//import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Hello React App</h2>
        <TopMenu/>
        <Content/>
    </div>
  );
}

export default App;
