import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Empresas Transformadas', icon: 'fas fa-building' },
    { number: '300%', label: 'ROI Médio Alcançado', icon: 'fas fa-chart-line' },
    { number: '98%', label: 'Taxa de Satisfação', icon: 'fas fa-heart' },
    { number: '5 Anos', label: 'de Experiência', icon: 'fas fa-award' }
  ];

  const achievements = [
    {
      title: 'Metodologia Comprovada',
      description: 'Framework exclusivo desenvolvido ao longo de 5 anos de experiência no mercado.',
      icon: 'fas fa-medal'
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Acompanhamento em tempo real com métricas claras e objetivos bem definidos.',
      icon: 'fas fa-target'
    },
    {
      title: 'Equipe Especializada',
      description: 'Profissionais certificados com expertise em vendas, marketing e gestão.',
      icon: 'fas fa-users-cog'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-container">
          {/* Content */}
          <div className="about-content">
            <div className="about-badge">
              <i className="icon icon-sm fas fa-info-circle"></i>
              <span className="badge-text">Sobre a Vertex</span>
            </div>
            
            <h2 className="about-title">
              Transformamos
              <span className="about-title-accent">Negócios em</span>
              <span className="about-title-highlight">Máquinas de Vendas</span>
            </h2>
            
            <p className="about-description">
              A Vertex Solutions nasceu da necessidade de empresas que buscam crescimento 
              acelerado e sustentável. Nossa missão é transformar negócios através de 
              estratégias inovadoras, tecnologia de ponta e metodologias comprovadas.
            </p>
            
            <p className="about-description">
              Com mais de 500 empresas transformadas e um ROI médio de 300%, somos 
              referência em aceleração de negócios no mercado brasileiro.
            </p>
            
            {/* Achievements */}
            <div className="about-achievements">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="achievement-item"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="achievement-icon">
                    <i className={`${achievement.icon} icon icon-md`}></i>
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>Conhecer Nossa Metodologia</span>
              <i className="fas fa-arrow-right icon icon-sm"></i>
            </a>
          </div>
          
          {/* Visual Content */}
          <div className="about-visual">
            {/* Stats Grid */}
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="stat-icon">
                    <i className={`${stat.icon} icon icon-md`}></i>
                  </div>
                  <div className="stat-number">
                    {stat.number}
                  </div>
                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Main Visual Card */}
            <div className="about-certification">
              <div className="about-certification-background"></div>
              
              <div className="about-certification-content">
                <div className="certification-header">
                  <div className="certification-icon">
                    <i className="fas fa-trophy icon icon-lg"></i>
                  </div>
                  <div className="certification-info">
                    <h3 className="certification-title">Certificação Vertex</h3>
                    <p className="certification-subtitle">Metodologia Exclusiva</p>
                  </div>
                </div>
                
                <p className="certification-description">
                  Nossa metodologia proprietária combina as melhores práticas de vendas, 
                  marketing digital e gestão empresarial para garantir resultados excepcionais.
                </p>
                
                <div className="certification-footer">
                  <div className="certification-validation">
                    <div className="validation-icon">
                      <i className="fas fa-check icon icon-xs"></i>
                    </div>
                    <span className="validation-text">Metodologia Validada</span>
                  </div>
                  <div className="certification-efficacy">
                    <div className="efficacy-number">100%</div>
                    <div className="efficacy-label">Eficácia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;