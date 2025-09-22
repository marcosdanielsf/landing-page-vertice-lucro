import React, { useState, useEffect } from 'react';

const PopupFormulario = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    whatsapp: '',
    nicho: '',
    faturamento: '',
    desafios: [],
    resultadoFinanceiro: '',
    orcamento: '',
    tempoDisponivel: '',
    expectativa: ''
  });

  // Fechar popup com tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevenir scroll do body quando popup está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'desafios') {
      setFormData(prev => ({
        ...prev,
        desafios: checked 
          ? [...prev.desafios, value]
          : prev.desafios.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    
    // Simular envio do formulário (aqui você pode adicionar integração com API)
    setTimeout(() => {
      // Chamar função de sucesso que redireciona para página de confirmação
      if (onSubmitSuccess) {
        onSubmitSuccess();
      } else {
        alert('Formulário enviado com sucesso! Nossa equipe entrará em contato em breve.');
        onClose();
      }
    }, 500); // Pequeno delay para simular processamento
  };

  if (!isOpen) return null;

  const desafiosOptions = [
    'Falta de um funil de vendas claro',
    'Vendas imprevisíveis, sem constância',
    'Dificuldade em gerar leads qualificados no Instagram/WhatsApp',
    'Problemas com follow-up e fechamento',
    'Ausência de um CRM ou uso desorganizado',
    'Pouco tempo para dedicar às vendas/prospecção',
    'Medo de investir em tráfego pago',
    'Não saber como criar uma oferta irresistível'
  ];

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2 className="popup-title">
            Preparação para a Sua Análise de Oportunidade Vértice do Lucro
          </h2>
          <button 
            onClick={onClose}
            className="popup-close"
            aria-label="Fechar popup"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="popup-content">
          <div className="popup-instructions">
            <p>
              Para que nossa Análise de Oportunidade de 15 minutos seja o mais produtiva possível 
              e foque diretamente nos <strong>SEUS resultados</strong>, pedimos que preencha este breve formulário. 
              Suas respostas nos ajudarão a preparar um diagnóstico preciso e um plano de ação 
              personalizado para sua mentoria.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="popup-form">
            {/* Nome Completo */}
            <div className="form-group">
              <label className="form-label">
                1. Nome Completo <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Seu nome completo"
              />
            </div>

            {/* E-mail */}
            <div className="form-group">
              <label className="form-label">
                2. E-mail <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="seu@email.com"
              />
            </div>

            {/* WhatsApp */}
            <div className="form-group">
              <label className="form-label">
                3. WhatsApp <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Nicho */}
            <div className="form-group">
              <label className="form-label">
                4. Qual o nicho da sua mentoria/consultoria? <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nicho"
                value={formData.nicho}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Ex: marketing digital, finanças, desenvolvimento pessoal, etc."
              />
            </div>

            {/* Faturamento */}
            <div className="form-group">
              <label className="form-label">
                5. Qual seu faturamento médio MENSAL hoje com sua mentoria? <span className="required">*</span>
              </label>
              <div className="radio-group">
                {[
                  { value: 'abaixo-5k', label: 'Abaixo de $ 5.000' },
                  { value: '5k-10k', label: '$ 5.000 - $ 10.000' },
                  { value: '10k-20k', label: '$ 10.000 - $ 20.000' },
                  { value: 'acima-20k', label: 'Acima de $ 20.000' },
                  { value: 'sem-previsibilidade', label: 'Sem faturamento previsível' }
                ].map((option) => (
                  <label key={option.value} className="radio-option">
                    <input
                      type="radio"
                      name="faturamento"
                      value={option.value}
                      checked={formData.faturamento === option.value}
                      onChange={handleChange}
                      required
                    />
                    <span className="radio-checkmark"></span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Desafios */}
            <div className="form-group">
              <label className="form-label">
                6. Qual o seu MAIOR desafio em vendas/previsibilidade hoje? 
                <span className="form-hint">(Marque até 3 opções)</span>
              </label>
              <div className="checkbox-group">
                {desafiosOptions.map((desafio, index) => (
                  <label key={index} className="checkbox-option">
                    <input
                      type="checkbox"
                      name="desafios"
                      value={desafio}
                      checked={formData.desafios.includes(desafio)}
                      onChange={handleChange}
                      disabled={formData.desafios.length >= 3 && !formData.desafios.includes(desafio)}
                    />
                    <span className="checkbox-checkmark"></span>
                    {desafio}
                  </label>
                ))}
                <div className="form-group">
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      name="desafios"
                      value="outro"
                      checked={formData.desafios.includes('outro')}
                      onChange={handleChange}
                      disabled={formData.desafios.length >= 3 && !formData.desafios.includes('outro')}
                    />
                    <span className="checkbox-checkmark"></span>
                    Outro (especifique):
                  </label>
                  {formData.desafios.includes('outro') && (
                    <textarea
                      name="outroDesafio"
                      className="form-textarea"
                      placeholder="Especifique seu desafio..."
                      rows="2"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Resultado Financeiro */}
            <div className="form-group">
              <label className="form-label">
                7. Qual resultado financeiro (faturamento/vendas) você busca para sua mentoria nos PRÓXIMOS 90 DIAS? <span className="required">*</span>
                <span className="form-hint">(Seja o mais específico possível)</span>
              </label>
              <textarea
                name="resultadoFinanceiro"
                value={formData.resultadoFinanceiro}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="3"
                placeholder="Descreva seus objetivos financeiros para os próximos 90 dias..."
              />
            </div>

            {/* Orçamento */}
            <div className="form-group">
              <label className="form-label">
                8. Você tem orçamento para investir em um sistema de vendas que garanta 10-30 novas vendas e 10+ reuniões mensais em 90 dias? <span className="required">*</span>
              </label>
              <div className="radio-group">
                {[
                  { value: 'sim-pronto', label: 'Sim, estou pronto para investir no meu crescimento.' },
                  { value: 'sim-avaliando', label: 'Sim, estou buscando uma solução e avaliando opções.' },
                  { value: 'nao-limitado', label: 'Não, meu orçamento é muito limitado no momento.' }
                ].map((option) => (
                  <label key={option.value} className="radio-option">
                    <input
                      type="radio"
                      name="orcamento"
                      value={option.value}
                      checked={formData.orcamento === option.value}
                      onChange={handleChange}
                      required
                    />
                    <span className="radio-checkmark"></span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Tempo Disponível */}
            <div className="form-group">
              <label className="form-label">
                9. Quanto tempo por semana você pode dedicar à implementação de um novo sistema de vendas? <span className="required">*</span>
              </label>
              <div className="radio-group">
                {[
                  { value: 'menos-5h', label: 'Menos de 5 horas' },
                  { value: '5-10h', label: '5-10 horas' },
                  { value: 'mais-10h', label: 'Mais de 10 horas' }
                ].map((option) => (
                  <label key={option.value} className="radio-option">
                    <input
                      type="radio"
                      name="tempoDisponivel"
                      value={option.value}
                      checked={formData.tempoDisponivel === option.value}
                      onChange={handleChange}
                      required
                    />
                    <span className="radio-checkmark"></span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Expectativa */}
            <div className="form-group">
              <label className="form-label">
                10. O que você espera TIRAR de mais valioso desta Análise de Oportunidade de 15 minutos? <span className="required">*</span>
              </label>
              <textarea
                name="expectativa"
                value={formData.expectativa}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="3"
                placeholder="Descreva suas expectativas para a análise de oportunidade..."
              />
            </div>

            {/* Botões */}
            <div className="popup-actions">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Enviar Formulário
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupFormulario;