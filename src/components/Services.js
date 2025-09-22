import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Starter',
      subtitle: 'Para Pequenas Empresas',
      price: 'R$ 2.997',
      period: '/mês',
      description: 'Ideal para empresas que estão começando sua jornada de crescimento.',
      features: [
        'Análise completa do negócio',
        'Estratégia de vendas personalizada',
        'Treinamento básico da equipe',
        'Dashboard de acompanhamento',
        'Suporte via email',
        '1 reunião mensal'
      ],
      popular: false,
      color: 'from-accent-yellow to-primary-orange'
    },
    {
      title: 'Professional',
      subtitle: 'Para Empresas em Crescimento',
      price: 'R$ 4.997',
      period: '/mês',
      description: 'Solução completa para empresas que buscam acelerar o crescimento.',
      features: [
        'Tudo do plano Starter',
        'Automação de processos',
        'Treinamento avançado',
        'Consultoria semanal',
        'Suporte prioritário 24/7',
        'Análise de concorrência',
        'Otimização de conversão'
      ],
      popular: true,
      color: 'from-primary-orange to-accent-orange-1'
    },
    {
      title: 'Enterprise',
      subtitle: 'Para Grandes Empresas',
      price: 'Sob Consulta',
      period: '',
      description: 'Solução personalizada para empresas com necessidades específicas.',
      features: [
        'Tudo do plano Professional',
        'Estratégia personalizada',
        'Equipe dedicada',
        'Implementação customizada',
        'Integração com sistemas',
        'Consultoria executiva',
        'Garantia de resultados'
      ],
      popular: false,
      color: 'from-secondary-brown to-accent-orange-2'
    }
  ];

  const processes = [
    {
      step: '01',
      title: 'Diagnóstico',
      description: 'Análise completa do seu negócio, identificando oportunidades e gargalos.',
      icon: 'fas fa-search'
    },
    {
      step: '02',
      title: 'Estratégia',
      description: 'Desenvolvimento de plano personalizado baseado nos seus objetivos.',
      icon: 'fas fa-lightbulb'
    },
    {
      step: '03',
      title: 'Implementação',
      description: 'Execução das estratégias com acompanhamento contínuo da nossa equipe.',
      icon: 'fas fa-cogs'
    },
    {
      step: '04',
      title: 'Otimização',
      description: 'Monitoramento e ajustes constantes para maximizar os resultados.',
      icon: 'fas fa-chart-line'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <div className="services-badge">
            <i className="fas fa-briefcase"></i>
            <span>Nossos Serviços</span>
          </div>
          
          <h2 className="services-title">
            Planos que se adaptam
            <span className="services-title-highlight">ao seu negócio</span>
          </h2>
          
          <p className="services-description">
            Escolha o plano ideal para acelerar o crescimento da sua empresa. 
            Todos incluem nossa metodologia comprovada e suporte especializado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${service.popular ? 'service-card-popular' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="service-popular-badge">
                  <div className="service-popular-label">
                    Mais Popular
                  </div>
                </div>
              )}
              
              {/* Header */}
              <div className="service-header">
                <div className={`service-icon bg-gradient-to-br ${service.color}`}>
                  <i className="fas fa-rocket"></i>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                
                <div className="service-price">
                  <span className="service-price-value">{service.price}</span>
                  <span className="service-price-period">{service.period}</span>
                </div>
                
                <p className="service-description">{service.description}</p>
              </div>
              
              {/* Features */}
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="service-feature">
                    <div className="service-feature-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="service-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <a 
                href="#contact" 
                className={`service-cta ${service.popular ? 'btn btn-primary' : 'btn btn-outline'}`}
              >
                <span>Escolher Plano</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="services-process">
          <div className="services-process-header">
            <h3 className="services-process-title">
              Como Funciona Nosso Processo
            </h3>
            <p className="services-process-description">
              Metodologia testada e aprovada por mais de 500 empresas
            </p>
          </div>
          
          <div className="services-process-grid">
            {processes.map((process, index) => (
              <div 
                key={index}
                className="process-step"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="process-step-icon-wrapper">
                  <div className="process-step-icon">
                    <i className={process.icon}></i>
                  </div>
                  <div className="process-step-number">
                    {process.step}
                  </div>
                </div>
                
                <h4 className="process-step-title">{process.title}</h4>
                <p className="process-step-description">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div className="services-cta-content">
            <h3 className="services-cta-title">
              Não tem certeza qual plano escolher?
            </h3>
            <p className="services-cta-description">
              Agende uma consultoria gratuita e nossos especialistas irão recomendar 
              a melhor solução para o seu negócio.
            </p>
            
            <div className="services-cta-buttons">
              <a href="#contact" className="btn btn-primary btn-lg">
                <span>Consultoria Gratuita</span>
                <i className="fas fa-calendar-alt"></i>
              </a>
              <a href="#testimonials" className="btn btn-secondary btn-lg">
                <span>Ver Depoimentos</span>
                <i className="fas fa-comments"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;