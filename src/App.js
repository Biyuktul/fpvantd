import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
