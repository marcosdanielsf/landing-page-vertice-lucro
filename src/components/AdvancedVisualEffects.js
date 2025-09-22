import React, { useState, useEffect, useRef } from 'react';

// Hook para detectar scroll e parallax
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return offset;
};

// Hook para intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [options]);
  
  return [ref, isIntersecting];
};

// Componente de Glassmorphism
export const GlassmorphismCard = ({ 
  children, 
  className = '', 
  blur = 'md', 
  opacity = 0.1,
  border = true 
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  return (
    <div className={`
      glassmorphism-card
      ${blurClasses[blur]}
      ${border ? 'glassmorphism-border' : ''}
      ${className}
    `} style={{ '--glass-opacity': opacity }}>
      <div className="glassmorphism-content">
        {children}
      </div>
    </div>
  );
};

// Componente de Parallax
export const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  backgroundImage,
  overlay = true 
}) => {
  const offset = useParallax(speed);
  
  return (
    <div className={`parallax-section ${className}`}>
      {backgroundImage && (
        <div 
          className="parallax-background"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <img src={backgroundImage} alt="" className="parallax-image" />
          {overlay && <div className="parallax-overlay" />}
        </div>
      )}
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

// Componente de Sombras Sofisticadas
export const ElevatedCard = ({ 
  children, 
  elevation = 2, 
  className = '',
  hover = true,
  glow = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const elevationClass = `elevation-${elevation}${isHovered && hover ? '-hover' : ''}`;
  
  return (
    <div 
      className={`
        elevated-card 
        ${elevationClass}
        ${glow ? 'elevated-card--glow' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

// Componente de Gradiente Overlay
export const GradientOverlay = ({ 
  direction = 'to-bottom', 
  colors = ['primary', 'secondary'],
  opacity = 0.15,
  className = '' 
}) => {
  const directionClasses = {
    'to-bottom': 'bg-gradient-to-b',
    'to-top': 'bg-gradient-to-t',
    'to-right': 'bg-gradient-to-r',
    'to-left': 'bg-gradient-to-l',
    'to-bottom-right': 'bg-gradient-to-br',
    'to-bottom-left': 'bg-gradient-to-bl'
  };
  
  return (
    <div 
      className={`
        gradient-overlay 
        ${directionClasses[direction]}
        ${className}
      `}
      style={{ '--gradient-opacity': opacity }}
    />
  );
};

// Componente de Textura e Ruído
export const TexturedBackground = ({ 
  pattern = 'noise', 
  intensity = 0.05,
  className = '',
  children 
}) => {
  return (
    <div className={`textured-background textured-background--${pattern} ${className}`}>
      <div 
        className="texture-overlay"
        style={{ '--texture-intensity': intensity }}
      />
      {children}
    </div>
  );
};

// Componente de Divisor Elegante
export const ElegantDivider = ({ 
  type = 'gradient', 
  height = 'md',
  className = '' 
}) => {
  const heightClasses = {
    sm: 'h-px',
    md: 'h-0.5',
    lg: 'h-1'
  };
  
  return (
    <div className={`elegant-divider elegant-divider--${type} ${heightClasses[height]} ${className}`}>
      {type === 'gradient' && <div className="divider-gradient" />}
      {type === 'dotted' && <div className="divider-dots" />}
      {type === 'wave' && (
        <svg className="divider-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      )}
    </div>
  );
};

// Componente de Card Premium Multi-camadas
export const PremiumCard = ({ 
  children, 
  variant = 'default',
  interactive = true,
  className = '' 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      ref={ref}
      className={`
        premium-card 
        premium-card--${variant}
        ${isIntersecting ? 'premium-card--visible' : ''}
        ${isHovered && interactive ? 'premium-card--hovered' : ''}
        ${className}
      `}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <div className="premium-card__background" />
      <div className="premium-card__border" />
      <div className="premium-card__glow" />
      <div className="premium-card__content">
        {children}
      </div>
    </div>
  );
};

// Componente de Blur Background
export const BlurBackground = ({ 
  intensity = 'md',
  overlay = true,
  className = '',
  children 
}) => {
  const intensityClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };
  
  return (
    <div className={`blur-background ${className}`}>
      <div className={`blur-background__blur ${intensityClasses[intensity]}`}>
        {overlay && <div className="blur-background__overlay" />}
        {children}
      </div>
    </div>
  );
};

// Componente de Loading Animation Customizada
export const BrandLoadingAnimation = ({ 
  size = 'md',
  variant = 'spinner',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };
  
  if (variant === 'spinner') {
    return (
      <div className={`brand-loading brand-loading--spinner ${sizeClasses[size]} ${className}`}>
        <div className="brand-spinner">
          <div className="brand-spinner__ring"></div>
          <div className="brand-spinner__ring"></div>
          <div className="brand-spinner__ring"></div>
        </div>
      </div>
    );
  }
  
  if (variant === 'pulse') {
    return (
      <div className={`brand-loading brand-loading--pulse ${sizeClasses[size]} ${className}`}>
        <div className="brand-pulse">
          <div className="brand-pulse__dot"></div>
          <div className="brand-pulse__dot"></div>
          <div className="brand-pulse__dot"></div>
        </div>
      </div>
    );
  }
  
  if (variant === 'wave') {
    return (
      <div className={`brand-loading brand-loading--wave ${className}`}>
        <div className="brand-wave">
          <div className="brand-wave__bar"></div>
          <div className="brand-wave__bar"></div>
          <div className="brand-wave__bar"></div>
          <div className="brand-wave__bar"></div>
          <div className="brand-wave__bar"></div>
        </div>
      </div>
    );
  }
  
  return null;
};

// Componente de Celebration Success
export const CelebrationSuccess = ({ 
  isVisible = false,
  onComplete,
  message = "Sucesso!",
  confetti = true 
}) => {
  useEffect(() => {
    if (isVisible && onComplete) {
      const timer = setTimeout(onComplete, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);
  
  if (!isVisible) return null;
  
  return (
    <div className="celebration-success">
      <div className="celebration-success__backdrop" />
      <div className="celebration-success__content">
        <div className="celebration-success__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="celebration-success__message">{message}</h3>
        {confetti && (
          <div className="celebration-confetti">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="celebration-confetti__piece"
                style={{
                  '--delay': `${i * 0.1}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--rotation': `${Math.random() * 360}deg`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Componente de Empty State Memorável
export const MemorableEmptyState = ({ 
  icon,
  title,
  description,
  action,
  illustration = 'search',
  className = '' 
}) => {
  const illustrations = {
    search: (
      <svg className="empty-state__illustration" viewBox="0 0 200 200">
        <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="m125 105 15 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="100" cy="80" r="15" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
    empty: (
      <svg className="empty-state__illustration" viewBox="0 0 200 200">
        <rect x="50" y="60" width="100" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.2"/>
        <path d="M90 95h20M85 105h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    error: (
      <svg className="empty-state__illustration" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M85 85l30 30M115 85l-30 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  };
  
  return (
    <div className={`memorable-empty-state ${className}`}>
      <div className="empty-state__content">
        {icon || illustrations[illustration]}
        <h3 className="empty-state__title">{title}</h3>
        <p className="empty-state__description">{description}</p>
        {action && (
          <div className="empty-state__action">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default {
  GlassmorphismCard,
  ParallaxSection,
  ElevatedCard,
  GradientOverlay,
  TexturedBackground,
  ElegantDivider,
  PremiumCard,
  BlurBackground,
  BrandLoadingAnimation,
  CelebrationSuccess,
  MemorableEmptyState
};