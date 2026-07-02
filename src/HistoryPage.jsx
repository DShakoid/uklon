import React, { useState } from 'react';
import './HistoryPage.css';

export default function HistoryPage() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const stats = [
    { label: 'Всього поїздок', value: 414, icon: <span style={{color: '#2db7d2'}}>🚗</span> },
    { label: 'Завершених', value: 393, icon: <span style={{color: '#00ca80'}}>✅</span> },
    { label: 'Скасовано', value: 21, icon: <span style={{color: '#BB271A'}}>❌</span> }
  ];

  const trips = [
    {
      id: 1,
      date: '18 черв. 2026р., 09:23',
      from: 'Місце посадки (Київ, Каховська вулиця, 62А)',
      to: 'Харківське шосе, 56',
      price: '354 ₴',
      status: 'ВИКОНАНО',
      driver: {
        name: 'Віктор',
        experience: 'Більше 3 років',
        tripsCount: 21959,
        rating: '4.96',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' // Временная заглушка фото
      },
      car: {
        model: 'Чорний Toyota Prius',
        category: 'Стандарт',
        number: 'KA4***P*'
      },
      payment: 'Apple Pay'
    },
    {
      id: 2,
      date: '25 трав. 2026р., 13:04',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Місце посадки (Київ, Каховська вулиця, 62А)',
      price: '303 ₴',
      status: 'ВИКОНАНО',
      driver: {
        name: 'Олександр',
        experience: 'Більше 1 року',
        tripsCount: 4520,
        rating: '4.91',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      },
      car: {
        model: 'Сірий Skoda Octavia',
        category: 'Комфорт',
        number: 'AA1***X*'
      },
      payment: 'Готівка'
    }
  ];

  return (
    <div className="history-page">
      {!selectedTrip ? (
        <>
          {/* Сетка статистики */}
          <div className="stats-grid">
            {stats.map((item, i) => (
              <div key={i} className="stat-card">
                <div className="stat-header">
                  <span>{item.label}</span>
                  {item.icon}
                </div>
                <h2>{item.value}</h2>
              </div>
            ))}
          </div>

          {/* Список поездок */}
          <div className="trips-list">
            {trips.map((trip) => (
              <div key={trip.id} className="trip-card" onClick={() => setSelectedTrip(trip)}>
                <div className="trip-card-header">
                  <span className="trip-date">{trip.date}</span>
                  <button className="more-btn" onClick={(e) => e.stopPropagation()}>⋮</button>
                </div>

                <div className="route-container">
                  <div className="route-line">
                    <div className="dot yellow"></div>
                    <div className="line"></div>
                    <div className="dot white"></div>
                  </div>
                  <div className="route-addresses">
                    <p className="address">{trip.from}</p>
                    <p className="address">{trip.to}</p>
                  </div>
                </div>

                <div className="trip-footer">
                  <div className="price-box">
                    <span className="price">{trip.price}</span>
                    <span className="pay-method">{trip.payment === 'Apple Pay' ? '📱' : '💵'}</span>
                  </div>
                  <span className="status-badge">{trip.status}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* ЭКРАН ДЕТАЛЕЙ ПОЕЗДКИ (ПО ШАБЛОНУ ИЗ УКЛОН) */
        <div className="trip-details">
          <div className="details-header">
            <button className="back-btn" onClick={() => setSelectedTrip(null)}>✕</button>
            <button className="pdf-btn">📄</button>
          </div>

          <h1 className="details-date">{selectedTrip.date}</h1>

          {/* Блок водителя */}
          <div className="driver-section">
            <div className="driver-info">
              <img src={selectedTrip.driver.avatar} alt="driver" className="driver-avatar" />
              <div className="driver-rating-badge">
                <span>⭐ {selectedTrip.driver.rating}</span>
              </div>
            </div>
            <div className="driver-text">
              <h3>{selectedTrip.driver.name}</h3>
              <p>В Uklon: {selectedTrip.driver.experience}</p>
              <p>Поїздок: {selectedTrip.driver.tripsCount}</p>
            </div>
          </div>

          {/* Блок машины */}
          <div className="car-section">
            <div className="car-text">
              <h4>{selectedTrip.car.model}</h4>
              <p>({selectedTrip.car.category})</p>
            </div>
            <div className="car-number-plate">
              {selectedTrip.car.number}
            </div>
          </div>

          {/* Блок оплаты */}
          <div className="payment-section">
            <div className="payment-title">Спосіб оплати</div>
            <div className="payment-value">
              <span className="apple-pay-icon">{selectedTrip.payment === 'Apple Pay' ? ' Pay' : '💵'}</span>
              <span>{selectedTrip.payment}</span>
            </div>
            <div className="total-price">{selectedTrip.price}</div>
          </div>

          {/* Маршрут */}
          <div className="details-route">
            <div className="route-title">Маршрут</div>
            <div className="route-container">
              <div className="route-line">
                <div className="dot grey"></div>
                <div className="line"></div>
                <div className="dot grey"></div>
              </div>
              <div className="route-addresses">
                <p className="address">{selectedTrip.from}</p>
                <p className="address">{selectedTrip.to}</p>
              </div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="details-actions">
            <button className="btn-secondary">В зворотній бік</button>
            <button className="btn-primary">Повторити поїздку</button>
          </div>

          {/* Меню помощи снизу */}
          <div className="help-menu">
            <div className="help-title">Допомога</div>
            <div className="help-item">Підтримка <span>›</span></div>
            <div className="help-item">Загублені речі <span>›</span></div>
            <div className="help-item error-text">Повідомити про ДТП <span>›</span></div>
          </div>
        </div>
      )}
    </div>
  );
}
