import React, { useState, useEffect } from 'react';

// Error Boundary Component
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          title="Ops! Algo deu errado"
          description="Encontramos um erro inesperado. Nossa equipe foi notificada."
          action={{
            label: "Tentar novamente",
            onClick: () => window.location.reload()
          }}
          type="error"
        />
      );
    }

    return this.props.children;
  }
}

// Generic Error State Component
export const ErrorState = ({ 
  title = "Erro", 
  description = "Algo deu errado", 
  action = null, 
  type = "error",
  icon = null 
}) => {
  const getIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'network':
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M32 16v16M32 40h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 48l32-32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'timeout':
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
            <path d="M32 16v16l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
            <path d="M32 20v16M32 44h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
    }
  };

  return (
    <div className="error-state animate-fade-in">
      <div className="error-state-content">
        <div className="error-state-icon">
          {getIcon()}
        </div>
        <h3 className="error-state-title">{title}</h3>
        <p className="error-state-description">{description}</p>
        {action && (
          <button 
            className="btn btn-primary error-state-action interactive glow-on-hover"
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};

// Empty State Component
export const EmptyState = ({ 
  title = "Nenhum item encontrado", 
  description = "Não há conteúdo para exibir no momento", 
  action = null,
  illustration = null 
}) => {
  const defaultIllustration = (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M40 60h40M60 40v40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.3"/>
    </svg>
  );

  return (
    <div className="empty-state animate-fade-in">
      <div className="empty-state-content">
        <div className="empty-state-illustration">
          {illustration || defaultIllustration}
        </div>
        <h3 className="empty-state-title">{title}</h3>
        <p className="empty-state-description">{description}</p>
        {action && (
          <button 
            className="btn btn-primary empty-state-action interactive glow-on-hover"
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};

// Loading State Component
export const LoadingState = ({ 
  message = "Carregando...", 
  type = "spinner",
  size = "medium" 
}) => {
  const getLoader = () => {
    switch (type) {
      case 'skeleton':
        return (
          <div className="skeleton-loader">
            <div className="skeleton-line skeleton-line-title"></div>
            <div className="skeleton-line skeleton-line-text"></div>
            <div className="skeleton-line skeleton-line-text short"></div>
            <div className="skeleton-line skeleton-line-button"></div>
          </div>
        );
      case 'dots':
        return (
          <div className="dots-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        );
      default:
        return (
          <div className={`spinner-loader ${size}`}>
            <svg viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="31.416"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="loading-state animate-fade-in">
      <div className="loading-state-content">
        {getLoader()}
        <p className="loading-state-message">{message}</p>
      </div>
    </div>
  );
};

// Network Status Component
export const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showOfflineMessage) return null;

  return (
    <div className="network-status offline animate-slide-down">
      <div className="container">
        <div className="network-status-content">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1 9L9 1L17 9M3 7V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18V10H12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 1L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Você está offline. Algumas funcionalidades podem estar limitadas.</span>
          <button 
            className="network-status-close"
            onClick={() => setShowOfflineMessage(false)}
            aria-label="Fechar aviso"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Confirmation Dialog Component
export const ConfirmationDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirmar ação", 
  description = "Tem certeza que deseja continuar?",
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  type = "default" // default, danger, warning
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'danger':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <div className="confirmation-dialog-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="confirmation-dialog animate-scale-in" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirmation-dialog-header">
          <div className={`confirmation-dialog-icon ${type}`}>
            {getIcon()}
          </div>
          <h3 className="confirmation-dialog-title">{title}</h3>
        </div>
        <div className="confirmation-dialog-body">
          <p className="confirmation-dialog-description">{description}</p>
        </div>
        <div className="confirmation-dialog-footer">
          <button 
            className="btn btn-secondary confirmation-dialog-cancel interactive"
            onClick={onClose}
          >
            {cancelLabel}
          </button>
          <button 
            className={`btn ${type === 'danger' ? 'btn-danger' : 'btn-primary'} confirmation-dialog-confirm interactive glow-on-hover`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Feedback Component
export const SuccessFeedback = ({ 
  isVisible, 
  message = "Ação realizada com sucesso!", 
  onClose,
  autoClose = true,
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="success-feedback animate-slide-down">
      <div className="success-feedback-content">
        <div className="success-feedback-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="success-feedback-message">{message}</span>
        {onClose && (
          <button 
            className="success-feedback-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};