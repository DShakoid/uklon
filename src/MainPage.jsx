import React from 'react';
import './MainPage.css';

export default function MainPage() {
  const services = [
    { id: 'delivery', name: 'Доставка', icon: '📦', isBeta: false },
    { id: 'travel', name: 'Подорожі', icon: '🚌', isBeta: true },
    { id: 'flowers', name: 'Квіти', icon: '💐', isBeta: true },
    { id: 'assist', name: 'Автопідмога', icon: '🛠️', isBeta: false },
    { id: 'intercity', name: 'Міжміст', icon: '🛣️', isBeta: false },
    { id: 'donate', name: 'Донат', icon: '🛸', isBeta: false },
  ];

  return (
    <div className="main-page">
      {/* КАРТА */}
      <div className="map-container">
        {/* Интерактивные точки на карте */}
        <div className="map-pin yellow-glow" style={{ top: '45%', left: '50%' }}>
          <div className="pin-core"></div>
        </div>
        <div className="map-pin double-ring" style={{ top: '50%', left: '48%' }}>🔄</div>
        
        {/* Кнопка Моя локация справа */}
        <button className="geo-location-btn">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm238-240q82-82 82-198t-82-198q-82-82-198-82t-198 82q-82 82-82 198t82 198q82 82 198 82t198-82Zm-311-85q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm169.5-56.5Q560-447 560-480t-23.5-56.5Q513-560 480-560t-56.5 23.5Q400-513 400-480t23.5 56.5Q447-400 480-400t56.5-23.5ZM480-480Z"/></svg>  
        </button>
      </div>

      {/* НИЖНЯЯ ПАНЕЛЬ ЗАКАЗА */}
      <div className="uklon-bottom-sheet">
        <div className="sheet-handle"></div>

        {/* Блок Откуда */}
        <div className="address-row pickup-point">
          <span className="address-icon">📍</span>
          <div className="address-text">
            <span className="address-label">Місце посадки</span>
            <span className="address-value">(Київ, Академіка Глушкова проспект)</span>
          </div>
        </div>

        {/* Блок Куда едем */}
        <div className="destination-bar">
          <div className="search-input-wrapper">
            <span className="arrow-icon">➔</span>
            <input type="text" placeholder="Куда едем?" readOnly />
          </div>
          <div className="quick-shortcuts">
            <button className="shortcut-btn">🏠⁺</button>
            <button className="shortcut-btn">💼⁺</button>
          </div>
        </div>

        {/* История / Последний адрес */}
        <div className="recent-history-row">
          <span className="clock-icon">🕒</span>
          <div className="history-text">
            <span className="history-title">Місце посадки</span>
            <span className="history-value">(Київ, Каховська вулиця, 62А)</span>
          </div>
        </div>

        {/* СЕТКА СЕРВИСОВ */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-header">
                <span className="service-name">{service.name}</span>
                {service.isBeta && <span className="beta-badge">BETA</span>}
              </div>
              <div className="service-icon">{service.icon}</div>
            </div>
          ))}
        </div>

        {/* Блок "Может заинтересовать" */}
        <div className="interest-section">
          <h4>Может заинтересовать</h4>
          <div className="promo-banner">
            <div className="promo-badge">Реклама</div>
            <div className="promo-content">
              <h5>ПОСІПАКИ І МОНСТРИ</h5>
              <p>Смотри в кинотеатрах Иллюминация!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
