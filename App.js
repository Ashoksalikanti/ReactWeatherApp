import logo from './logo.svg';

import './App.css';
import Home from './components/Home';
import Shottype from './components/Shottype'
import Comparegame from './components/Comparegame'
import Analyse from './components/Analyse';
import{Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
     <Route  exact path='/'  element={<Home/>}/>
     <Route path='/shot'  element={<Shottype/>}/>
     <Route path='/compare'  element={<Comparegame/>}/>
     <Route path='/analyse'  element={<Analyse/>}/>
      </Routes>
      <div>
        <p>© Love ❤️ for Hacktoberfest 2022.</p>
      </div>
    </div>
  );
}

export default App;
