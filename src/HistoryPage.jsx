import React, { useState } from 'react';
import './HistoryPage.css';
import tolyanAvatar from './img/tolyan.png'; // Проверь правильность пути относительно файла!
import baxy from './img/baxy.png';

export default function HistoryPage() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const stats = [
    {
      label: "Всього поїздок",
      value: 240,
      icon: "🚗",
      color: "#2db7d2"
    },
    {
      label: "Завершених",
      value: 183,
      icon: "✅",
      color: "#00ca80"
    },
    {
      label: "Скасовано",
      value: 57,
      icon: "❌",
      color: "#BB271A"
    }
  ];
  
  const trips = [
    {
      id: 1,
      date: '27 черв. 2026 г., 23:20',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '890 ₴',
      status: 'ВИКОНАНО'
    }, 
    {
      id: 2,
      date: '26 черв. 2026 г., 22:46',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '765 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 3,
      date: '21 черв. 2026 г., 23:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '880 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 4,
      date: '20 черв. 2026 г., 23:08',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '960 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 5,
      date: '20 черв. 2026 г., 23:08',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '710 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 6,
      date: '4 черв. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '666 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 8,
      date: '4 черв. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Київ, Каховська вулиця, 62А',
      price: '777 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 9,
      date: '4 черв. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '999 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 10,
      date: '4 черв. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '1010 ₴',
      status: 'ВИКОНАНО'
    }
  ];

  // Данные шаблона Uklon для детального экрана
  const templateDriver = {
    name: 'Анатолій',
    experience: 'Більше 1 року',
    tripsCount: 921,
    rating: '4.96',
    avatar: tolyanAvatar
  };

  const templateCar = {
    model: 'Чорний Mitsubishi Lancer',
    category: 'Стандарт',
    number: 'СA2***Н*'
  };

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
                  <span>{item.icon}</span>
                </div>
                <h2>{item.value}</h2>
              </div>
            ))}
          </div>

          {/* Список поездок */}
          <div className="trips-list">
            {trips.map((trip) => (
              <div key={trip.id} className="trip-card" onClick={() => setSelectedTrip(trip)} style={{ cursor: 'pointer' }}>
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
                    <img src={baxy} alt="Cash" className="apple-pay-icon" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  </div>
                  <span className="status-badge">{trip.status}</span>
                </div>

                <div className="trip-actions">
                  <button className="action-btn" onClick={(e) => e.stopPropagation()}>В зворотній бік</button>
                  <button className="action-btn" onClick={(e) => e.stopPropagation()}>Повторити</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* ЭКРАН ДЕТАЛЕЙ ПОЕЗДКИ (ПО ТВОЕМУ ШАБЛОНУ ИЗ УКЛОН) */
        <div className="trip-details">
          <div className="details-header">
            <button className="back-btn" onClick={() => setSelectedTrip(null)}>✕</button>
            <button className="pdf-btn">📄</button>
          </div>

          <h1 className="details-date">{selectedTrip.date}</h1>

          {/* Блок водителя */}
          <div className="driver-section">
            <div className="driver-info">
              <img src={templateDriver.avatar} alt="driver" className="driver-avatar" />
              <div className="driver-rating-badge">
                <span>⭐ {templateDriver.rating}</span>
              </div>
            </div>
            <div className="driver-text">
              <h3>{templateDriver.name}</h3>
              <p>В Uklon: {templateDriver.experience}</p>
              <p>Поїздок: {templateDriver.tripsCount}</p>
            </div>
          </div>

          {/* Блок машины */}
          <div className="car-section">
            <div className="car-text">
              <h4>{templateCar.model}</h4>
              <p>({templateCar.category})</p>
            </div>
            <div className="car-number-plate">
              {templateCar.number}
            </div>
          </div>

          {/* Блок оплаты */}
          <div className="payment-section">
            <div className="payment-title">Спосіб оплати</div>
            <div className="payment-value">
              <span className="apple-pay-icon">baxy</span>
              <span>Готівка</span>
            </div>
            <div className="total-price">{selectedTrip.price}</div>
          </div>

          {/* Маршрут */}
          <div className="details-route">
            <div className="route-title">Маршрут</div>
            <div className="route-container">
              <div className="route-line">
                <div className="dot yellow"></div>
                <div className="line"></div>
                <div className="dot white"></div>
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
          <div className="help-menu-block">
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
