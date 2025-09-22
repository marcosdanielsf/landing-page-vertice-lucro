import React, { useState } from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}

interface ContactInfo {
  icon: string;
  text: string;
}

interface TrustBadge {
  icon: string;
  text: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossos Serviços', href: '#services' },
      { name: 'Metodologia', href: '#features' },
      { name: 'Casos de Sucesso', href: '#testimonials' }
    ] as FooterLink[],
    services: [
      { name: 'Consultoria Empresarial', href: '#services' },
      { name: 'Treinamento de Vendas', href: '#services' },
      { name: 'Automação de Processos', href: '#services' },
      { name: 'Análise de Performance', href: '#services' }
    ] as FooterLink[],
    support: [
      { name: 'Central de Ajuda', href: '#contact' },
      { name: 'Contato', href: '#contact' },
      { name: 'Suporte Técnico', href: '#contact' },
      { name: 'FAQ', href: '#contact' }
    ] as FooterLink[],
    legal: [
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'LGPD', href: '#' }
    ] as FooterLink[]
  };

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: '📷', href: '#', color: 'hover:bg-pink-600' },
    { name: 'Facebook', icon: '📘', href: '#', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: '📺', href: '#', color: 'hover:bg-red-600' },
    { name: 'WhatsApp', icon: '💬', href: '#', color: 'hover:bg-green-600' }
  ];

  const contactInfo: ContactInfo[] = [
    { icon: '📍', text: 'São Paulo, SP - Brasil' },
    { icon: '📞', text: '+55 (11) 99999-9999' },
    { icon: '✉️', text: 'contato@vertexsolutions.com.br' },
    { icon: '🕒', text: 'Seg - Sex: 9h às 18h' }
  ];

  const trustBadges: TrustBadge[] = [
    { icon: '🛡️', text: 'Dados Protegidos' },
    { icon: '🏆', text: 'Empresa Certificada' },
    { icon: '⭐', text: '5 Anos de Experiência' },
    { icon: '👥', text: '500+ Clientes Satisfeitos' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500 to-pink-600 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">📈</span>
                  </div>
                  Vertex Solutions
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Transformamos negócios através de estratégias inovadoras, metodologias 
                  comprovadas e tecnologia de ponta. Mais de 500 empresas já aceleraram 
                  seu crescimento conosco.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <span className="text-xl mr-3">{info.icon}</span>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Links Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
              {/* Company Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Empresa</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors flex items-center group"
                      >
                        <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Serviços</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors flex items-center group"
                      >
                        <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
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
        <div className="border-t border-gray-800 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-xl font-semibold mb-2">
                Receba dicas exclusivas de crescimento
              </h4>
              <p className="text-gray-300">
                Assine nossa newsletter e receba estratégias semanais para acelerar seu negócio.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Assinar Grátis
              </button>
            </form>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">{badge.icon}</span>
                  <span className="text-sm text-gray-300">{badge.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 mb-4 md:mb-0">
              © {currentYear} Vertex Solutions. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;