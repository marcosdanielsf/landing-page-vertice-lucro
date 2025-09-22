import React, { useState, useEffect, useRef } from 'react';

// Hook para gerenciamento de permissões
const usePermissions = (userRole = 'user') => {
  const permissions = {
    admin: ['read', 'write', 'delete', 'manage_users', 'view_audit', 'export_data'],
    manager: ['read', 'write', 'view_audit', 'export_data'],
    user: ['read', 'write'],
    viewer: ['read']
  };

  const hasPermission = (action) => {
    return permissions[userRole]?.includes(action) || false;
  };

  return { hasPermission, userRole, permissions: permissions[userRole] || [] };
};

// Componente de Controle de Permissões
export const PermissionGate = ({ 
  children, 
  requiredPermission, 
  userRole = 'user',
  fallback = null 
}) => {
  const { hasPermission } = usePermissions(userRole);

  if (!hasPermission(requiredPermission)) {
    return fallback || (
      <div className="permission-denied">
        <div className="permission-denied-icon">🔒</div>
        <h3 className="permission-denied-title">Acesso Negado</h3>
        <p className="permission-denied-message">
          Você não tem permissão para acessar este recurso.
        </p>
      </div>
    );
  }

  return children;
};

// Componente de Interface Baseada em Função
export const RoleBasedUI = ({ userRole = 'user', children }) => {
  const { permissions } = usePermissions(userRole);

  return (
    <div className={`role-based-ui role-based-ui--${userRole}`}>
      <div className="role-indicator">
        <span className="role-badge">{userRole.toUpperCase()}</span>
        <span className="permissions-count">{permissions.length} permissões</span>
      </div>
      {children}
    </div>
  );
};

