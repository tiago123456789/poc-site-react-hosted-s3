import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GITHUB ACTIONS EXAMPLE CONTINUOUS DEPLOY
        </p>
        <small>Changes to show CD using github actions to deploy S3 bucket v2</small>
      </header>
    </div>
  );
}

export default App;
