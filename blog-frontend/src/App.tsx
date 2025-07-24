import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './pages/home';
import CreatePost from './pages/nuevoPost';
import Post from './components/Post';
import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crear" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

