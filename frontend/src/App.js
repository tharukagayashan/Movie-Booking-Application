import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Movie from './components/Movie';
import MovieProfile from './components/MovieProfile';
import InsertMovie from './components/InsertMovie';
import Footer from './components/Footer';
import MovieManagement from './components/MovieManagement';
import MovieUpdate from './components/MovieUpdate';
import Admin from './components/Admin';
import MovieAdmin from './components/MovieAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Movie />}></Route>
          <Route path='/admin/movie' element={<MovieManagement />}></Route>
          <Route path='/profile/:id' element={<MovieProfile />} ></Route>
          <Route path='/insert' element={<InsertMovie />}></Route>
          <Route path='/update/:id' element={<MovieUpdate/>}></Route>
          <Route path='/adminpanel' element={<Admin/>}></Route>
          <Route path='/movieadmin' element={<MovieAdmin/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;