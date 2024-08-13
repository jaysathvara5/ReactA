import logo from './logo.svg';
import './App.css';


function Mybutton(){
  return(
    <button className='btn'>CLick Here</button>
  );
}


function App() {
  return (
    <div className="App">
      <h1>hello world!</h1>
      <Mybutton />
    </div>
  );
}

export default App;
