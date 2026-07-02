import React from 'react';
import './HistoryPage.css';

export default function HistoryPage() {
  const stats = [
    { 
      label: 'Всього поїздок', 
      value: 416, 
      // Просто убираем кавычки вокруг SVG
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2db7d2"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h100v-80h240v80h100q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/>'</svg> 
    },
    { 
      label: 'Завершених', 
      value: 393, 
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ca80"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> 
    },
    { 
      label: 'Скасовано', 
      value: 21, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>' 
    }
  ];

 
  const trips = [
    {
      id: 1,
      date: '25 трав. 2026 г., 13:04',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Місце посадки (Київ, Каховська вулиця, 62А)',
      price: '303 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 2,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '222 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 3,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '333 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 4,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '444 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 5,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '555 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 6,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '666 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 8,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '777 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 9,
      date: '4 трав. 2026 г., 22:19',
      from: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      to: 'Паркінг ВДНГ (Київ, Академіка Глушкова проспект)',
      price: '999 ₴',
      status: 'ВИКОНАНО'
    },
    {
      id: 10,
      date: '4 трав. 2026 г., 22:19',
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
