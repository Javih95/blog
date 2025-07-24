import './css/header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="blog-header">
      <div className="header-container">
        <div className="logo-title">
          <img src="logo.png" alt="Logo de Javih" className="logo-area" />
          <div>
            <h1 className="blog-title">Javih.Blog</h1>
            <p className="subtitle">Reflexiones sobre cultura tecnológica y GameDev</p>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/crear">Nuevo Post</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
