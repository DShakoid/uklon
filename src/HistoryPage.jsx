import React from 'react';
import './HistoryPage.css';

export default function HistoryPage() {
  const stats = [
  {
    label: "Всього поїздок",
    value: 240,
    icon: "directions_car",
    color: "#2db7d2"
  },
  {
    label: "Завершених",
    value: 183,
    icon: "check_circle",
    color: "#00ca80"
  },
  {
    label: "Скасовано",
    value: 57,
    icon: "cancel",
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
      price: '101010 ₴',
      status: 'ВИКОНАНО'
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
              <button className="action-btn">В зворотній бік</button>
              <button className="action-btn">Повторити</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
