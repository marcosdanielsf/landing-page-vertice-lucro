import React, { useState, useEffect, useRef } from 'react';

// Hook para animações de entrada
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, options]);

  return [elementRef, isVisible];
};

// Componente de botão com micro-interações
export const InteractiveButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  success = false,
  onClick,
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled || loading) return;

    // Efeito ripple
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple após animação
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const buttonClass = `
    interactive-btn 
    interactive-btn--${variant} 
    interactive-btn--${size}
    ${loading ? 'interactive-btn--loading' : ''}
    ${success ? 'interactive-btn--success' : ''}
    ${disabled ? 'interactive-btn--disabled' : ''}
    ${isPressed ? 'interactive-btn--pressed' : ''}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled || loading}
      {...props}
    >
      <span className="interactive-btn__content">
        {loading && (
          <span className="interactive-btn__spinner">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
        )}
        {success && (
          <span className="interactive-btn__success-icon">✓</span>
        )}
        {children}
      </span>
      
      {/* Ripple effects */}
      <span className="interactive-btn__ripples">
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="interactive-btn__ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size
            }}
          />
        ))}
      </span>
    </button>
  );
};

// Componente de card com hover effects
export const InteractiveCard = ({ children, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [elementRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`
        interactive-card 
        ${isVisible ? 'interactive-card--visible' : ''}
        ${isHovered ? 'interactive-card--hovered' : ''}
        ${className}
      `.trim()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="interactive-card__content">
        {children}
      </div>
      <div className="interactive-card__glow" />
    </div>
  );
};

// Componente de tooltip contextual
export const ContextualTooltip = ({ 
  children, 
  content, 
  position = 'top',
  delay = 300,
  disabled = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const tooltipRef = useRef();

  const showTooltip = () => {
    if (disabled) return;
    
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  return (
    <div 
      className="contextual-tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div 
          ref={tooltipRef}
          className={`contextual-tooltip__content contextual-tooltip__content--${position}`}
          role="tooltip"
        >
          {content}
          <div className="contextual-tooltip__arrow" />
        </div>
      )}
    </div>
  );
};

// Componente de loading skeleton
export const SkeletonLoader = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '' 
}) => {
  return (
    <div 
      className={`skeleton-loader ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
};

// Componente de transição de página
export const PageTransition = ({ children, isVisible = true }) => {
  return (
    <div className={`page-transition ${isVisible ? 'page-transition--visible' : ''}`}>
      {children}
    </div>
  );
};

// Componente de feedback de sucesso
export const SuccessAnimation = ({ isVisible, message, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="success-animation">
      <div className="success-animation__content">
        <div className="success-animation__icon">
          <svg viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <p className="success-animation__message">{message}</p>
      </div>
      <div className="success-animation__confetti">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`success-animation__confetti-piece success-animation__confetti-piece--${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

// Componente de input com animações
export const AnimatedInput = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error,
  success,
  placeholder,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value && value.length > 0);
  }, [value]);

  const inputClass = `
    animated-input
    ${isFocused ? 'animated-input--focused' : ''}
    ${hasValue ? 'animated-input--has-value' : ''}
    ${error ? 'animated-input--error' : ''}
    ${success ? 'animated-input--success' : ''}
  `.trim();

  return (
    <div className={inputClass}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        {...props}
      />
      {label && (
        <label className="animated-input__label">
          {label}
        </label>
      )}
      <div className="animated-input__border" />
      {error && (
        <div className="animated-input__error">
          <span className="animated-input__error-icon">⚠</span>
          {error}
        </div>
      )}
      {success && (
        <div className="animated-input__success">
          <span className="animated-input__success-icon">✓</span>
        </div>
      )}
    </div>
  );
};

// Componente de progress indicator
export const ProgressIndicator = ({ 
  progress = 0, 
  showPercentage = true,
  size = 'medium',
  variant = 'circular' 
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  if (variant === 'linear') {
    return (
      <div className={`progress-indicator progress-indicator--linear progress-indicator--${size}`}>
        <div className="progress-indicator__track">
          <div 
            className="progress-indicator__fill"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>
        {showPercentage && (
          <span className="progress-indicator__percentage">
            {Math.round(animatedProgress)}%
          </span>
        )}
      </div>
    );
  }

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div className={`progress-indicator progress-indicator--circular progress-indicator--${size}`}>
      <svg className="progress-indicator__svg" viewBox="0 0 100 100">
        <circle
          className="progress-indicator__track"
          cx="50"
          cy="50"
          r="45"
        />
        <circle
          className="progress-indicator__fill"
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset
          }}
        />
      </svg>
      {showPercentage && (
        <span className="progress-indicator__percentage">
          {Math.round(animatedProgress)}%
        </span>
      )}
    </div>
  );
};

// Componente de floating action button
export const FloatingActionButton = ({ 
  icon, 
  onClick, 
  position = 'bottom-right',
  tooltip 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ContextualTooltip content={tooltip} position="left">
      <button
        className={`floating-action-btn floating-action-btn--${position}`}
        onClick={onClick}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <span className={`floating-action-btn__icon ${isExpanded ? 'floating-action-btn__icon--expanded' : ''}`}>
          {icon}
        </span>
      </button>
    </ContextualTooltip>
  );
};

// Hook para detectar preferências de movimento
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Componente wrapper para animações respeitando preferências
export const MotionWrapper = ({ children, animation = 'fadeIn', ...props }) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`
        motion-wrapper
        ${isVisible ? `motion-wrapper--${animation}` : ''}
        ${prefersReducedMotion ? 'motion-wrapper--reduced' : ''}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default {
  InteractiveButton,
  InteractiveCard,
  ContextualTooltip,
  SkeletonLoader,
  PageTransition,
  SuccessAnimation,
  AnimatedInput,
  ProgressIndicator,
  FloatingActionButton,
  MotionWrapper,
  useIntersectionObserver,
  useReducedMotion
};