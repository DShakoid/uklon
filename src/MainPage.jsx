import React, { useState } from 'react';
import './MainPage.css';

export default function MainPage() {
  const [step, setStep] = useState(1); // 1: Выбор адреса, 2: Выбор тарифа
  const [selectedTariff, setSelectedTariff] = useState('standard');

  const tariffs = [
    { id: 'standard', name: 'Стандарт', price: '120 ₴', time: '3 мин', icon: '🚗' },
    { id: 'comfort', name: 'Комфорт', price: '165 ₴', time: '2 мин', icon: '📱' },
    { id: 'business', name: 'Бизнес', price: '240 ₴', time: '5 min', icon: '💼' }
  ];

  return (
    <div className="main-page">
      {/* КАРТА (Имитация ночной карты Уклона) */}
      <div className="map-mock">
        <div className="map-route-line"></div>
        <div className="map-pin pin-a">А</div>
        <div className="map-pin pin-b">Б</div>
        <div className="map-car">🚕</div>
      </div>

      {/* ИНТЕРФЕЙС ЗАКАЗА (Нижняя плашка) */}
      <div className="order-sheet">
        <div className="drag-handle"></div>

        {step === 1 ? (
          /* ШАГ 1: КУДА ЕДЕМ */
          <div className="address-selection">
            <h3 className="sheet-title">Куда едем?</h3>
            <div className="input-block">
              <div className="input-row">
                <span className="dot yellow"></span>
                <input type="text" placeholder="Откуда: Твой адрес..." defaultValue="Харківське шосе, 17А" />
              </div>
              <div className="input-divider"></div>
              <div className="input-row">
                <span className="dot white"></span>
                <input type="text" placeholder="Куда: Пункт назначения" onClick={() => setStep(2)} />
              </div>
            </div>
            
            {/* Быстрые закладки (Любимые адреса) */}
            <div className="favorite-addresses">
              <div className="fav-item" onClick={() => setStep(2)}>🏠 <span>Дом</span></div>
              <div className="fav-item" onClick={() => setStep(2)}>💼 <span>Работа</span></div>
            </div>
          </div>
        ) : (
          /* ШАГ 2: ВЫБОР ТАРИФА И КНОПКА ЗАКАЗА */
          <div className="tariff-selection">
            <div className="back-to-addresses" onClick={() => setStep(1)}>← Изменить маршрут</div>
            
            <div className="tariffs-list">
              {tariffs.map((t) => (
                <div 
                  key={t.id} 
                  className={`tariff-card ${selectedTariff === t.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTariff(t.id)}
                >
                  <div className="tariff-icon">{t.icon}</div>
                  <div className="tariff-info">
                    <h4>{t.name}</h4>
                    <p>{t.time}</p>
                  </div>
                  <div className="tariff-price">{t.price}</div>
                </div>
              ))}
            </div>

            {/* Детали оплаты */}
            <div className="payment-bar">
              <div className="pay-method">💵 Наличные</div>
              <div className="promo-btn">🎁 Промокод</div>
            </div>

            {/* Главная кнопка */}
            <button className="order-submit-btn">
              Заказать {tariffs.find(t => t.id === selectedTariff).name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
