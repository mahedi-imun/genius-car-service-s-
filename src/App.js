import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Page/About/About';
import Home from './components/Page/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import ServiceDetails from './components/Page/ServiceDetails/ServiceDetails';
import NotFoundPage from './components/Shared/NotFoundPage/NotFoundPage';
import Login from './components/Page/Login/Login/Login';
import SignUp from './components/Page/Login/SignUp/SignUp';
import RequireAuth from './components/Page/Login/RequireAuth/RequireAuth';
import Checkout from './components/Page/Checkout/Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
