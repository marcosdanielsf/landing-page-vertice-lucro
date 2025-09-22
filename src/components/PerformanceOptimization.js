import React, { useState, useEffect, useRef, useCallback } from 'react';

// Lazy Image Component with Intersection Observer
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError();
  }, [onError]);

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`} {...props}>
      {!isInView && (
        <div className="lazy-image-placeholder">
          {placeholder || <div className="skeleton-line" style={{ height: '200px' }} />}
        </div>
      )}
      
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
      
      {hasError && (
        <div className="lazy-image-error">
          <div className="error-icon">⚠️</div>
          <p>Falha ao carregar imagem</p>
        </div>
      )}
    </div>
  );
};

// Optimized Image Component with multiple formats and sizes
export const OptimizedImage = ({ 
  src, 
  alt, 
  sizes = '100vw',
  className = '',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageFormat, setImageFormat] = useState('');

  useEffect(() => {
    // Check for WebP support
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Check for AVIF support
    const checkAVIFSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    };

    let format = 'jpg';
    if (checkAVIFSupport()) {
      format = 'avif';
    } else if (checkWebPSupport()) {
      format = 'webp';
    }

    setImageFormat(format);
    setImageSrc(src.replace(/\.(jpg|jpeg|png)$/i, `.${format}`));
  }, [src]);

  return (
    <picture className={`optimized-image ${className}`}>
      <source srcSet={imageSrc} type={`image/${imageFormat}`} />
      <LazyImage src={src} alt={alt} sizes={sizes} {...props} />
    </picture>
  );
};

// Skeleton Screen Component
export const SkeletonScreen = ({ 
  type = 'default',
  lines = 3,
  showAvatar = false,
  showButton = false,
  className = ''
}) => {
  const renderLines = () => {
    return Array.from({ length: lines }, (_, index) => (
      <div 
        key={index}
        className={`skeleton-line skeleton-line-text ${
          index === lines - 1 ? 'short' : ''
        }`}
      />
    ));
  };

  const renderCard = () => (
    <div className="skeleton-card">
      <div className="skeleton-line" style={{ height: '200px', marginBottom: '16px' }} />
      <div className="skeleton-line skeleton-line-title" />
      {renderLines()}
      {showButton && <div className="skeleton-line skeleton-line-button" />}
    </div>
  );

  const renderProfile = () => (
    <div className="skeleton-profile">
      <div className="skeleton-avatar" />
      <div className="skeleton-profile-content">
        <div className="skeleton-line skeleton-line-title" />
        <div className="skeleton-line skeleton-line-text short" />
      </div>
    </div>
  );

  const renderList = () => (
    <div className="skeleton-list">
      {Array.from({ length: lines }, (_, index) => (
        <div key={index} className="skeleton-list-item">
          {showAvatar && <div className="skeleton-avatar-small" />}
          <div className="skeleton-list-content">
            <div className="skeleton-line skeleton-line-text" />
            <div className="skeleton-line skeleton-line-text short" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`skeleton-loader ${className}`}>
      {type === 'card' && renderCard()}
      {type === 'profile' && renderProfile()}
      {type === 'list' && renderList()}
      {type === 'default' && (
        <>
          {showAvatar && <div className="skeleton-avatar" />}
          <div className="skeleton-line skeleton-line-title" />
          {renderLines()}
          {showButton && <div className="skeleton-line skeleton-line-button" />}
        </>
      )}
    </div>
  );
};

// Lazy Section Component for content sections
export const LazySection = ({ 
  children, 
  fallback = <SkeletonScreen />,
  threshold = 0.1,
  rootMargin = '100px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={`lazy-section ${className}`}>
      {isVisible ? children : fallback}
    </div>
  );
};

// Infinite Scroll Component
export const InfiniteScroll = ({ 
  children,
  hasMore = true,
  loadMore = () => {},
  loader = <SkeletonScreen type="list" lines={3} />,
  threshold = 0.8,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = async () => {
      if (!scrollRef.current || isLoading || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      if (scrollPercentage >= threshold) {
        setIsLoading(true);
        try {
          await loadMore();
        } finally {
          setIsLoading(false);
        }
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading, hasMore, loadMore, threshold]);

  return (
    <div ref={scrollRef} className={`infinite-scroll ${className}`}>
      {children}
      {isLoading && loader}
      {!hasMore && (
        <div className="infinite-scroll-end">
          <p>Você chegou ao final!</p>
        </div>
      )}
    </div>
  );
};

// Performance Monitor Component
export const PerformanceMonitor = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  return children;
};

// Preload Component for critical resources
export const ResourcePreloader = ({ resources = [] }) => {
  useEffect(() => {
    resources.forEach(({ href, as, type, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossorigin) link.crossOrigin = crossorigin;
      
      document.head.appendChild(link);
    });

    // Cleanup function to remove preload links
    return () => {
      resources.forEach(({ href }) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, [resources]);

  return null;
};

// Critical CSS Loader
export const CriticalCSSLoader = ({ criticalCSS, nonCriticalCSS }) => {
  useEffect(() => {
    // Load critical CSS immediately
    if (criticalCSS) {
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    }

    // Load non-critical CSS after page load
    if (nonCriticalCSS) {
      const loadNonCriticalCSS = () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = nonCriticalCSS;
        document.head.appendChild(link);
      };

      if (document.readyState === 'complete') {
        loadNonCriticalCSS();
      } else {
        window.addEventListener('load', loadNonCriticalCSS);
        return () => window.removeEventListener('load', loadNonCriticalCSS);
      }
    }
  }, [criticalCSS, nonCriticalCSS]);

  return null;
};

// Bundle Analyzer Component (Development only)
export const BundleAnalyzer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Analyze bundle size and performance
      const analyzeBundle = () => {
        const scripts = Array.from(document.querySelectorAll('script[src]'));
        const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        
        console.group('Bundle Analysis');
        console.log('Scripts:', scripts.length);
        console.log('Stylesheets:', styles.length);
        console.log('Total DOM nodes:', document.querySelectorAll('*').length);
        console.groupEnd();
      };

      setTimeout(analyzeBundle, 1000);
    }
  }, []);

  return null;
};

export default {
  LazyImage,
  OptimizedImage,
  SkeletonScreen,
  LazySection,
  InfiniteScroll,
  PerformanceMonitor,
  ResourcePreloader,
  CriticalCSSLoader,
  BundleAnalyzer
};