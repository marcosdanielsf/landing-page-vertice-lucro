import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-rocket',
      title: 'Aceleração de Vendas',
      description: 'Metodologias comprovadas para aumentar suas vendas em até 300% em 90 dias.',
      color: 'from-primary-orange to-accent-orange-1'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Análise de Performance',
      description: 'Dashboards em tempo real para monitorar e otimizar seus resultados continuamente.',
      color: 'from-accent-yellow to-primary-orange'
    },
    {
      icon: 'fas fa-users',
      title: 'Treinamento de Equipe',
      description: 'Capacitação completa da sua equipe com as melhores práticas do mercado.',
      color: 'from-secondary-brown to-accent-orange-2'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Automação Inteligente',
      description: 'Sistemas automatizados que otimizam processos e reduzem custos operacionais.',
      color: 'from-accent-orange-1 to-accent-yellow'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Garantia de Resultados',
      description: 'Compromisso com resultados mensuráveis ou seu dinheiro de volta.',
      color: 'from-primary-orange to-secondary-brown'
    },
    {
      icon: 'fas fa-headset',
      title: 'Suporte 24/7',
      description: 'Acompanhamento contínuo com nossa equipe de especialistas dedicados.',
      color: 'from-accent-yellow to-accent-orange-1'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Header */}
        <div className="features-header">
          <div className="features-badge">
            <i className="icon icon-sm fas fa-star"></i>
            <span className="badge-text">Nossos Diferenciais</span>
          </div>
          
          <h2 className="features-title">
            Por que escolher a
            <span className="features-title-accent">Vertex Solutions?</span>
          </h2>
          
          <p className="features-description">
            Combinamos tecnologia de ponta, metodologias comprovadas e expertise de mercado 
            para entregar resultados excepcionais para o seu negócio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="feature-icon">
                <i className={`${feature.icon} icon icon-lg`}></i>
              </div>
              
              {/* Content */}
              <h3 className="feature-title">
                {feature.title}
              </h3>
              
              <p className="feature-description">
                {feature.description}
              </p>
              
              {/* Learn More Link */}
              <a href="#contact" className="feature-link">
                <span>Saiba mais</span>
                <i className="fas fa-arrow-right icon icon-xs"></i>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="features-cta">
          <div className="features-cta-content">
            <div className="features-cta-background"></div>
            
            <div className="features-cta-inner">
              <h3 className="features-cta-title">
                Pronto para transformar seu negócio?
              </h3>
              <p className="features-cta-description">
                Agende uma consultoria gratuita e descubra como podemos acelerar 
                o crescimento da sua empresa em até 300%.
              </p>
              
              <div className="features-cta-buttons">
                <a href="#contact" className="btn btn-primary btn-lg">
                  <span>Consultoria Gratuita</span>
                  <i className="fas fa-calendar-alt icon icon-sm"></i>
                </a>
                <a href="#about" className="btn btn-secondary btn-lg">
                  <span>Ver Casos de Sucesso</span>
                  <i className="fas fa-trophy icon icon-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;