import React, { useState, useEffect } from 'react';
import '../Home.css';
import iconDark from '../assets/images/icon_dark.png'; 
import iconLight from '../assets/images/icon_light.png'; 
import { BiSearch, BiHomeAlt, BiUserPlus, BiBarChartSquare, BiUser, BiLogOut, BiSun, BiMoon } from "react-icons/bi";

function Sidebar() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Função para alternar entre os modos de cores
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  // Atualiza o tema da página com base no estado de luz
  useEffect(() => {
    const body = document.querySelector("body");
    if (isLightMode) {
      body.classList.add("light");
    } else {
      body.classList.remove("light");
    }
  }, [isLightMode]);

  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span>
            <img className="image" src={isLightMode ? iconLight : iconDark} alt="Imagem" />
          </span>
          <div className="text header-text">
            <span className="name">NAME</span>
            <span className="profession">Web Dev</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="icon"><BiSearch /></i>
            <input type="search" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="home-link">
              <a href="/home">
                <i className="icon"><BiHomeAlt /></i>
                <span className="text nav-text">Home</span>
              </a>
            </li>
            <li className="register-link">
              <a href="/register">
                <i className="icon"><BiUserPlus /></i>
                <span className="text nav-text">Cadastro</span>
              </a>
            </li>
            <li className="graph-link">
              <a href="#">
                <i className="icon"><BiBarChartSquare /></i>
                <span className="text nav-text">Graficos</span>
              </a>
            </li>
            <li className="user-link">
              <a href="#">
                <i className="icon"><BiUser /></i>
                <span className="text nav-text">Usuarios</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="logout-link">
            <a href="/login">
              <i className="icon"><BiLogOut /></i>
              <span className="text nav-text">Sair</span>
            </a>
          </li>
          <li className="mode" onClick={toggleMode}>
            <div className="moon-sun">
              {isLightMode ? <BiMoon className="icon" /> : <BiSun className="icon" />}
            </div>
            <span className="mode-text text">
              {isLightMode ? "Dark Mode" : "Light Mode"}
            </span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
