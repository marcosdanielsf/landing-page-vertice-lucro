import React, { useState, useEffect } from 'react';

// Iconografia específica da marca
export const BrandIcon = ({ 
  type = 'logo', 
  size = 'md', 
  variant = 'default',
  className = '' 
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  };

  const icons = {
    logo: (
      <svg className={`brand-icon brand-icon--logo ${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M30 40 L50 25 L70 40 L70 60 L50 75 L30 60 Z" fill="currentColor" opacity="0.8"/>
        <circle cx="50" cy="50" r="15" fill="currentColor"/>
        <path d="M40 45 L50 35 L60 45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 55 L50 65 L60 55" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    success: (
      <svg className={`brand-icon brand-icon--success ${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1"/>
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3"/>
        <path d="M35 50 L45 60 L65 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    star: (
      <svg className={`brand-icon brand-icon--star ${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none">
        <path d="M50 15 L58 35 L80 35 L63 50 L70 70 L50 58 L30 70 L37 50 L20 35 L42 35 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="8" fill="white" opacity="0.8"/>
      </svg>
    ),
    heart: (
      <svg className={`brand-icon brand-icon--heart ${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none">
        <path d="M50 80 C50 80 20 55 20 35 C20 25 28 20 35 20 C42 20 50 25 50 35 C50 25 58 20 65 20 C72 20 80 25 80 35 C80 55 50 80 50 80 Z" fill="currentColor"/>
        <circle cx="40" cy="35" r="5" fill="white" opacity="0.6"/>
      </svg>
    ),
    trophy: (
      <svg className={`brand-icon brand-icon--trophy ${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none">
        <path d="M30 25 L70 25 L65 45 C65 55 58 60 50 60 C42 60 35 55 35 45 L30 25 Z" fill="currentColor"/>
        <rect x="45" y="60" width="10" height="15" fill="currentColor"/>
        <rect x="35" y="75" width="30" height="8" rx="4" fill="currentColor"/>
        <circle cx="50" cy="40" r="8" fill="white" opacity="0.7"/>
        <path d="M25 30 C20 30 20 35 25 40" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M75 30 C80 30 80 35 75 40" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    ),
    rocket: (
      <svg className={`brand-icon brand-icon--rocket ${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none">
        <path d="M50 10 L60 30 L50 25 L40 30 Z" fill="currentColor"/>
        <ellipse cx="50" cy="45" rx="12" ry="25" fill="currentColor" opacity="0.8"/>
        <circle cx="50" cy="40" r="6" fill="white" opacity="0.8"/>
        <path d="M35 60 L40 70 L45 65" fill="currentColor"/>
        <path d="M65 60 L60 70 L55 65" fill="currentColor"/>
        <path d="M45 75 L50 85 L55 75" fill="currentColor" opacity="0.6"/>
      </svg>
    )
  };

  return icons[type] || icons.logo;
};

// Animação de carregamento personalizada da marca
export const BrandLoader = ({ 
  message = "Carregando...", 
  variant = 'spinner',
  showMessage = true,
  className = '' 
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (variant === 'pulse') {
    return (
      <div className={`brand-loader brand-loader--pulse ${className}`}>
        <div className="brand-loader__content">
          <div className="brand-pulse-logo">
            <BrandIcon type="logo" size="xl" />
            <div className="pulse-rings">
              <div className="pulse-ring pulse-ring--1"></div>
              <div className="pulse-ring pulse-ring--2"></div>
              <div className="pulse-ring pulse-ring--3"></div>
            </div>
          </div>
          {showMessage && (
            <p className="brand-loader__message">
              {message}{dots}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'orbit') {
    return (
      <div className={`brand-loader brand-loader--orbit ${className}`}>
        <div className="brand-loader__content">
          <div className="brand-orbit-system">
            <div className="orbit-center">
              <BrandIcon type="logo" size="lg" />
            </div>
            <div className="orbit orbit--1">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit orbit--2">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit orbit--3">
              <div className="orbit-dot"></div>
            </div>
          </div>
          {showMessage && (
            <p className="brand-loader__message">
              {message}{dots}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`brand-loader brand-loader--spinner ${className}`}>
      <div className="brand-loader__content">
        <div className="brand-spinner-logo">
          <BrandIcon type="logo" size="xl" />
          <div className="spinner-overlay">
            <div className="spinner-ring"></div>
          </div>
        </div>
        {showMessage && (
          <p className="brand-loader__message">
            {message}{dots}
          </p>
        )}
      </div>
    </div>
  );
};

// Estados vazios memoráveis
export const BrandEmptyState = ({ 
  type = 'search',
  title,
  description,
  action,
  illustration,
  className = '' 
}) => {
  const emptyStates = {
    search: {
      title: title || "Nenhum resultado encontrado",
      description: description || "Tente ajustar seus filtros ou termos de busca para encontrar o que procura.",
      icon: "search"
    },
    noData: {
      title: title || "Ainda não há dados aqui",
      description: description || "Quando você começar a usar esta funcionalidade, os dados aparecerão aqui.",
      icon: "star"
    },
    error: {
      title: title || "Ops! Algo deu errado",
      description: description || "Encontramos um problema inesperado. Nossa equipe foi notificada e está trabalhando na solução.",
      icon: "heart"
    },
    success: {
      title: title || "Tudo pronto!",
      description: description || "Sua ação foi concluída com sucesso. Você pode continuar navegando.",
      icon: "success"
    },
    achievement: {
      title: title || "Parabéns!",
      description: description || "Você alcançou um novo marco. Continue assim!",
      icon: "trophy"
    },
    launch: {
      title: title || "Pronto para decolar!",
      description: description || "Tudo está configurado e pronto para começar sua jornada.",
      icon: "rocket"
    }
  };

  const state = emptyStates[type] || emptyStates.search;

  return (
    <div className={`brand-empty-state brand-empty-state--${type} ${className}`}>
      <div className="brand-empty-state__content">
        <div className="brand-empty-state__illustration">
          {illustration || <BrandIcon type={state.icon} size="2xl" />}
          <div className="illustration-glow"></div>
        </div>
        <h3 className="brand-empty-state__title">{state.title}</h3>
        <p className="brand-empty-state__description">{state.description}</p>
        {action && (
          <div className="brand-empty-state__action">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

// Notificações com personalidade da marca
export const BrandNotification = ({ 
  type = 'info',
  title,
  message,
  isVisible = false,
  onClose,
  autoClose = true,
  duration = 5000,
  className = '' 
}) => {
  useEffect(() => {
    if (isVisible && autoClose && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, onClose, duration]);

  if (!isVisible) return null;

  const notificationTypes = {
    success: {
      icon: 'success',
      bgClass: 'bg-green-50 border-green-200',
      iconClass: 'text-green-600',
      titleClass: 'text-green-800',
      messageClass: 'text-green-700'
    },
    error: {
      icon: 'heart',
      bgClass: 'bg-red-50 border-red-200',
      iconClass: 'text-red-600',
      titleClass: 'text-red-800',
      messageClass: 'text-red-700'
    },
    warning: {
      icon: 'star',
      bgClass: 'bg-yellow-50 border-yellow-200',
      iconClass: 'text-yellow-600',
      titleClass: 'text-yellow-800',
      messageClass: 'text-yellow-700'
    },
    info: {
      icon: 'logo',
      bgClass: 'bg-blue-50 border-blue-200',
      iconClass: 'text-blue-600',
      titleClass: 'text-blue-800',
      messageClass: 'text-blue-700'
    }
  };

  const config = notificationTypes[type] || notificationTypes.info;

  return (
    <div className={`brand-notification brand-notification--${type} ${className}`}>
      <div className={`brand-notification__content ${config.bgClass}`}>
        <div className="brand-notification__icon">
          <BrandIcon type={config.icon} size="md" className={config.iconClass} />
        </div>
        <div className="brand-notification__text">
          {title && (
            <h4 className={`brand-notification__title ${config.titleClass}`}>
              {title}
            </h4>
          )}
          <p className={`brand-notification__message ${config.messageClass}`}>
            {message}
          </p>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="brand-notification__close"
            aria-label="Fechar notificação"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

// Páginas de erro com personalidade da marca
export const BrandErrorPage = ({ 
  errorCode = '404',
  title,
  description,
  action,
  showHomeButton = true,
  className = '' 
}) => {
  const errorPages = {
    '404': {
      title: title || "Página não encontrada",
      description: description || "A página que você está procurando não existe ou foi movida para outro lugar.",
      illustration: (
        <div className="error-illustration error-illustration--404">
          <div className="error-number">4</div>
          <BrandIcon type="logo" size="2xl" className="error-icon" />
          <div className="error-number">4</div>
        </div>
      )
    },
    '500': {
      title: title || "Erro interno do servidor",
      description: description || "Encontramos um problema em nossos servidores. Nossa equipe foi notificada e está trabalhando na solução.",
      illustration: (
        <div className="error-illustration error-illustration--500">
          <BrandIcon type="heart" size="2xl" className="error-icon broken" />
          <div className="error-sparks">
            <div className="spark spark--1"></div>
            <div className="spark spark--2"></div>
            <div className="spark spark--3"></div>
          </div>
        </div>
      )
    },
    '403': {
      title: title || "Acesso negado",
      description: description || "Você não tem permissão para acessar esta página. Entre em contato com o administrador se precisar de acesso.",
      illustration: (
        <div className="error-illustration error-illustration--403">
          <BrandIcon type="trophy" size="2xl" className="error-icon locked" />
          <div className="lock-overlay"></div>
        </div>
      )
    }
  };

  const errorConfig = errorPages[errorCode] || errorPages['404'];

  return (
    <div className={`brand-error-page ${className}`}>
      <div className="brand-error-page__content">
        <div className="brand-error-page__illustration">
          {errorConfig.illustration}
        </div>
        <div className="brand-error-page__text">
          <h1 className="brand-error-page__title">{errorConfig.title}</h1>
          <p className="brand-error-page__description">{errorConfig.description}</p>
        </div>
        <div className="brand-error-page__actions">
          {action && (
            <div className="brand-error-page__primary-action">
              {action}
            </div>
          )}
          {showHomeButton && (
            <button className="brand-error-page__home-button">
              <BrandIcon type="logo" size="sm" />
              Voltar ao início
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Favicon e elementos de marca
export const BrandFavicon = () => {
  useEffect(() => {
    // Criar favicon SVG dinamicamente
    const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14" fill="#cf9653"/>
        <path d="M8 12 L16 8 L24 12 L24 20 L16 24 L8 20 Z" fill="#f3f2ef" opacity="0.9"/>
        <circle cx="16" cy="16" r="4" fill="#cf9653"/>
      </svg>
    `;
    
    const faviconBlob = new Blob([faviconSvg], { type: 'image/svg+xml' });
    const faviconUrl = URL.createObjectURL(faviconBlob);
    
    // Atualizar favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = faviconUrl;
    
    // Cleanup
    return () => URL.revokeObjectURL(faviconUrl);
  }, []);

  return null;
};

// Splash screen com marca
export const BrandSplashScreen = ({ 
  isVisible = false,
  onComplete,
  duration = 2000,
  className = '' 
}) => {
  useEffect(() => {
    if (isVisible && onComplete) {
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete, duration]);

  if (!isVisible) return null;

  return (
    <div className={`brand-splash-screen ${className}`}>
      <div className="brand-splash-screen__content">
        <div className="brand-splash-screen__logo">
          <BrandIcon type="logo" size="2xl" />
          <div className="splash-glow"></div>
        </div>
        <div className="brand-splash-screen__text">
          <h1 className="splash-title">Vertex</h1>
          <p className="splash-tagline">Transformando ideias em realidade</p>
        </div>
        <div className="brand-splash-screen__loader">
          <div className="splash-progress">
            <div className="splash-progress__bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  BrandIcon,
  BrandLoader,
  BrandEmptyState,
  BrandNotification,
  BrandErrorPage,
  BrandFavicon,
  BrandSplashScreen
};