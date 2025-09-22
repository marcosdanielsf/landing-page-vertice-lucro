import React, { useState, useEffect, useRef, useCallback } from 'react';

// Skip Link Component for keyboard navigation
export const SkipLink = ({ href = '#main-content', children = 'Pular para o conteúdo principal' }) => {
  return (
    <a 
      href={href}
      className="skip-link"
      onFocus={(e) => e.target.classList.add('visible')}
      onBlur={(e) => e.target.classList.remove('visible')}
    >
      {children}
    </a>
  );
};

// Focus Trap Component for modals and dialogs
export const FocusTrap = ({ children, isActive = true, restoreFocus = true }) => {
  const containerRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    previousActiveElement.current = document.activeElement;

    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        if (restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);
    firstElement.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive, restoreFocus]);

  return (
    <div ref={containerRef} className="focus-trap">
      {children}
    </div>
  );
};

// Accessible Button Component with proper ARIA attributes
export const AccessibleButton = ({ 
  children, 
  onClick, 
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'medium',
  ariaLabel,
  ariaDescribedBy,
  className = '',
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setIsPressed(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setIsPressed(false);
      if (!disabled && !loading) {
        onClick?.(e);
      }
    }
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      className={`accessible-btn accessible-btn-${variant} accessible-btn-${size} ${
        isPressed ? 'pressed' : ''
      } ${className}`}
      onClick={!disabled && !loading ? onClick : undefined}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-pressed={isPressed}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span className="accessible-btn-loader" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="spinner">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      )}
      <span className={loading ? 'visually-hidden' : ''}>{children}</span>
    </button>
  );
};

// Accessible Form Input with proper labeling and validation
export const AccessibleInput = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  hint,
  required = false,
  disabled = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const hintId = hint ? `${inputId}-hint` : undefined;

  return (
    <div className={`accessible-input-group ${className}`}>
      <label htmlFor={inputId} className="accessible-input-label">
        {label}
        {required && <span className="required-indicator" aria-label="obrigatório">*</span>}
      </label>
      
      {hint && (
        <div id={hintId} className="accessible-input-hint">
          {hint}
        </div>
      )}
      
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`accessible-input ${error ? 'error' : ''}`}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      
      {error && (
        <div id={errorId} className="accessible-input-error" role="alert">
          <span className="error-icon" aria-hidden="true">⚠️</span>
          {error}
        </div>
      )}
    </div>
  );
};

// Live Region for dynamic content announcements
export const LiveRegion = ({ 
  children, 
  politeness = 'polite',
  atomic = false,
  className = '' 
}) => {
  return (
    <div
      className={`live-region ${className}`}
      aria-live={politeness}
      aria-atomic={atomic}
      aria-relevant="additions text"
    >
      {children}
    </div>
  );
};

// Screen Reader Only Text
export const ScreenReaderOnly = ({ children, as: Component = 'span' }) => {
  return (
    <Component className="visually-hidden">
      {children}
    </Component>
  );
};

// Touch-Optimized Component for mobile interactions
export const TouchOptimized = ({ 
  children, 
  onTap, 
  onSwipeLeft, 
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  className = '',
  minTouchTarget = 44,
  ...props 
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = (e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isUpSwipe = distanceY > minSwipeDistance;
    const isDownSwipe = distanceY < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    } else if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    } else if (isUpSwipe && onSwipeUp) {
      onSwipeUp();
    } else if (isDownSwipe && onSwipeDown) {
      onSwipeDown();
    } else if (Math.abs(distanceX) < 10 && Math.abs(distanceY) < 10 && onTap) {
      onTap();
    }
  };

  return (
    <div
      className={`touch-optimized ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        minWidth: `${minTouchTarget}px`,
        minHeight: `${minTouchTarget}px`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Keyboard Navigation Helper
export const KeyboardNavigable = ({ 
  children, 
  onArrowUp, 
  onArrowDown, 
  onArrowLeft, 
  onArrowRight,
  onEnter,
  onEscape,
  className = ''
}) => {
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        onArrowUp?.();
        break;
      case 'ArrowDown':
        e.preventDefault();
        onArrowDown?.();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        onArrowLeft?.();
        break;
      case 'ArrowRight':
        e.preventDefault();
        onArrowRight?.();
        break;
      case 'Enter':
        e.preventDefault();
        onEnter?.();
        break;
      case 'Escape':
        e.preventDefault();
        onEscape?.();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`keyboard-navigable ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

// Responsive Container with breakpoint detection
export const ResponsiveContainer = ({ children, className = '' }) => {
  const [breakpoint, setBreakpoint] = useState('desktop');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setBreakpoint('mobile');
      } else if (width < 768) {
        setBreakpoint('tablet');
      } else if (width < 1024) {
        setBreakpoint('laptop');
      } else {
        setBreakpoint('desktop');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return (
    <div className={`responsive-container ${breakpoint} ${className}`} data-breakpoint={breakpoint}>
      {children}
    </div>
  );
};

// Accessibility Announcer for dynamic changes
export const AccessibilityAnnouncer = () => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const handleAnnouncement = (event) => {
      setAnnouncement(event.detail.message);
      setTimeout(() => setAnnouncement(''), 1000);
    };

    window.addEventListener('announce', handleAnnouncement);
    return () => window.removeEventListener('announce', handleAnnouncement);
  }, []);

  return (
    <div
      className="accessibility-announcer"
      aria-live="assertive"
      aria-atomic="true"
    >
      {announcement}
    </div>
  );
};

// Utility function to announce messages
export const announce = (message) => {
  window.dispatchEvent(new CustomEvent('announce', {
    detail: { message }
  }));
};

// High Contrast Mode Detector
export const HighContrastDetector = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const checkHighContrast = () => {
      const isHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setIsHighContrast(isHighContrast);
      document.documentElement.classList.toggle('high-contrast', isHighContrast);
    };

    checkHighContrast();
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);

    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, []);

  return children;
};

// Reduced Motion Detector
export const ReducedMotionDetector = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkReducedMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setPrefersReducedMotion(prefersReduced);
      document.documentElement.classList.toggle('reduced-motion', prefersReduced);
    };

    checkReducedMotion();
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => mediaQuery.removeEventListener('change', checkReducedMotion);
  }, []);

  return children;
};

export default {
  SkipLink,
  FocusTrap,
  AccessibleButton,
  AccessibleInput,
  LiveRegion,
  ScreenReaderOnly,
  TouchOptimized,
  KeyboardNavigable,
  ResponsiveContainer,
  AccessibilityAnnouncer,
  announce,
  HighContrastDetector,
  ReducedMotionDetector
};