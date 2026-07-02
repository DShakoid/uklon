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
              <div className="avatar">МКуу</div>
              <div className="user-info">
                <h3>Марта</h3>
                <p>Мій профіль</p>
              </div>
              <div className="user-profile2">
              <div className="avatar2">МК</div>
              <div className="user-info2">
                <h3>Рейтинг</h3>
                <p>Мій профіль</p>
              </div>
            </div>
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>×</button>
          </div>
          <nav className="menu-nav">
            <button className="menu-item">⚙️ Київ</button>
          </nav>
          <nav className="menu-nav">
                   <button 
              className={`menu-item ${activePage === 'history' ? 'active' : ''}`}
              onClick={() => { setActivePage('history'); setIsMenuOpen(false); }}
            >
					  <HistoryIcon size={20} className="clock-icon" /> Поїздки
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
