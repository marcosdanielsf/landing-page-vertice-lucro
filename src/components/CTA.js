import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    alert('Obrigado! Entraremos em contato em breve.');
  };

  const benefits = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Consultoria Gratuita',
      description: 'Análise completa do seu negócio sem custo'
    },
    {
      icon: 'fas fa-clock',
      title: 'Resposta em 24h',
      description: 'Retorno garantido em até 24 horas'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Sem Compromisso',
      description: 'Conversa inicial sem obrigações'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Resultados Garantidos',
      description: 'Metodologia comprovada por 500+ empresas'
    }
  ];

  const urgencyFactors = [
    'Apenas 10 vagas disponíveis este mês',
    'Bônus exclusivo para os primeiros 5 clientes',
    'Desconto de 30% válido até o final da semana',
    'Consultoria gratuita por tempo limitado'
  ];

  return (
    <section className="cta">
      {/* Background Pattern */}
      <div className="cta-background">
        <div className="cta-bg-pattern cta-bg-pattern-1"></div>
        <div className="cta-bg-pattern cta-bg-pattern-2"></div>
        <div className="cta-bg-pattern cta-bg-pattern-3"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <div className="cta-grid">
            {/* Content */}
            <div className="cta-info">
              <div className="cta-badge">
                <i className="fas fa-rocket"></i>
                <span>Transforme Seu Negócio</span>
              </div>
              
              <h2 className="cta-title">
                Pronto para acelerar
                <span className="cta-highlight">seu crescimento?</span>
              </h2>
              
              <p className="cta-description">
                Agende uma consultoria gratuita e descubra como nossa metodologia 
                pode transformar seu negócio em uma máquina de vendas.
              </p>
            
              {/* Benefits */}
              <div className="cta-benefits">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="cta-benefit"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="cta-benefit-icon">
                      <i className={benefit.icon}></i>
                    </div>
                    <div className="cta-benefit-content">
                      <h4 className="cta-benefit-title">{benefit.title}</h4>
                      <p className="cta-benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Urgency Section */}
              <div className="cta-urgency">
                <h4 className="cta-urgency-title">
                  <i className="fas fa-fire"></i>
                  Oferta Limitada
                </h4>
                <ul className="cta-urgency-list">
                  {urgencyFactors.map((factor, index) => (
                    <li key={index} className="cta-urgency-item">
                      <i className="fas fa-check"></i>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Social Proof */}
              <div className="cta-stats">
                <div className="cta-stat">
                  <div className="cta-stat-number">500+</div>
                  <div className="cta-stat-label">Empresas</div>
                </div>
                <div className="cta-stat">
                  <div className="cta-stat-number">98%</div>
                  <div className="cta-stat-label">Satisfação</div>
                </div>
                <div className="cta-stat">
                  <div className="cta-stat-number">300%</div>
                  <div className="cta-stat-label">ROI Médio</div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="cta-form-container">
              <div className="cta-form">
                <div className="cta-form-header">
                  <h3 className="cta-form-title">
                    Consultoria Gratuita
                  </h3>
                  <p className="cta-form-subtitle">
                    Preencha o formulário e nossa equipe entrará em contato
                  </p>
                </div>
              
                <form onSubmit={handleSubmit} className="cta-form-fields">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="form-textarea"
                      placeholder="Conte-nos sobre seu negócio e seus objetivos..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-full"
                  >
                    <span>Agendar Consultoria Gratuita</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  
                  <p className="form-disclaimer">
                    Ao enviar este formulário, você concorda com nossa política de privacidade 
                    e autoriza o contato da nossa equipe.
                  </p>
                </form>
                
                {/* Trust Indicators */}
                <div className="cta-trust-indicators">
                  <div className="trust-indicator">
                    <i className="fas fa-shield-alt"></i>
                    Dados Seguros
                  </div>
                  <div className="trust-indicator">
                    <i className="fas fa-clock"></i>
                    Resposta em 24h
                  </div>
                  <div className="trust-indicator">
                    <i className="fas fa-gift"></i>
                    100% Gratuito
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

export default CTA;