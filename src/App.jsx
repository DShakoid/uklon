import React, { useState } from 'react';
import Layout from './Layout';
import HistoryPage from './HistoryPage';
import MainPage from './MainPage';

function App() {
  const [activePage, setActivePage] = useState('main'); // По умолчанию открываем главную

  return (
    <Layout 
      // Если страница главная ('main'), передаем пустую строку, чтобы убрать текст. 
      // Если 'history' — выведется «Поездки».
      pageTitle={activePage === 'main' ? '' : ''} 
      activePage={activePage} 
      setActivePage={setActivePage}
    >
      {activePage === 'history' && <HistoryPage />}
      {activePage === 'main' && <MainPage />}
    </Layout>
  );
}

export default App;
