
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Post></Post>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
