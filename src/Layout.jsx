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
                <p>4.63</p>
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
            <button className="menu-item"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M600-800H360v280h240v-280Zm200 0H680v280h120v-280ZM575-440H320v240h222q21 0 40.5-7t35.5-21l166-137q-8-8-18-12t-21-6q-17-3-33 1t-30 15l-108 87H400v-80h146l44-36q5-3 7.5-8t2.5-11q0-10-7.5-17.5T575-440Zm-335 0h-80v280h80v-280Zm40 0v-360q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v280q0 33-23.5 56.5T800-440H280ZM240-80h-80q-33 0-56.5-23.5T80-160v-280q0-33 23.5-56.5T160-520h415q85 0 164 29t127 98l27 41-223 186q-27 23-60 34.5T542-120H309q-11 18-29 29t-40 11Z"/></svg> Доставка Extra</button>
            <button className="menu-item"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg> Оплата</button>
            <button className="menu-item"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-240q-33 0-56.5-23.5T320-320v-50q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v50q0 33-23.5 56.5T560-240H400Zm0-80h160v-92l34-24q41-28 63.5-71.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 22.5 92.5T366-436l34 24v92Zm0 240q-17 0-28.5-11.5T360-120v-40h240v40q0 17-11.5 28.5T560-80H400Zm80-520Z"/></svg> Новини</button>
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
