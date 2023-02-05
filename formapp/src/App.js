import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
 const [inputName, setInputName] = useState("")

  const changeHandler = (evt) =>{
    setInputName(evt.target.value)
  }





  return (
    <div className="App">
      <header className="App-header">
        {inputName && <h1>{inputName}</h1>}
        <img  src={logo} className="App-logo" alt="logo" />
        <form>
            <input autoFocus onChange={changeHandler} type="text" placeholder="Enter Name"/>

        </form>
      
      </header>
    </div>
  );
}

export default App;
