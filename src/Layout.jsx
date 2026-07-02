import React, { useState } from 'react';
import './Layout.css';

export default function Layout({ children, pageTitle, activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout-container">
      {/* ШАПКА */}
      <header className="app-header">
        <button className="menu-burger" onClick={() => setIsMenuOpen(true)}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
        <h1 className="page-title">{pageTitle || 'Uklon'}</h1>
        <div className="header-right">
          <button className="archive-btn" onClick={() => setActivePage('history')}>🕒</button>
        </div>
      </header>

      {/* ВЫПАДАЮЩЕЕ МЕНЮ (ШТОРКА) */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
        <div className="menu-content">
          <div className="menu-header">
            <div className="user-profile">
              <div className="avatar">МК</div>
              <div className="user-info">
                <h3>Марта</h3>
                <p>Мій профіль</p>
              </div>
            </div>
            
            <div className="user-profile user-profile2">
              <div className="avatar avatar2">
<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
    >
      <g>
        <polygon 
          fill="#FFFF55" 
          points="13.5,10.5 12,7.1 10.5,10.5 6.9,10.8 9.7,13.3 8.8,16.8 12,14.9 15.2,16.8 14.3,13.3 17.1,10.8"
        />
        <path 
          fill="#FFFF55" 
          d="M14.8,8.6L12,2L9.2,8.6L2,9.3L7.5,14l-1.6,7l6.2-3.7l6.2,3.7l-1.6-7L22,9.3L14.8,8.6z M15.2,16.8L12,14.9 l-3.2,1.9l0.8-3.6l-2.8-2.4l3.6-0.3L12,7.1l1.5,3.4l3.6,0.3l-2.8,2.4L15.2,16.8z"
        />
      </g>
      <rect 
        x="44.2" 
        y="17.8" 
        fill="#1ED17B" 
        stroke="#000000" 
        strokeMiterlimit="10" 
        width="0.3" 
        height="0.3"
      />
    </svg>
</svg>
</div>
              <div className="user-info user-info2">
                <h3>Рейтинг</h3>
                <p>5</p>
              </div>
            </div>
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>×</button>
          </div>

          <nav className="menu-nav">
            <button className="menu-item">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z"/></svg>
              Київ
            </button>
            </nav>
         <nav className="menu-nav">    
            {/* Кнопка Поездки с чистым встроенным SVG */}
            <button 
              className={`menu-item ${activePage === 'history' ? 'active' : ''}`}
              onClick={() => { setActivePage('history'); setIsMenuOpen(false); }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                style={{ flexShrink: 0 }}
              >
                <g fill="currentColor">
                  <path d="M8.5,3.7c-1.1,0.5-2,1.1-2.8,1.9S4.2,7.4,3.7,8.5C3.2,9.6,3,10.8,3,12c0,1.4,0.3,2.7,0.9,3.9c0.6,1.2,1.4,2.3,2.5,3.1L4,19l0,2l6,0l0-6l-2,0l0,2.7c-0.9-0.7-1.7-1.5-2.2-2.5S5,13.2,5,12c0-2,0.7-3.6,2-5s3-2,5-2s3.6,0.7,5,2s2,3,2,5c0,1.7-0.6,3.3-1.7,4.6c-1.1,1.3-2.6,2.1-4.3,2.3l0,2c2.3-0.3,4.2-1.2,5.7-3c1.5-1.7,2.3-3.7,2.3-6c0-1.2-0.2-2.4-0.7-3.5c-0.5-1.1-1.1-2-1.9-2.8c-0.8-0.8-1.8-1.4-2.9-1.9C14.4,3.2,13.2,3,12,3S9.6,3.2,8.5,3.7z"/>
                  <polygon points="11,7 11,12.4 14.8,16.2 16.2,14.8 13,11.6 13,7"/>
                </g>
              </svg>
              <span>Поїздки</span>
            </button>

            <button className="menu-item">💳 Знижки на поїздки</button>
            <button className="menu-item">🎁 Доставка Extra</button>
            <button className="menu-item">⚙️ Оплата</button>
            <button className="menu-item">⚙️ Новини</button>
          </nav>
        </div>
      </div>

      {/* ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
