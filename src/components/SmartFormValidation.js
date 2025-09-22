import React, { useState, useEffect, useCallback, useRef } from 'react';

// Smart Form Validation Hook
export const useSmartValidation = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const debounceTimeouts = useRef({});

  const validateField = useCallback(async (fieldName, value) => {
    const rule = validationRules[fieldName];
    if (!rule) return null;

    try {
      if (typeof rule === 'function') {
        return await rule(value, values);
      }
      
      if (rule.required && (!value || value.toString().trim() === '')) {
        return rule.requiredMessage || `${fieldName} é obrigatório`;
      }

      if (rule.minLength && value.length < rule.minLength) {
        return rule.minLengthMessage || `${fieldName} deve ter pelo menos ${rule.minLength} caracteres`;
      }

      if (rule.maxLength && value.length > rule.maxLength) {
        return rule.maxLengthMessage || `${fieldName} deve ter no máximo ${rule.maxLength} caracteres`;
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        return rule.patternMessage || `${fieldName} tem formato inválido`;
      }

      if (rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return rule.emailMessage || 'Email inválido';
      }

      if (rule.phone && !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value)) {
        return rule.phoneMessage || 'Telefone inválido. Use o formato (11) 99999-9999';
      }

      if (rule.cpf && !validateCPF(value)) {
        return rule.cpfMessage || 'CPF inválido';
      }

      if (rule.custom && typeof rule.custom === 'function') {
        return await rule.custom(value, values);
      }

      return null;
    } catch (error) {
      return 'Erro na validação';
    }
  }, [validationRules, values]);

  const validateAllFields = useCallback(async () => {
    setIsValidating(true);
    const newErrors = {};
    
    for (const fieldName of Object.keys(validationRules)) {
      const error = await validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    }
    
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
    setIsValidating(false);
    
    return Object.keys(newErrors).length === 0;
  }, [validateField, validationRules, values]);

  const handleChange = useCallback((fieldName, value) => {
    setValues(prev => ({ ...prev, [fieldName]: value }));
    
    // Clear previous debounce timeout
    if (debounceTimeouts.current[fieldName]) {
      clearTimeout(debounceTimeouts.current[fieldName]);
    }
    
    // Debounced validation
    debounceTimeouts.current[fieldName] = setTimeout(async () => {
      if (touched[fieldName]) {
        const error = await validateField(fieldName, value);
        setErrors(prev => ({
          ...prev,
          [fieldName]: error
        }));
      }
    }, 300);
  }, [validateField, touched]);

  const handleBlur = useCallback(async (fieldName) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    const error = await validateField(fieldName, values[fieldName]);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  }, [validateField, values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsValid(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isValidating,
    isValid,
    handleChange,
    handleBlur,
    validateAllFields,
    resetForm,
    setValues
  };
};

// CPF Validation Function
const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, '');
  
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  
  return remainder === parseInt(cpf.charAt(10));
};

// Smart Input Component with Real-time Validation
export const SmartInput = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required = false,
  disabled = false,
  autoComplete,
  mask,
  className = '',
  hint,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const applyMask = (value, maskPattern) => {
    if (!maskPattern) return value;
    
    const masks = {
      phone: (v) => v.replace(/\D/g, '').replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3'),
      cpf: (v) => v.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
      cep: (v) => v.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2'),
      currency: (v) => {
        const num = v.replace(/\D/g, '');
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(num / 100);
      }
    };
    
    return masks[maskPattern] ? masks[maskPattern](value) : value;
  };

  const handleInputChange = (e) => {
    let newValue = e.target.value;
    
    if (mask) {
      newValue = applyMask(newValue, mask);
    }
    
    onChange(name, newValue);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    onBlur(name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const getInputType = () => {
    if (type === 'password' && showPassword) return 'text';
    return type;
  };

  const hasError = touched && error;
  const isSuccess = touched && !error && value;

  return (
    <div className={`smart-input-container ${className}`}>
      <div className="smart-input-wrapper">
        <label htmlFor={name} className="smart-input-label">
          {label}
          {required && <span className="required-indicator">*</span>}
        </label>
        
        {hint && (
          <div className="smart-input-hint">
            {hint}
          </div>
        )}
        
        <div className={`smart-input-field ${isFocused ? 'focused' : ''} ${hasError ? 'error' : ''} ${isSuccess ? 'success' : ''}`}>
          <input
            ref={inputRef}
            id={name}
            name={name}
            type={getInputType()}
            value={value || ''}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            autoComplete={autoComplete}
            className="smart-input"
            aria-describedby={hasError ? `${name}-error` : undefined}
            aria-invalid={hasError ? 'true' : 'false'}
            {...props}
          />
          
          {type === 'password' && (
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          )}
          
          <div className="input-status-indicator">
            {hasError && <span className="error-icon">⚠️</span>}
            {isSuccess && <span className="success-icon">✅</span>}
          </div>
        </div>
        
        {hasError && (
          <div id={`${name}-error`} className="smart-input-error" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

// Form Progress Indicator
export const FormProgress = ({ steps, currentStep, completedSteps = [] }) => {
  const progressPercentage = (completedSteps.length / steps.length) * 100;
  
  return (
    <div className="form-progress">
      <div className="form-progress-bar">
        <div 
          className="form-progress-fill"
          style={{ width: `${progressPercentage}%` }}
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`Progresso do formulário: ${Math.round(progressPercentage)}%`}
        />
      </div>
      
      <div className="form-progress-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`form-progress-step ${
              completedSteps.includes(index) ? 'completed' : ''
            } ${currentStep === index ? 'current' : ''}`}
          >
            <div className="step-indicator">
              {completedSteps.includes(index) ? '✓' : index + 1}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Smart Form Component
export const SmartForm = ({ 
  children, 
  onSubmit, 
  validationRules = {},
  initialValues = {},
  showProgress = false,
  steps = [],
  className = ''
}) => {
  const {
    values,
    errors,
    touched,
    isValidating,
    isValid,
    handleChange,
    handleBlur,
    validateAllFields,
    resetForm
  } = useSmartValidation(initialValues, validationRules);

  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const isFormValid = await validateAllFields();
    
    if (isFormValid) {
      try {
        await onSubmit(values);
        // Form submitted successfully
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <form className={`smart-form ${className}`} onSubmit={handleSubmit} noValidate>
      {showProgress && steps.length > 0 && (
        <FormProgress 
          steps={steps}
          currentStep={currentStep}
          completedSteps={completedSteps}
        />
      )}
      
      <div className="smart-form-content">
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === SmartInput) {
            return React.cloneElement(child, {
              value: values[child.props.name],
              onChange: handleChange,
              onBlur: handleBlur,
              error: errors[child.props.name],
              touched: touched[child.props.name]
            });
          }
          return child;
        })}
      </div>
      
      {showProgress && steps.length > 0 && (
        <div className="form-navigation">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="form-nav-btn form-nav-prev"
            >
              ← Anterior
            </button>
          )}
          
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="form-nav-btn form-nav-next"
            >
              Próximo →
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="form-nav-btn form-nav-submit"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          )}
        </div>
      )}
    </form>
  );
};

// Success Feedback Component
export const SuccessFeedback = ({ 
  isVisible, 
  message = 'Sucesso!', 
  onClose,
  autoClose = true,
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="success-feedback" role="alert" aria-live="polite">
      <div className="success-content">
        <div className="success-icon">🎉</div>
        <div className="success-message">{message}</div>
        {onClose && (
          <button 
            className="success-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default {
  useSmartValidation,
  SmartInput,
  FormProgress,
  SmartForm,
  SuccessFeedback
};