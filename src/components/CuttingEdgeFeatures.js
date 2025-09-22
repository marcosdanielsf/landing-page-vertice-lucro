import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Hook para notificações inteligentes
const useSmartNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({
    priority: 'medium',
    groupSimilar: true,
    autoHide: true,
    sound: true
  });

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      timestamp: new Date(),
      priority: notification.priority || 'medium',
      ...notification
    };

    setNotifications(prev => {
      if (settings.groupSimilar) {
        const similar = prev.find(n => n.type === notification.type && n.category === notification.category);
        if (similar) {
          return prev.map(n => n.id === similar.id ? { ...n, count: (n.count || 1) + 1, timestamp: new Date() } : n);
        }
      }
      return [newNotification, ...prev].slice(0, 10);
    });

    if (settings.autoHide && notification.priority !== 'critical') {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, notification.duration || 5000);
    }
  }, [settings]);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    settings,
    setSettings
  };
};

// Hook para atalhos de teclado
const useKeyboardShortcuts = () => {
  const [shortcuts, setShortcuts] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  const registerShortcut = useCallback((key, callback, description) => {
    setShortcuts(prev => ({
      ...prev,
      [key]: { callback, description }
    }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = `${e.ctrlKey ? 'ctrl+' : ''}${e.shiftKey ? 'shift+' : ''}${e.altKey ? 'alt+' : ''}${e.key.toLowerCase()}`;
      
      if (key === 'ctrl+shift+?') {
        e.preventDefault();
        setShowOverlay(prev => !prev);
        return;
      }

      if (shortcuts[key]) {
        e.preventDefault();
        shortcuts[key].callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);

  return {
    registerShortcut,
    showOverlay,
    setShowOverlay,
    shortcuts
  };
};

// Hook para colaboração em tempo real
const useRealTimeCollaboration = () => {
  const [collaborators, setCollaborators] = useState([]);
  const [comments, setComments] = useState([]);
  const [cursors, setCursors] = useState({});

  const addCollaborator = useCallback((user) => {
    setCollaborators(prev => {
      const exists = prev.find(c => c.id === user.id);
      if (exists) return prev;
      return [...prev, { ...user, joinedAt: new Date() }];
    });
  }, []);

  const removeCollaborator = useCallback((userId) => {
    setCollaborators(prev => prev.filter(c => c.id !== userId));
    setCursors(prev => {
      const newCursors = { ...prev };
      delete newCursors[userId];
      return newCursors;
    });
  }, []);

  const addComment = useCallback((comment) => {
    const newComment = {
      id: Date.now() + Math.random(),
      timestamp: new Date(),
      ...comment
    };
    setComments(prev => [...prev, newComment]);
  }, []);

  const updateCursor = useCallback((userId, position) => {
    setCursors(prev => ({
      ...prev,
      [userId]: { ...position, timestamp: Date.now() }
    }));
  }, []);

  return {
    collaborators,
    comments,
    cursors,
    addCollaborator,
    removeCollaborator,
    addComment,
    updateCursor
  };
};

// Hook para preenchimento automático inteligente
const useSmartAutocomplete = (data, options = {}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSuggestions = useCallback(async (query) => {
    if (!query || query.length < (options.minLength || 2)) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    
    // Simular busca inteligente
    setTimeout(() => {
      const filtered = data.filter(item => {
        const searchText = typeof item === 'string' ? item : item.label || item.name || '';
        return searchText.toLowerCase().includes(query.toLowerCase());
      });

      // Ordenar por relevância
      const sorted = filtered.sort((a, b) => {
        const aText = typeof a === 'string' ? a : a.label || a.name || '';
        const bText = typeof b === 'string' ? b : b.label || b.name || '';
        
        const aIndex = aText.toLowerCase().indexOf(query.toLowerCase());
        const bIndex = bText.toLowerCase().indexOf(query.toLowerCase());
        
        if (aIndex !== bIndex) return aIndex - bIndex;
        return aText.length - bText.length;
      });

      setSuggestions(sorted.slice(0, options.maxResults || 10));
      setIsLoading(false);
    }, options.delay || 300);
  }, [data, options]);

  return { suggestions, isLoading, getSuggestions };
};

// Componente de Notificações Inteligentes
export const SmartNotificationCenter = () => {
  const { notifications, removeNotification, clearAll, settings, setSettings } = useSmartNotifications();

  return (
    <div className="smart-notification-center">
      <div className="notification-header">
        <h3>Notificações</h3>
        <div className="notification-actions">
          <button onClick={clearAll} className="clear-all-btn">
            Limpar Todas
          </button>
          <button className="settings-btn">⚙️</button>
        </div>
      </div>

      <div className="notification-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item priority-${notification.priority}`}
          >
            <div className="notification-content">
              <div className="notification-icon">
                {notification.icon || '📢'}
              </div>
              <div className="notification-text">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                {notification.count > 1 && (
                  <span className="notification-count">+{notification.count - 1} similar</span>
                )}
              </div>
            </div>
            <div className="notification-meta">
              <span className="notification-time">
                {notification.timestamp.toLocaleTimeString()}
              </span>
              <button 
                onClick={() => removeNotification(notification.id)}
                className="notification-close"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="notification-empty">
          <p>Nenhuma notificação</p>
        </div>
      )}
    </div>
  );
};

// Componente de Atalhos de Teclado
export const KeyboardShortcutOverlay = () => {
  const { shortcuts, showOverlay, setShowOverlay } = useKeyboardShortcuts();

  if (!showOverlay) return null;

  return (
    <div className="keyboard-overlay">
      <div className="keyboard-overlay-content">
        <div className="keyboard-header">
          <h3>Atalhos de Teclado</h3>
          <button onClick={() => setShowOverlay(false)}>×</button>
        </div>
        
        <div className="shortcuts-grid">
          {Object.entries(shortcuts).map(([key, { description }]) => (
            <div key={key} className="shortcut-item">
              <kbd className="shortcut-key">{key}</kbd>
              <span className="shortcut-description">{description}</span>
            </div>
          ))}
        </div>
        
        <div className="keyboard-footer">
          <p>Pressione <kbd>Ctrl+Shift+?</kbd> para mostrar/ocultar</p>
        </div>
      </div>
    </div>
  );
};

// Componente de Colaboração em Tempo Real
export const CollaborationPanel = () => {
  const { collaborators, comments, addComment } = useRealTimeCollaboration();
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment({
        text: newComment,
        author: 'Usuário Atual',
        position: { x: 100, y: 100 }
      });
      setNewComment('');
    }
  };

  return (
    <div className="collaboration-panel">
      <div className="collaborators-section">
        <h4>Colaboradores Online ({collaborators.length})</h4>
        <div className="collaborators-list">
          {collaborators.map(collaborator => (
            <div key={collaborator.id} className="collaborator-item">
              <div 
                className="collaborator-avatar"
                style={{ backgroundColor: collaborator.color }}
              >
                {collaborator.name.charAt(0)}
              </div>
              <span>{collaborator.name}</span>
              <div className="collaborator-status online"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="comments-section">
        <h4>Comentários ({comments.length})</h4>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-author">{comment.author}</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-time">
                {comment.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
        
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Adicionar comentário..."
            onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
          />
          <button onClick={handleAddComment}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

// Componente de Preenchimento Automático Inteligente
export const SmartAutocompleteInput = ({ data, placeholder, onSelect, ...props }) => {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { suggestions, isLoading, getSuggestions } = useSmartAutocomplete(data);
  const inputRef = useRef();

  useEffect(() => {
    getSuggestions(value);
  }, [value, getSuggestions]);

  const handleSelect = (suggestion) => {
    const selectedValue = typeof suggestion === 'string' ? suggestion : suggestion.label || suggestion.name;
    setValue(selectedValue);
    setShowSuggestions(false);
    onSelect?.(suggestion);
  };

  return (
    <div className="smart-autocomplete">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder={placeholder}
        {...props}
      />
      
      {showSuggestions && (suggestions.length > 0 || isLoading) && (
        <div className="autocomplete-dropdown">
          {isLoading && (
            <div className="autocomplete-loading">Carregando...</div>
          )}
          
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="autocomplete-item"
              onClick={() => handleSelect(suggestion)}
            >
              {typeof suggestion === 'string' ? suggestion : suggestion.label || suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Componente de Personalização com Visualização ao Vivo
export const LiveCustomizationPanel = () => {
  const [theme, setTheme] = useState({
    primaryColor: '#cf9653',
    secondaryColor: '#d5bd4b',
    fontSize: 16,
    borderRadius: 8,
    spacing: 16
  });

  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="customization-panel">
      <div className="customization-header">
        <h3>Personalização</h3>
        <button 
          onClick={() => setPreviewMode(!previewMode)}
          className={`preview-toggle ${previewMode ? 'active' : ''}`}
        >
          {previewMode ? 'Sair da Visualização' : 'Visualizar Mudanças'}
        </button>
      </div>

      <div className="customization-controls">
        <div className="control-group">
          <label>Cor Primária</label>
          <input
            type="color"
            value={theme.primaryColor}
            onChange={(e) => setTheme(prev => ({ ...prev, primaryColor: e.target.value }))}
          />
        </div>

        <div className="control-group">
          <label>Cor Secundária</label>
          <input
            type="color"
            value={theme.secondaryColor}
            onChange={(e) => setTheme(prev => ({ ...prev, secondaryColor: e.target.value }))}
          />
        </div>

        <div className="control-group">
          <label>Tamanho da Fonte: {theme.fontSize}px</label>
          <input
            type="range"
            min="12"
            max="24"
            value={theme.fontSize}
            onChange={(e) => setTheme(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
          />
        </div>

        <div className="control-group">
          <label>Raio da Borda: {theme.borderRadius}px</label>
          <input
            type="range"
            min="0"
            max="20"
            value={theme.borderRadius}
            onChange={(e) => setTheme(prev => ({ ...prev, borderRadius: parseInt(e.target.value) }))}
          />
        </div>
      </div>

      {previewMode && (
        <div className="live-preview" style={{
          '--primary-color': theme.primaryColor,
          '--secondary-color': theme.secondaryColor,
          '--font-size': `${theme.fontSize}px`,
          '--border-radius': `${theme.borderRadius}px`,
          '--spacing': `${theme.spacing}px`
        }}>
          <div className="preview-card">
            <h4>Visualização ao Vivo</h4>
            <p>Este é um exemplo de como suas mudanças aparecerão.</p>
            <button className="preview-button">Botão de Exemplo</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de Indicadores de Sincronização
export const SyncIndicator = ({ status = 'synced', lastSync, conflicts = [] }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'syncing': return '🔄';
      case 'synced': return '✅';
      case 'error': return '❌';
      case 'conflict': return '⚠️';
      default: return '⏸️';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'syncing': return 'Sincronizando...';
      case 'synced': return 'Sincronizado';
      case 'error': return 'Erro na sincronização';
      case 'conflict': return 'Conflitos detectados';
      default: return 'Pausado';
    }
  };

  return (
    <div className={`sync-indicator status-${status}`}>
      <div className="sync-status">
        <span className="sync-icon">{getStatusIcon()}</span>
        <span className="sync-text">{getStatusText()}</span>
      </div>
      
      {lastSync && (
        <div className="sync-time">
          Última sincronização: {lastSync.toLocaleTimeString()}
        </div>
      )}
      
      {conflicts.length > 0 && (
        <div className="sync-conflicts">
          <p>{conflicts.length} conflito(s) detectado(s)</p>
          <button className="resolve-conflicts-btn">Resolver Conflitos</button>
        </div>
      )}
    </div>
  );
};

// Componente de Padrões Inteligentes
export const SmartPatterns = () => {
  const [patterns, setPatterns] = useState([
    { id: 1, name: 'Fluxo de Trabalho Matinal', frequency: 85, suggestion: 'Automatizar relatório diário' },
    { id: 2, name: 'Revisão Semanal', frequency: 92, suggestion: 'Agendar lembretes automáticos' },
    { id: 3, name: 'Backup de Dados', frequency: 78, suggestion: 'Configurar backup automático' }
  ]);

  return (
    <div className="smart-patterns">
      <h3>Padrões Inteligentes Detectados</h3>
      
      <div className="patterns-list">
        {patterns.map(pattern => (
          <div key={pattern.id} className="pattern-item">
            <div className="pattern-info">
              <h4>{pattern.name}</h4>
              <div className="pattern-frequency">
                Frequência: {pattern.frequency}%
              </div>
              <div className="pattern-suggestion">
                💡 {pattern.suggestion}
              </div>
            </div>
            
            <div className="pattern-actions">
              <button className="pattern-apply">Aplicar</button>
              <button className="pattern-dismiss">Dispensar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente Principal de Recursos de Ponta
export const CuttingEdgeFeatures = () => {
  return (
    <div className="cutting-edge-features">
      <SmartNotificationCenter />
      <KeyboardShortcutOverlay />
      <CollaborationPanel />
      <LiveCustomizationPanel />
      <SmartPatterns />
      <SyncIndicator 
        status="synced" 
        lastSync={new Date()} 
      />
    </div>
  );
};

export default CuttingEdgeFeatures;