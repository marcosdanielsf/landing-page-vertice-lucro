import React, { useEffect, useState } from 'react';

const Hero = ({ onOpenPopup }) => {
  const [animatedStats, setAnimatedStats] = useState({
    mentors: 0,
    revenue: 0,
    increase: 0
  });

  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(847, 'mentors');
          animateCounter(450, 'revenue'); // $450K+ converted from R$ 2.3M
          animateCounter(312, 'increase');
          observer.disconnect();
        }
      });
    });

    const statsElement = document.querySelector('.hero-stats');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background-overlay"></div>
      <div className="hero-particles"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🚀</span>
          <span className="badge-text">Vertex Sales Solutions</span>
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-main">O Sistema de Lucro</span><br />
          <span className="hero-title-accent">Vertex</span>
        </h1>
        
        <h2 className="hero-subtitle">Transforme sua experiência em um sistema de vendas lucrativas</h2>
        
        <h3 className="hero-headline">Reconhece Essas Frustrações?</h3>
        
        <p className="hero-description">
          Sabemos como é frustrante ter experiência em vendas, mas não ter um sistema que converta esse conhecimento em resultados consistentes e previsíveis.
        </p>
        
        <div className="hero-cta">
          <button 
            className="btn btn-primary hero-cta-primary"
            onClick={onOpenPopup}
          >
            <span className="btn-icon">⚡</span>
            Inicie Sua Transformação
          </button>
          <button 
            className="btn btn-secondary hero-cta-secondary"
            onClick={onOpenPopup}
          >
            <span className="btn-icon">📊</span>
            Saiba Mais Sobre Nosso Método
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{animatedStats.revenue}</div>
            <div className="stat-label">Receita Gerada</div>
            <div className="stat-icon">💰</div>
          </div>
          <div className="stat-item">
             <div className="stat-number">{animatedStats.clients}</div>
             <div className="stat-label">Clientes Satisfeitos</div>
             <div className="stat-icon">👥</div>
           </div>
           <div className="stat-item">
             <div className="stat-number">{animatedStats.success}</div>
             <div className="stat-label">Taxa de Sucesso</div>
             <div className="stat-icon">📈</div>
           </div>
        </div>
        
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>100% Seguro</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <span>5 Estrelas</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🎯</span>
            <span>Resultados Comprovados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;