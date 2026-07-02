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
              <div className="avatar">ДШ</div>
              <div className="user-info">
                <h3>Дмитро</h3>
                <p>+380 (93) *** ** **</p>
              </div>
            </div>
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>×</button>
          </div>
          
          <nav className="menu-nav">
            <button 
              className={`menu-item ${activePage === 'main' ? 'active' : ''}`}
              onClick={() => { setActivePage('main'); setIsMenuOpen(false); }}
            >
              🚗 Главная
            </button>
            <button 
              className={`menu-item ${activePage === 'history' ? 'active' : ''}`}
              onClick={() => { setActivePage('history'); setIsMenuOpen(false); }}
            >
              📋 История поездок
            </button>
            <button className="menu-item">💳 Способы оплаты</button>
            <button className="menu-item">🎁 Промокоды</button>
            <button className="menu-item">⚙️ Настройки</button>
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
