import React, { useState, useEffect } from 'react';

const Header = ({ onOpenPopup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`header ${
        isScrolled 
          ? 'header-scrolled' 
          : 'header-transparent'
      }`}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <div className="logo-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="logo-text">
              <h1 className="logo-title">
                Vertex
              </h1>
              <p className="logo-subtitle">Soluções em Vendas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <button
              onClick={onOpenPopup}
              className="btn btn-primary btn-sm"
            >
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-toggle"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <div className="mobile-nav-content">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-nav-link"
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPopup();
                  }}
                  className="btn btn-primary btn-sm mobile-cta"
                >
                  Começar Agora
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;