import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    
    <BrowserRouter>
    {/* header is same for all pages */}
      <Header/> 
       <Routes>
          
          <Route path="/" element={<Home />}/>

          <Route path="/about" element={<About />}/>

          <Route path="/sign-in" element={<Signin />}/>

          <Route path="/sign-up" element={<SignUp />}/>

          <Route element={<PrivateRoute />}>
                 <Route path='/profile' element={<Profile />} />
          </Route>
       </Routes>
  </BrowserRouter>
  );
  }