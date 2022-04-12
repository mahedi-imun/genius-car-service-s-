import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Page/About/About';
import Home from './components/Page/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
