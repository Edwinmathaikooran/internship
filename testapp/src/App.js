import './App.css';
import Basics from './components/Basics';
import StateBasics from './components/StateBasics';
import TextBasics from './components/TextBasics'
import Handler from './components/Handler';
import TableArray from './components/TableArray';
import { Route, Routes } from 'react-router-dom';
import Navigator from './components/Navigator';
import ViewData from './components/ViewData';


function App() {
  return (
    <div className="App">
      
      <Navigator/>
      <br/><br/>
      <br/><br/>
      <Routes>
      <Route>
        <Route path='/' element={<StateBasics/>} />
        <Route path='/table' element={<TableArray/>} />
        <Route path='view'element={<ViewData/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
