import React, { useState, useEffect, useRef } from 'react';

// Hook para animações de números
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(start + (end - start) * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, ref];
};

// Componente de Gráfico de Barras Interativo
export const InteractiveBarChart = ({ data, title, height = 300 }) => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const chartRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimationComplete(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="interactive-chart" ref={chartRef}>
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        {hoveredBar && (
          <div className="chart-tooltip">
            <span className="tooltip-label">{hoveredBar.label}</span>
            <span className="tooltip-value">{hoveredBar.value.toLocaleString()}</span>
          </div>
        )}
      </div>
      
      <div className="chart-container" style={{ height }}>
        <div className="chart-bars">
          {data.map((item, index) => (
            <div
              key={index}
              className="chart-bar-container"
              onMouseEnter={() => setHoveredBar(item)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <div
                className={`chart-bar ${hoveredBar === item ? 'chart-bar--hovered' : ''}`}
                style={{
                  height: animationComplete ? `${(item.value / maxValue) * 100}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="bar-value">
                  {hoveredBar === item && item.value.toLocaleString()}
                </div>
              </div>
              <div className="bar-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente de Gráfico de Pizza Interativo
export const InteractivePieChart = ({ data, title, size = 200 }) => {
  const [hoveredSlice, setHoveredSlice] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const chartRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimationComplete(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const slices = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const startAngle = cumulativePercentage * 3.6;
    const endAngle = (cumulativePercentage + percentage) * 3.6;
    cumulativePercentage += percentage;

    return {
      ...item,
      percentage,
      startAngle,
      endAngle,
      index
    };
  });

  return (
    <div className="interactive-pie-chart" ref={chartRef}>
      <div className="pie-chart-header">
        <h3 className="chart-title">{title}</h3>
      </div>
      
      <div className="pie-chart-container">
        <div className="pie-chart-visual" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="pie-svg">
            {slices.map((slice, index) => {
              const radius = size / 2 - 20;
              const centerX = size / 2;
              const centerY = size / 2;
              
              const startAngleRad = (slice.startAngle - 90) * (Math.PI / 180);
              const endAngleRad = (slice.endAngle - 90) * (Math.PI / 180);
              
              const x1 = centerX + radius * Math.cos(startAngleRad);
              const y1 = centerY + radius * Math.sin(startAngleRad);
              const x2 = centerX + radius * Math.cos(endAngleRad);
              const y2 = centerY + radius * Math.sin(endAngleRad);
              
              const largeArcFlag = slice.endAngle - slice.startAngle > 180 ? 1 : 0;
              
              const pathData = [
                `M ${centerX} ${centerY}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');

              return (
                <path
                  key={index}
                  d={pathData}
                  className={`pie-slice pie-slice--${index} ${hoveredSlice === slice ? 'pie-slice--hovered' : ''}`}
                  onMouseEnter={() => setHoveredSlice(slice)}
                  onMouseLeave={() => setHoveredSlice(null)}
                  style={{
                    opacity: animationComplete ? 1 : 0,
                    transform: hoveredSlice === slice ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: `${centerX}px ${centerY}px`,
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              );
            })}
          </svg>
          
          {hoveredSlice && (
            <div className="pie-tooltip">
              <div className="tooltip-label">{hoveredSlice.label}</div>
              <div className="tooltip-value">{hoveredSlice.percentage.toFixed(1)}%</div>
            </div>
          )}
        </div>
        
        <div className="pie-legend">
          {slices.map((slice, index) => (
            <div
              key={index}
              className={`legend-item ${hoveredSlice === slice ? 'legend-item--active' : ''}`}
              onMouseEnter={() => setHoveredSlice(slice)}
              onMouseLeave={() => setHoveredSlice(null)}
            >
              <div className={`legend-color legend-color--${index}`}></div>
              <span className="legend-label">{slice.label}</span>
              <span className="legend-value">{slice.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente de Tabela de Dados Elegante
export const ElegantDataTable = ({ data, columns, title, searchable = true, sortable = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Filtrar dados
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Ordenar dados
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Paginar dados
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (key) => {
    if (!sortable) return;
    
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <div className="elegant-data-table">
      <div className="table-header">
        <h3 className="table-title">{title}</h3>
        {searchable && (
          <div className="table-search">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="search-input"
            />
          </div>
        )}
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`table-header-cell ${sortable ? 'sortable' : ''} ${
                    sortConfig.key === column.key ? `sorted-${sortConfig.direction}` : ''
                  }`}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="header-content">
                    <span>{column.label}</span>
                    {sortable && (
                      <div className="sort-indicators">
                        <span className="sort-arrow sort-arrow--up">▲</span>
                        <span className="sort-arrow sort-arrow--down">▼</span>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="table-cell">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="table-pagination">
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          
          <div className="pagination-info">
            Página {currentPage} de {totalPages}
          </div>
          
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

// Componente de Indicador de Progresso Avançado
export const AdvancedProgressIndicator = ({ 
  value, 
  max = 100, 
  label, 
  showPercentage = true, 
  showValue = true,
  color = 'primary',
  size = 'medium',
  animated = true 
}) => {
  const [displayValue, progressRef] = useCountUp(value, 1500);
  const percentage = Math.min((displayValue / max) * 100, 100);

  return (
    <div className={`progress-indicator progress-indicator--${size}`} ref={progressRef}>
      <div className="progress-header">
        {label && <span className="progress-label">{label}</span>}
        <div className="progress-values">
          {showValue && (
            <span className="progress-value">
              {displayValue.toLocaleString()}{max !== 100 && `/${max.toLocaleString()}`}
            </span>
          )}
          {showPercentage && (
            <span className="progress-percentage">{percentage.toFixed(1)}%</span>
          )}
        </div>
      </div>
      
      <div className="progress-track">
        <div
          className={`progress-fill progress-fill--${color} ${animated ? 'progress-fill--animated' : ''}`}
          style={{ width: `${percentage}%` }}
        >
          <div className="progress-shine"></div>
        </div>
      </div>
    </div>
  );
};

// Componente de Métricas em Tempo Real
export const RealTimeMetrics = ({ metrics }) => {
  const [animatedMetrics, setAnimatedMetrics] = useState(metrics.map(m => ({ ...m, displayValue: 0 })));

  useEffect(() => {
    const timers = metrics.map((metric, index) => {
      return setTimeout(() => {
        setAnimatedMetrics(prev => 
          prev.map((m, i) => 
            i === index ? { ...m, displayValue: metric.value } : m
          )
        );
      }, index * 200);
    });

    return () => timers.forEach(clearTimeout);
  }, [metrics]);

  return (
    <div className="real-time-metrics">
      {animatedMetrics.map((metric, index) => (
        <div key={index} className={`metric-card metric-card--${metric.trend || 'neutral'}`}>
          <div className="metric-icon">
            {metric.icon}
          </div>
          <div className="metric-content">
            <div className="metric-value">
              {metric.prefix}{metric.displayValue.toLocaleString()}{metric.suffix}
            </div>
            <div className="metric-label">{metric.label}</div>
            {metric.change && (
              <div className={`metric-change metric-change--${metric.trend}`}>
                <span className="change-indicator">
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                </span>
                <span className="change-value">{metric.change}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente de Dashboard de Insights
export const InsightsDashboard = ({ insights }) => {
  return (
    <div className="insights-dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Insights de Dados</h2>
        <div className="dashboard-actions">
          <button className="action-button action-button--export">
            Exportar Relatório
          </button>
          <button className="action-button action-button--refresh">
            Atualizar
          </button>
        </div>
      </div>
      
      <div className="insights-grid">
        {insights.map((insight, index) => (
          <div key={index} className={`insight-card insight-card--${insight.type}`}>
            <div className="insight-header">
              <div className="insight-icon">{insight.icon}</div>
              <div className="insight-priority">{insight.priority}</div>
            </div>
            
            <div className="insight-content">
              <h4 className="insight-title">{insight.title}</h4>
              <p className="insight-description">{insight.description}</p>
              
              {insight.data && (
                <div className="insight-data">
                  <div className="data-point">
                    <span className="data-label">Valor Atual:</span>
                    <span className="data-value">{insight.data.current}</span>
                  </div>
                  <div className="data-point">
                    <span className="data-label">Meta:</span>
                    <span className="data-value">{insight.data.target}</span>
                  </div>
                </div>
              )}
            </div>
            
            {insight.actions && (
              <div className="insight-actions">
                {insight.actions.map((action, actionIndex) => (
                  <button key={actionIndex} className="insight-action-button">
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Formatação de Dados Inteligente
export const SmartDataFormatter = ({ value, type, options = {} }) => {
  const formatValue = (val, dataType) => {
    switch (dataType) {
      case 'currency':
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: options.currency || 'BRL',
          minimumFractionDigits: options.decimals || 2
        }).format(val);
        
      case 'percentage':
        return new Intl.NumberFormat('pt-BR', {
          style: 'percent',
          minimumFractionDigits: options.decimals || 1
        }).format(val / 100);
        
      case 'number':
        return new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: options.decimals || 0
        }).format(val);
        
      case 'date':
        return new Intl.DateTimeFormat('pt-BR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          ...options
        }).format(new Date(val));
        
      case 'time':
        return new Intl.DateTimeFormat('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          ...options
        }).format(new Date(val));
        
      default:
        return val;
    }
  };

  return (
    <span className={`smart-data-value smart-data-value--${type}`}>
      {formatValue(value, type)}
    </span>
  );
};

export default {
  InteractiveBarChart,
  InteractivePieChart,
  ElegantDataTable,
  AdvancedProgressIndicator,
  RealTimeMetrics,
  InsightsDashboard,
  SmartDataFormatter
};