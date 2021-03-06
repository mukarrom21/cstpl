import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './component/Header/Header';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
