import React from 'react';
import './MainPage.css';

export default function MainPage() {
  const services = [
    { id: 'delivery', name: 'Доставка', icon: '📦', isBeta: false },
    { id: 'travel', name: 'Путешествия', icon: '🚌', isBeta: true },
    { id: 'flowers', name: 'Цветы', icon: '💐', isBeta: true },
    { id: 'assist', name: 'Автоподмога', icon: '🛠️', isBeta: false },
    { id: 'intercity', name: 'Межгород', icon: '🛣️', isBeta: false },
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
        <button className="geo-location-btn">🎯</button>
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
