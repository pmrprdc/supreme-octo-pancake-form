import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
            <label htmlfor="email">
              Email <input name="email" type="email" placeholder=""/>
            </label>
            <br/>
            <label>
              Name
            <input name="name"type="text" placeholder="" />
    
            </label>


        </form>
      
      </header>
    </div>
  );
}

export default App;
