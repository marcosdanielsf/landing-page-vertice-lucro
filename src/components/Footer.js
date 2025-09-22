import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossos Serviços', href: '#services' },
      { name: 'Metodologia', href: '#features' },
      { name: 'Casos de Sucesso', href: '#testimonials' }
    ],
    services: [
      { name: 'Consultoria Empresarial', href: '#services' },
      { name: 'Treinamento de Vendas', href: '#services' },
      { name: 'Automação de Processos', href: '#services' },
      { name: 'Análise de Performance', href: '#services' }
    ],
    support: [
      { name: 'Central de Ajuda', href: '#contact' },
      { name: 'Contato', href: '#contact' },
      { name: 'Suporte Técnico', href: '#contact' },
      { name: 'FAQ', href: '#contact' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'LGPD', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#', color: 'hover:bg-pink-600' },
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: '#', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: '#', color: 'hover:bg-red-600' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', href: '#', color: 'hover:bg-green-600' }
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: 'São Paulo, SP - Brasil' },
    { icon: 'fas fa-phone', text: '+55 (11) 99999-9999' },
    { icon: 'fas fa-envelope', text: 'contato@vertexsolutions.com.br' },
    { icon: 'fas fa-clock', text: 'Seg - Sex: 9h às 18h' }
  ];

  return (
    <footer className="footer">
      {/* Background Pattern */}
      <div className="footer-background">
        <div className="footer-bg-pattern footer-bg-pattern-1"></div>
        <div className="footer-bg-pattern footer-bg-pattern-2"></div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-company">
              <div className="footer-company-content">
                <h3 className="footer-company-title">
                  <div className="footer-company-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  Vertex Solutions
                </h3>
                <p className="footer-company-description">
                  Transformamos negócios através de estratégias inovadoras, metodologias 
                  comprovadas e tecnologia de ponta. Mais de 500 empresas já aceleraram 
                  seu crescimento conosco.
                </p>
                
                {/* Contact Info */}
                <div className="footer-contact">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="footer-contact-item">
                      <i className={`${info.icon} footer-contact-icon`}></i>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div className="footer-social">
                <h4 className="footer-social-title">Siga-nos nas redes sociais</h4>
                <div className="footer-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="footer-social-link"
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Links Sections */}
            <div className="footer-links">
              {/* Company Links */}
              <div className="footer-links-section">
                <h4 className="footer-links-title">Empresa</h4>
                <ul className="footer-links-list">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="footer-link"
                      >
                        <i className="fas fa-chevron-right footer-link-icon"></i>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services Links */}
              <div className="footer-links-section">
                <h4 className="footer-links-title">Serviços</h4>
                <ul className="footer-links-list">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="footer-link"
                      >
                        <i className="fas fa-chevron-right footer-link-icon"></i>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Support Links */}
              <div className="footer-links-section">
                <h4 className="footer-links-title">Suporte</h4>
                <ul className="footer-links-list">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="footer-link"
                      >
                        <i className="fas fa-chevron-right footer-link-icon"></i>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-content">
            <div className="footer-newsletter-info">
              <h4 className="footer-newsletter-title">
                Receba dicas exclusivas de crescimento
              </h4>
              <p className="footer-newsletter-description">
                Assine nossa newsletter e receba estratégias semanais para acelerar seu negócio.
              </p>
            </div>
            
            <div className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="footer-newsletter-input"
              />
              <button className="btn btn-primary">
                Assinar Grátis
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © {currentYear} Vertex Solutions. Todos os direitos reservados.
            </div>
            
            <div className="footer-legal">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="footer-legal-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="footer-trust">
          <div className="footer-trust-content">
            <div className="footer-trust-badge">
              <i className="fas fa-shield-alt"></i>
              <span>Dados Protegidos</span>
            </div>
            <div className="footer-trust-badge">
              <i className="fas fa-certificate"></i>
              <span>Empresa Certificada</span>
            </div>
            <div className="footer-trust-badge">
              <i className="fas fa-award"></i>
              <span>5 Anos de Experiência</span>
            </div>
            <div className="footer-trust-badge">
              <i className="fas fa-users"></i>
              <span>500+ Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a
        href="#hero"
        className="back-to-top"
        aria-label="Voltar ao topo"
      >
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
};

export default Footer;