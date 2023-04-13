import './App.css';
import { AdminDashboard } from './Modules/Admin';
import { OfficerDashboard } from './Modules/Officer';

import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <OfficerDashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