// Componente de Trilha de Auditoria
export const AuditTrail = ({ activities = [] }) => {
  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = activities;

    if (filter !== 'all') {
      filtered = filtered.filter(activity => activity.type === filter);
    }

    if (searchTerm) {
      filtered = filtered.filter(activity => 
        activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.user.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredActivities(filtered);
  }, [activities, filter, searchTerm]);

  const getActivityIcon = (type) => {
    const icons = {
      login: '🔑',
      logout: '🚪',
      create: '➕',
      update: '✏️',
      delete: '🗑️',
      view: '👁️',
      export: '📤',
      import: '📥',
      error: '⚠️'
    };
    return icons[type] || '📝';
  };

  const getActivityColor = (type) => {
    const colors = {
      login: 'success',
      logout: 'info',
      create: 'success',
      update: 'warning',
      delete: 'error',
      view: 'info',
      export: 'info',
      import: 'warning',
      error: 'error'
    };
    return colors[type] || 'neutral';
  };

  return (
    <div className="audit-trail">
      <div className="audit-header">
        <h3 className="audit-title">Trilha de Auditoria</h3>
        <div className="audit-controls">
          <input
            type="text"
            placeholder="Buscar atividades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="audit-search"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="audit-filter"
          >
            <option value="all">Todas as atividades</option>
            <option value="login">Login</option>
            <option value="logout">Logout</option>
            <option value="create">Criação</option>
            <option value="update">Atualização</option>
            <option value="delete">Exclusão</option>
            <option value="view">Visualização</option>
            <option value="export">Exportação</option>
            <option value="import">Importação</option>
            <option value="error">Erros</option>
          </select>
        </div>
      </div>

      <div className="audit-timeline">
        {filteredActivities.map((activity, index) => (
          <div 
            key={activity.id || index} 
            className={`audit-item audit-item--${getActivityColor(activity.type)}`}
          >
            <div className="audit-icon">
              {getActivityIcon(activity.type)}
            </div>
            <div className="audit-content">
              <div className="audit-main">
                <span className="audit-description">{activity.description}</span>
                <span className="audit-user">por {activity.user}</span>
              </div>
              <div className="audit-meta">
                <span className="audit-timestamp">{activity.timestamp}</span>
                <span className="audit-ip">{activity.ip}</span>
                {activity.details && (
                  <button className="audit-details-toggle">
                    Ver detalhes
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="audit-empty">
          <div className="audit-empty-icon">📋</div>
          <h4 className="audit-empty-title">Nenhuma atividade encontrada</h4>
          <p className="audit-empty-message">
            Não há atividades que correspondam aos filtros aplicados.
          </p>
        </div>
      )}
    </div>
  );
};

// Componente de Registro de Atividades
export const ActivityLog = ({ logs = [] }) => {
  const [expandedLog, setExpandedLog] = useState(null);

  const toggleLogExpansion = (logId) => {
    setExpandedLog(expandedLog === logId ? null : logId);
  };

  return (
    <div className="activity-log">
      <div className="log-header">
        <h3 className="log-title">Registro de Atividades</h3>
        <div className="log-stats">
          <span className="log-count">{logs.length} registros</span>
        </div>
      </div>

      <div className="log-list">
        {logs.map((log) => (
          <div key={log.id} className={`log-entry log-entry--${log.level}`}>
            <div className="log-summary" onClick={() => toggleLogExpansion(log.id)}>
              <div className="log-level-indicator">
                <span className={`log-level log-level--${log.level}`}>
                  {log.level.toUpperCase()}
                </span>
              </div>
              <div className="log-content">
                <span className="log-message">{log.message}</span>
                <span className="log-timestamp">{log.timestamp}</span>
              </div>
              <div className="log-expand-icon">
                {expandedLog === log.id ? '▼' : '▶'}
              </div>
            </div>

            {expandedLog === log.id && (
              <div className="log-details">
                <div className="log-detail-grid">
                  <div className="log-detail-item">
                    <span className="log-detail-label">Usuário:</span>
                    <span className="log-detail-value">{log.user}</span>
                  </div>
                  <div className="log-detail-item">
                    <span className="log-detail-label">IP:</span>
                    <span className="log-detail-value">{log.ip}</span>
                  </div>
                  <div className="log-detail-item">
                    <span className="log-detail-label">User Agent:</span>
                    <span className="log-detail-value">{log.userAgent}</span>
                  </div>
                  <div className="log-detail-item">
                    <span className="log-detail-label">Sessão:</span>
                    <span className="log-detail-value">{log.sessionId}</span>
                  </div>
                </div>
                {log.stackTrace && (
                  <div className="log-stack-trace">
                    <h4 className="stack-trace-title">Stack Trace:</h4>
                    <pre className="stack-trace-content">{log.stackTrace}</pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Fluxo de Integração
export const OnboardingFlow = ({ steps = [], currentStep = 0, onStepComplete }) => {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressPercentage = (completedSteps.size / steps.length) * 100;
    setProgress(progressPercentage);
  }, [completedSteps, steps.length]);

  const handleStepComplete = (stepIndex) => {
    const newCompletedSteps = new Set(completedSteps);
    newCompletedSteps.add(stepIndex);
    setCompletedSteps(newCompletedSteps);
    onStepComplete?.(stepIndex);
  };

  return (
    <div className="onboarding-flow">
      <div className="onboarding-header">
        <h2 className="onboarding-title">Configuração Inicial</h2>
        <div className="onboarding-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="progress-text">
            {completedSteps.size} de {steps.length} concluídos
          </span>
        </div>
      </div>

      <div className="onboarding-steps">
        {steps.map((step, index) => (
          <div 
            key={step.id || index}
            className={`onboarding-step ${
              index === currentStep ? 'onboarding-step--active' : ''
            } ${
              completedSteps.has(index) ? 'onboarding-step--completed' : ''
            }`}
          >
            <div className="step-indicator">
              <div className="step-number">
                {completedSteps.has(index) ? '✓' : index + 1}
              </div>
            </div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index === currentStep && (
                <div className="step-actions">
                  <button 
                    className="step-action-button"
                    onClick={() => handleStepComplete(index)}
                  >
                    {step.actionText || 'Concluir Etapa'}
                  </button>
                  {step.skipable && (
                    <button className="step-skip-button">
                      Pular
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Documentação de Ajuda
export const HelpDocumentation = ({ sections = [] }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);

  useEffect(() => {
    if (searchTerm) {
      const filtered = sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSections(filtered);
    } else {
      setFilteredSections(sections);
    }
  }, [searchTerm, sections]);

  return (
    <div className="help-documentation">
      <div className="help-sidebar">
        <div className="help-search">
          <input
            type="text"
            placeholder="Buscar na documentação..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="help-search-input"
          />
        </div>
        <nav className="help-nav">
          {filteredSections.map((section) => (
            <button
              key={section.id}
              className={`help-nav-item ${
                activeSection === section.id ? 'help-nav-item--active' : ''
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="help-nav-icon">{section.icon}</span>
              <span className="help-nav-title">{section.title}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="help-content">
        {filteredSections
          .filter(section => section.id === activeSection)
          .map((section) => (
            <div key={section.id} className="help-section">
              <header className="help-section-header">
                <h1 className="help-section-title">{section.title}</h1>
                <p className="help-section-description">{section.description}</p>
              </header>
              <div 
                className="help-section-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              {section.relatedLinks && (
                <div className="help-related">
                  <h3 className="help-related-title">Artigos Relacionados</h3>
                  <ul className="help-related-list">
                    {section.relatedLinks.map((link, index) => (
                      <li key={index} className="help-related-item">
                        <a href={link.url} className="help-related-link">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

// Componente de Importação/Exportação de Dados
export const DataImportExport = ({ onImport, onExport, supportedFormats = ['csv', 'json', 'xlsx'] }) => {
  const [importFile, setImportFile] = useState(null);
  const [exportFormat, setExportFormat] = useState('csv');
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImportFile(file);
      validateFile(file);
    }
  };

  const validateFile = (file) => {
    const errors = [];
    const maxSize = 10 * 1024 * 1024; // 10MB
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (file.size > maxSize) {
      errors.push('Arquivo muito grande. Tamanho máximo: 10MB');
    }

    if (!supportedFormats.includes(fileExtension)) {
      errors.push(`Formato não suportado. Formatos aceitos: ${supportedFormats.join(', ')}`);
    }

    setValidationErrors(errors);
  };

  const handleImport = async () => {
    if (!importFile || validationErrors.length > 0) return;

    setIsProcessing(true);
    try {
      await onImport?.(importFile);
      setImportFile(null);
      setValidationErrors([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setValidationErrors([error.message]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExport = async () => {
    setIsProcessing(true);
    try {
      await onExport?.(exportFormat);
    } catch (error) {
      console.error('Erro na exportação:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="data-import-export">
      <div className="import-section">
        <h3 className="section-title">Importar Dados</h3>
        <div className="file-upload">
          <input
            ref={fileInputRef}
            type="file"
            accept={supportedFormats.map(format => `.${format}`).join(',')}
            onChange={handleFileSelect}
            className="file-input"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="file-upload-label">
            <span className="upload-icon">📁</span>
            <span className="upload-text">
              {importFile ? importFile.name : 'Selecionar arquivo'}
            </span>
          </label>
        </div>

        {validationErrors.length > 0 && (
          <div className="validation-errors">
            {validationErrors.map((error, index) => (
              <div key={index} className="validation-error">
                ⚠️ {error}
              </div>
            ))}
          </div>
        )}

        <button
          className="import-button"
          onClick={handleImport}
          disabled={!importFile || validationErrors.length > 0 || isProcessing}
        >
          {isProcessing ? 'Importando...' : 'Importar Dados'}
        </button>
      </div>

      <div className="export-section">
        <h3 className="section-title">Exportar Dados</h3>
        <div className="export-options">
          <label className="export-label">
            Formato:
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="export-format-select"
            >
              {supportedFormats.map(format => (
                <option key={format} value={format}>
                  {format.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          className="export-button"
          onClick={handleExport}
          disabled={isProcessing}
        >
          {isProcessing ? 'Exportando...' : 'Exportar Dados'}
        </button>
      </div>
    </div>
  );
};

// Componente de Interface de Administrador
export const AdminInterface = ({ users = [], onUserAction }) => {
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [bulkAction, setBulkAction] = useState('');

  const handleUserSelect = (userId) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedUsers.size === users.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(users.map(user => user.id)));
    }
  };

  const handleBulkAction = () => {
    if (bulkAction && selectedUsers.size > 0) {
      onUserAction?.(bulkAction, Array.from(selectedUsers));
      setSelectedUsers(new Set());
      setBulkAction('');
    }
  };

  return (
    <div className="admin-interface">
      <div className="admin-header">
        <h2 className="admin-title">Gerenciamento de Usuários</h2>
        <div className="admin-stats">
          <span className="stat-item">
            <span className="stat-value">{users.length}</span>
            <span className="stat-label">Total de usuários</span>
          </span>
          <span className="stat-item">
            <span className="stat-value">{selectedUsers.size}</span>
            <span className="stat-label">Selecionados</span>
          </span>
        </div>
      </div>

      {selectedUsers.size > 0 && (
        <div className="bulk-actions">
          <select
            value={bulkAction}
            onChange={(e) => setBulkAction(e.target.value)}
            className="bulk-action-select"
          >
            <option value="">Selecionar ação</option>
            <option value="activate">Ativar usuários</option>
            <option value="deactivate">Desativar usuários</option>
            <option value="delete">Excluir usuários</option>
            <option value="export">Exportar dados</option>
          </select>
          <button
            className="bulk-action-button"
            onClick={handleBulkAction}
            disabled={!bulkAction}
          >
            Executar Ação
          </button>
        </div>
      )}

      <div className="users-table">
        <div className="table-header">
          <label className="select-all">
            <input
              type="checkbox"
              checked={selectedUsers.size === users.length && users.length > 0}
              onChange={handleSelectAll}
            />
            Selecionar todos
          </label>
        </div>

        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user-row">
              <label className="user-select">
                <input
                  type="checkbox"
                  checked={selectedUsers.has(user.id)}
                  onChange={() => handleUserSelect(user.id)}
                />
              </label>
              <div className="user-info">
                <div className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="user-details">
                  <span className="user-name">{user.name}</span>
                  <span className="user-email">{user.email}</span>
                </div>
              </div>
              <div className="user-role">
                <span className={`role-badge role-badge--${user.role}`}>
                  {user.role}
                </span>
              </div>
              <div className="user-status">
                <span className={`status-indicator status-indicator--${user.status}`}>
                  {user.status}
                </span>
              </div>
              <div className="user-actions">
                <button
                  className="action-button action-button--edit"
                  onClick={() => onUserAction?.('edit', [user.id])}
                >
                  Editar
                </button>
                <button
                  className="action-button action-button--delete"
                  onClick={() => onUserAction?.('delete', [user.id])}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default {
  PermissionGate,
  RoleBasedUI,
  AuditTrail,
  ActivityLog,
  OnboardingFlow,
  HelpDocumentation,
  DataImportExport,
  AdminInterface,
  usePermissions
};