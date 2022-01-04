import logo from './logo.svg';
import './App.css';
import AddData from './AddData';
import Display from './Display';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <h2>Mern Crud</h2>
      <AddData/>
      <Display/>
      <Edit/>
    </div>
  );
}

export default App;
