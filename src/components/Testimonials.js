import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CEO',
      company: 'TechStart Solutions',
      image: 'https://ui-avatars.com/api/?name=Carlos+Silva&background=6366f1&color=fff&size=150',
      content: 'A Vertex transformou completamente nossa abordagem de vendas. Em apenas 3 meses, aumentamos nosso faturamento em 280% e nossa equipe está muito mais motivada.',
      rating: 5,
      results: '+280% Faturamento'
    },
    {
      name: 'Ana Rodrigues',
      position: 'Diretora Comercial',
      company: 'Inovação Digital',
      image: 'https://ui-avatars.com/api/?name=Ana+Rodrigues&background=6366f1&color=fff&size=150',
      content: 'O suporte da equipe Vertex é excepcional. Eles não apenas entregaram resultados, mas nos ensinaram a manter o crescimento sustentável a longo prazo.',
      rating: 5,
      results: '+150% Conversão'
    },
    {
      name: 'Roberto Santos',
      position: 'Fundador',
      company: 'Growth Marketing',
      image: 'https://ui-avatars.com/api/?name=Roberto+Santos&background=6366f1&color=fff&size=150',
      content: 'Metodologia incrível! A Vertex nos ajudou a estruturar processos que não tínhamos e hoje somos uma empresa muito mais organizada e lucrativa.',
      rating: 5,
      results: '+320% ROI'
    },
    {
      name: 'Mariana Costa',
      position: 'CEO',
      company: 'E-commerce Plus',
      image: 'https://ui-avatars.com/api/?name=Mariana+Costa&background=6366f1&color=fff&size=150',
      content: 'Investimento que se pagou em menos de 2 meses. A equipe da Vertex é extremamente profissional e os resultados falam por si só.',
      rating: 5,
      results: '+200% Vendas'
    }
  ];

  const stats = [
    { number: '98%', label: 'Taxa de Satisfação', icon: 'fas fa-heart' },
    { number: '500+', label: 'Clientes Atendidos', icon: 'fas fa-users' },
    { number: '300%', label: 'ROI Médio', icon: 'fas fa-chart-line' },
    { number: '24/7', label: 'Suporte Disponível', icon: 'fas fa-headset' }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <i className="fas fa-quote-left"></i>
            <span>Depoimentos</span>
          </div>
          
          <h2 className="section-title">
            O que nossos clientes
            <span className="text-gradient">dizem sobre nós</span>
          </h2>
          
          <p className="section-description">
            Mais de 500 empresas já transformaram seus negócios conosco. 
            Veja os resultados reais de quem confia na Vertex Solutions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="testimonials-main">
          <div className="testimonial-featured">
            {/* Background Pattern */}
            <div className="testimonial-bg-pattern testimonial-bg-pattern-1"></div>
            <div className="testimonial-bg-pattern testimonial-bg-pattern-2"></div>
            
            <div className="testimonial-content">
              {/* Quote Icon */}
              <div className="testimonial-quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="testimonial-text">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              
              {/* Rating */}
              <div className="testimonial-rating">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              
              {/* Author Info */}
              <div className="testimonial-author">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="testimonial-author-image"
                />
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="testimonial-author-position">
                    {testimonials[activeTestimonial].position} • {testimonials[activeTestimonial].company}
                  </p>
                  <div className="testimonial-result-badge">
                    <i className="fas fa-chart-line"></i>
                    {testimonials[activeTestimonial].results}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="testimonials-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`testimonial-nav-dot ${
                index === activeTestimonial 
                  ? 'active' 
                  : ''
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${
                index === activeTestimonial ? 'active' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="testimonial-card-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-card-image"
                />
                <div className="testimonial-card-info">
                  <h5 className="testimonial-card-name">{testimonial.name}</h5>
                  <p className="testimonial-card-company">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="testimonial-card-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              
              <p className="testimonial-card-content">
                {testimonial.content}
              </p>
              
              <div className="testimonial-card-result">
                {testimonial.results}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card"
            >
              <div className="stat-icon">
                <i className={stat.icon}></i>
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

        {/* CTA Section */}
        <div className="testimonials-cta">
          <div className="testimonials-cta-content">
            {/* Background Pattern */}
            <div className="testimonials-cta-bg">
              <div className="testimonials-cta-bg-pattern testimonials-cta-bg-pattern-1"></div>
              <div className="testimonials-cta-bg-pattern testimonials-cta-bg-pattern-2"></div>
            </div>
            
            <div className="testimonials-cta-inner">
              <h3 className="testimonials-cta-title">
                Pronto para ser nosso próximo caso de sucesso?
              </h3>
              <p className="testimonials-cta-description">
                Junte-se a mais de 500 empresas que já transformaram seus negócios 
                com a metodologia Vertex. Resultados garantidos ou seu dinheiro de volta.
              </p>
              
              <div className="testimonials-cta-buttons">
                <a href="#contact" className="btn btn-primary btn-lg">
                  <span>Começar Agora</span>
                  <i className="fas fa-rocket"></i>
                </a>
                <a href="#services" className="btn btn-secondary btn-lg">
                  <span>Ver Planos</span>
                  <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;