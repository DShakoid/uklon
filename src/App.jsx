import React, { useState } from 'react';
import Layout from './Layout';
import HistoryPage from './HistoryPage';
import MainPage from './MainPage';

function App() {
  const [activePage, setActivePage] = useState('history'); // По умолчанию открываем историю

  const getPageTitle = () => {
    if (activePage === 'history') return 'Поездки';
    if (activePage === 'main') return 'Заказ такси';
    return 'Uklon';
  };

  return (
    <Layout 
      pageTitle={getPageTitle()} 
      activePage={activePage} 
      setActivePage={setActivePage}
    >
      {activePage === 'history' && <HistoryPage />}
      {activePage === 'main' && <MainPage />}
    </Layout>
  );
}

export default App;
