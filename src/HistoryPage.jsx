import React from 'react';
import './HistoryPage.css';

export default function HistoryPage() {
  const stats = [
    { label: 'Всего поездок', value: 414, icon: '🚙' },
    { label: 'Выполненных', value: 393, icon: '✅' },
    { label: 'Отменено', value: 21, icon: '❌' }
  ];

  const trips = [
    {
      id: 1,
      date: '25 мая 2026 г., 13:04',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Місце посадки (Київ, Каховська вулиця, 62А)',
      price: '303 ₴',
      status: 'ВЫПОЛНЕН'
    },
    {
      id: 2,
      date: '4 апр. 2026 г., 22:19',
      from: 'Сосницька вулиця (Київ), 21',
      to: 'Юрія Шумського вулиця (Київ), 1',
      price: '222 ₴',
      status: 'ВЫПОЛНЕН'
    }
  ];

  return (
    <div className="history-page">
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
          <div key={trip.id} className="trip-card">
            <div className="trip-card-header">
              <span className="trip-date">{trip.date}</span>
              <button className="more-btn">⋮</button>
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
                <span className="pay-method">💵</span>
              </div>
              <span className="status-badge">{trip.status}</span>
            </div>

            <div className="trip-actions">
              <button className="action-btn">Обратно</button>
              <button className="action-btn">Повторить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
