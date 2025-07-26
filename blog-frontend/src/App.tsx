import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './pages/home';
import CreatePost from './pages/nuevoPost';
import PostPage from './pages/post';
import SideBar from './components/SideBar';
import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crear" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

