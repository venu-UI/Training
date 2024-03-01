
import './App.css';
import Parent from './sharing/parent';
import Child from './sharing/child';
import Mobile from './components/Mobile';
import Navbar from './pages/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Plan from './pages/Plan';
import History from './pages/History';
import User from './customeData/User';
import UserList from './customeData/UserList';

// import First from './components/First';
// import Header from './components/Header';

function App() {
  return (
    <div className="Mainwrapper">
      <Navbar></Navbar>
      <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}>
        <Route path='/About' element={<Plan/>}></Route>
        <Route path='/About/History' element={<History></History>}></Route>
      </Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/User' element={<User></User>}></Route>
      <Route path='/User/:userId' element={<UserList/>}></Route>

      </Routes>
    {/* <Header></Header> */}
    {/* <First></First> */}
{/* 
    <Parent></Parent> */}
    {/* <Mobile></Mobile> */}
    </div>
  );
}

export default App;
