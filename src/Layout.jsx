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
          <div className="menu-header3">
            <div className="user-profile">
              <div className="avatar">МК</div>
              <div className="user-info">
                <h3>Марта</h3>
                <p>Мій профіль</p>
              </div>
            </div>
                <button className="close-menu" onClick={() => setIsMenuOpen(false)}>×</button>
             </div>
             <div className="menu-header">
            <div className="user-profile user-profile2">
              <div className="avatar2">
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  width="24" 
  height="24"
>
  <polygon 
    fill="#FFFF55" 
    points="22,9.3 14.8,8.6 12,2 9.2,8.6 2,9.3 7.5,14 5.8,21 12,17.3 18.2,21 16.5,14" 
  />
</svg>
</div>
              <div className="user-info user-info2">
                <h3>Рейтинг</h3>
                <p>5</p>
              </div>
            </div>
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

            <button className="menu-item"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm371.5-748.5Q520-817 520-800t11.5 28.5Q543-760 560-760t28.5-11.5Q600-783 600-800t-11.5-28.5Q577-840 560-840t-28.5 11.5ZM360-800q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"/></svg> Знижки на поїздки</button>
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
