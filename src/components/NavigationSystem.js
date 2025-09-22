import React, { useState, useEffect, useRef } from 'react';

const NavigationSystem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [currentSection, setCurrentSection] = useState('home');
  const searchRef = useRef(null);
  const tooltipTimeoutRef = useRef(null);

  // Breadcrumb navigation data
  const breadcrumbMap = {
    home: [{ label: 'Início', path: '#hero' }],
    about: [
      { label: 'Início', path: '#hero' },
      { label: 'Sobre', path: '#about' }
    ],
    features: [
      { label: 'Início', path: '#hero' },
      { label: 'Funcionalidades', path: '#features' }
    ],
    services: [
      { label: 'Início', path: '#hero' },
      { label: 'Serviços', path: '#services' }
    ],
    testimonials: [
      { label: 'Início', path: '#hero' },
      { label: 'Depoimentos', path: '#testimonials' }
    ],
    contact: [
      { label: 'Início', path: '#hero' },
      { label: 'Contato', path: '#contact' }
    ]
  };

  // Search data for intelligent search
  const searchData = [
    { title: 'Página Inicial', description: 'Conheça nossa proposta de valor', path: '#hero', keywords: ['início', 'home', 'principal'] },
    { title: 'Sobre Nós', description: 'Nossa história e missão', path: '#about', keywords: ['sobre', 'empresa', 'história', 'missão'] },
    { title: 'Funcionalidades', description: 'Recursos e benefícios', path: '#features', keywords: ['recursos', 'benefícios', 'funcionalidades'] },
    { title: 'Serviços', description: 'Nossos serviços especializados', path: '#services', keywords: ['serviços', 'soluções', 'especialidades'] },
    { title: 'Depoimentos', description: 'O que nossos clientes dizem', path: '#testimonials', keywords: ['depoimentos', 'avaliações', 'clientes'] },
    { title: 'Contato', description: 'Entre em contato conosco', path: '#contact', keywords: ['contato', 'fale conosco', 'suporte'] }
  ];

  // Tooltip data
  const tooltipData = {
    search: 'Pesquise por qualquer seção ou conteúdo do site',
    breadcrumb: 'Navegue facilmente entre as seções',
    help: 'Precisa de ajuda? Clique aqui para dicas de navegação'
  };

  // Handle search with intelligent autocomplete
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Handle search selection
  const handleSearchSelect = (item) => {
    setSearchQuery('');
    setSearchResults([]);
    
    // Add to recent searches
    const newRecentSearches = [item, ...recentSearches.filter(recent => recent.path !== item.path)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    
    // Navigate to section
    document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Handle tooltip display
  const handleTooltipShow = (tooltipKey) => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(tooltipKey);
    }, 300);
  };

  const handleTooltipHide = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(null);
  };

  // Detect current section for breadcrumbs
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'features', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navigation-system">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            {breadcrumbMap[currentSection]?.map((crumb, index) => (
              <li key={index} className="breadcrumb-item">
                <a 
                  href={crumb.path}
                  className="breadcrumb-link interactive focus-ring"
                  onMouseEnter={() => handleTooltipShow('breadcrumb')}
                  onMouseLeave={handleTooltipHide}
                  onFocus={() => handleTooltipShow('breadcrumb')}
                  onBlur={handleTooltipHide}
                >
                  {crumb.label}
                </a>
                {index < breadcrumbMap[currentSection].length - 1 && (
                  <span className="breadcrumb-separator" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Intelligent Search */}
      <div className="search-container">
        <div className="container">
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                ref={searchRef}
                type="text"
                className="search-input focus-ring"
                placeholder="Pesquisar no site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onMouseEnter={() => handleTooltipShow('search')}
                onMouseLeave={handleTooltipHide}
                onFocus={() => handleTooltipShow('search')}
                onBlur={handleTooltipHide}
                aria-label="Pesquisar conteúdo do site"
              />
              {searchQuery && (
                <button
                  className="search-clear interactive"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar pesquisa"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Search Results */}
            {(searchResults.length > 0 || (searchQuery.length === 0 && recentSearches.length > 0)) && (
              <div className="search-results animate-fade-in">
                {searchQuery.length > 0 ? (
                  <>
                    <div className="search-results-header">
                      <span className="search-results-title">Resultados da pesquisa</span>
                      <span className="search-results-count">{searchResults.length} encontrado(s)</span>
                    </div>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        className="search-result-item interactive focus-ring"
                        onClick={() => handleSearchSelect(result)}
                      >
                        <div className="search-result-content">
                          <h4 className="search-result-title">{result.title}</h4>
                          <p className="search-result-description">{result.description}</p>
                        </div>
                        <svg className="search-result-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="search-results-header">
                      <span className="search-results-title">Pesquisas recentes</span>
                    </div>
                    {recentSearches.map((recent, index) => (
                      <button
                        key={index}
                        className="search-result-item interactive focus-ring"
                        onClick={() => handleSearchSelect(recent)}
                      >
                        <div className="search-result-content">
                          <h4 className="search-result-title">{recent.title}</h4>
                          <p className="search-result-description">{recent.description}</p>
                        </div>
                        <svg className="search-result-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Help Button */}
          <button
            className="help-button interactive glow-on-hover focus-ring"
            onMouseEnter={() => handleTooltipShow('help')}
            onMouseLeave={handleTooltipHide}
            onFocus={() => handleTooltipShow('help')}
            onBlur={handleTooltipHide}
            aria-label="Ajuda de navegação"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.57495 7.5C7.77087 6.94772 8.15758 6.48706 8.66658 6.19101C9.17558 5.89496 9.77403 5.78465 10.3559 5.87736C10.9378 5.97007 11.4656 6.26056 11.8458 6.69029C12.2261 7.12002 12.4342 7.66714 12.4333 8.23333C12.4333 10 9.93328 10.8333 9.93328 10.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14.1667H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Contextual Tooltips */}
      {showTooltip && (
        <div className={`tooltip show`} style={{
          position: 'fixed',
          top: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1001
        }}>
          {tooltipData[showTooltip]}
        </div>
      )}

      {/* Progress Indicator for Multi-step Processes */}
      <div className="progress-indicator">
        <div className="container">
          <div className="progress-steps">
            <div className="progress-step active">
              <div className="progress-step-circle">1</div>
              <span className="progress-step-label">Descobrir</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className="progress-step-circle">2</div>
              <span className="progress-step-label">Explorar</span>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className="progress-step-circle">3</div>
              <span className="progress-step-label">Conectar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSystem;