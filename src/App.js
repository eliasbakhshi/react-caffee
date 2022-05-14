import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import Status from './components/Status';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/menu' element={ <Menu/> } />
        <Route path='/status' element={ <Status/> } />
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

