import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // 點擊菜單項後關閉菜單
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <section id="nav">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />初上石股份有限公司
      </Link>

      <div className="menu_container">
        <button onClick={toggleMenu}>
          ☰
        </button>
        <ul id="menu_item" className={menuOpen ? "open" : ""}>
          <li><Link to="/" onClick={handleMenuItemClick}>首頁</Link></li>
          <li><Link to="/products" onClick={handleMenuItemClick}>產品介紹</Link></li>
          <li><Link to="/about" onClick={handleMenuItemClick}>關於初上石</Link></li>
          <li><Link to="/contact" onClick={handleMenuItemClick}>聯絡我們</Link></li>
        </ul>
      </div>
    </section>
  );
}
export default Navbar;