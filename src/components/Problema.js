import React from 'react';

const Problema = () => {
  return (
    <section id="problema" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vertex-dark mb-6">
            Você Reconhece Essas Frustrações?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se você é um mentor, coach ou consultor, provavelmente já passou por pelo menos uma dessas situações:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="problema-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-calendar-times"></i>
            </div>
            <h3 className="text-xl font-bold text-vertex-dark mb-4">
              Agenda Vazia ou Imprevisível
            </h3>
            <p className="text-gray-600">
              Você nunca sabe quando o próximo cliente vai aparecer. Às vezes tem muitos, às vezes nenhum.
            </p>
          </div>

          {/* Card 2 */}
          <div className="problema-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <h3 className="text-xl font-bold text-vertex-dark mb-4">
              Preços Baixos e Desvalorizados
            </h3>
            <p className="text-gray-600">
              Você cobra menos do que vale porque tem medo de perder o cliente ou não consegue justificar o valor.
            </p>
          </div>

          {/* Card 3 */}
          <div className="problema-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-user-times"></i>
            </div>
            <h3 className="text-xl font-bold text-vertex-dark mb-4">
              Clientes Que "Pensam" e Nunca Voltam
            </h3>
            <p className="text-gray-600">
              Você faz uma proposta, eles dizem que vão pensar, e você nunca mais ouve falar deles.
            </p>
          </div>

          {/* Card 4 */}
          <div className="problema-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold text-vertex-dark mb-4">
              Muito Tempo Perdido em Reuniões Que Não Fecham
            </h3>
            <p className="text-gray-600">
              Você gasta horas explicando seu trabalho para pessoas que não estão prontas para comprar.
            </p>
          </div>

          {/* Card 5 */}
          <div className="problema-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-chart-line-down"></i>
            </div>
            <h3 className="text-xl font-bold text-vertex-dark mb-4">
              Faturamento Instável e Estressante
            </h3>
            <p className="text-gray-600">
              Um mês você fatura bem, no outro quase nada. Isso gera ansiedade e insegurança financeira.
            </p>
          </div>

          {/* Card 6 */}
          <div className="problema-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3 className="text-xl font-bold text-vertex-dark mb-4">
              Não Sabe Como Precificar Corretamente
            </h3>
            <p className="text-gray-600">
              Você não tem critérios claros para definir preços e sempre fica na dúvida se está cobrando certo.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-vertex-dark text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Se você se identificou com pelo menos 3 dessas situações...
            </h3>
            <p className="text-xl text-vertex-gold">
              <strong>Você precisa de um SISTEMA, não de mais técnicas.</strong>
            </p>
            <p className="text-lg mt-4 text-gray-300">
              O problema não é sua competência. O problema é que você não tem um processo estruturado 
              que transforme sua expertise em vendas previsíveis e escaláveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problema;