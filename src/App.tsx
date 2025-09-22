import React, { useEffect, useState, Suspense, lazy } from 'react';
import { initializeVerticeScripts } from './scripts/verticeScripts';
import './styles/PaginaConfirmacao.css';

// Componentes críticos carregados imediatamente
import Header from './components/Header';
import NavigationSystem from './components/NavigationSystem';
import Hero from './components/Hero';

// Componentes não críticos carregados com lazy loading
const About = lazy(() => import('./components/About'));
const Problema = lazy(() => import('./components/Problema'));
const Solucao = lazy(() => import('./components/Solucao'));
const ComoFunciona = lazy(() => import('./components/ComoFunciona'));
const CTA = lazy(() => import('./components/CTA'));
const ProvaSocial = lazy(() => import('./components/ProvaSocial'));
const BonusExclusivos = lazy(() => import('./components/BonusExclusivos'));
const Garantias = lazy(() => import('./components/Garantias'));
const Investimento = lazy(() => import('./components/Investimento'));
const Escassez = lazy(() => import('./components/Escassez'));
const Footer = lazy(() => import('./components/Footer'));
const PopupFormulario = lazy(() => import('./components/PopupFormulario'));
const PaginaConfirmacao = lazy(() => import('./components/PaginaConfirmacao'));

type PageType = 'home' | 'confirmacao';

// Componente de loading otimizado
const LoadingSpinner: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    opacity: 0.7
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #007bff',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    // Inicializar scripts originais após o componente ser montado
    initializeVerticeScripts();
  }, []);

  const openPopup = (): void => {
    setIsPopupOpen(true);
  };

  const closePopup = (): void => {
    setIsPopupOpen(false);
  };

  const goToConfirmacao = (): void => {
    setIsPopupOpen(false);
    setCurrentPage('confirmacao');
    window.scrollTo(0, 0);
  };

  const voltarParaHome = (): void => {
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
          
          <Suspense fallback={<LoadingSpinner />}>
            <About />
            <Problema />
            <Solucao />
            <ComoFunciona />
            <CTA />
            <ProvaSocial />
            <BonusExclusivos />
            <Garantias />
            <Investimento onOpenPopup={openPopup} />
            <Escassez onOpenPopup={openPopup} />
            <Footer />
          </Suspense>
          
          {isPopupOpen && (
            <Suspense fallback={<LoadingSpinner />}>
              <PopupFormulario 
                isOpen={isPopupOpen}
                onClose={closePopup}
                onSubmitSuccess={goToConfirmacao}
              />
            </Suspense>
          )}
        </>
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <PaginaConfirmacao onVoltar={voltarParaHome} />
        </Suspense>
      )}
    </div>
  );
};

export default App;