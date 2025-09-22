import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NavigationSystem from './components/NavigationSystem';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Solucao from './components/Solucao';
import ComoFunciona from './components/ComoFunciona';
import ProvaSocial from './components/ProvaSocial';
import BonusExclusivos from './components/BonusExclusivos';
import Garantias from './components/Garantias';
import Investimento from './components/Investimento';
import Escassez from './components/Escassez';
import Footer from './components/Footer';
import PopupFormulario from './components/PopupFormulario';
import PaginaConfirmacao from './components/PaginaConfirmacao';
import { initializeVerticeScripts } from './scripts/verticeScripts';
import './styles/PaginaConfirmacao.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' ou 'confirmacao'

  useEffect(() => {
    // Inicializar scripts originais após o componente ser montado
    initializeVerticeScripts();
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const goToConfirmacao = () => {
    setIsPopupOpen(false);
    setCurrentPage('confirmacao');
    window.scrollTo(0, 0);
  };

  const voltarParaHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <>
          <Header onOpenPopup={openPopup} />
          <NavigationSystem />
          <Hero onOpenPopup={openPopup} />
          <Problema />
          <Solucao />
          <ComoFunciona />
          <ProvaSocial />
          <BonusExclusivos />
          <Garantias />
          <Investimento onOpenPopup={openPopup} />
          <Escassez onOpenPopup={openPopup} />
          <Footer />
          
          {isPopupOpen && (
            <PopupFormulario 
              isOpen={isPopupOpen}
              onClose={closePopup}
              onSubmitSuccess={goToConfirmacao}
            />
          )}
        </>
      ) : (
        <PaginaConfirmacao onVoltar={voltarParaHome} />
      )}
    </div>
  );
}

export default App;