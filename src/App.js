import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Play from './components/play';
import Install from './components/install';
import Category from './components/category';
import Category2 from './components/category2';
import Install2 from './components/install2';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/install/:id' element={<Install />}/>
      {/* <Route path='/install' element={<Install />}/> */}
      <Route path='play' element={<Play/>}/>
      <Route path='category' element={<Category/>}/>
      <Route path='/category2/:id' element={<Category2/>}/>
      <Route path='/Install2/:id' element={<Install2/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
