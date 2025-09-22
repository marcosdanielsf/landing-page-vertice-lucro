import React from 'react';

const Solucao = () => {
  return (
    <section id="solucao" className="py-20 bg-vertex-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Solução: O Sistema Vértice do Lucro
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um sistema completo que transforma sua expertise em uma máquina de vendas previsível, 
            escalável e altamente lucrativa.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-vertex-gold mb-6">
              Imagine...
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Como seria sua vida profissional se você tivesse:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Imagine Item 1 */}
            <div className="imagine-item bg-gray-800 rounded-xl p-6 border border-vertex-gold/20 hover:border-vertex-gold/50 transition-colors duration-300">
              <div className="text-vertex-gold text-3xl mb-4">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h4 className="text-lg font-bold mb-3">
                Agenda Sempre Cheia
              </h4>
              <p className="text-gray-300">
                Com leads qualificados chegando automaticamente, sem você precisar "caçar" clientes.
              </p>
            </div>

            {/* Imagine Item 2 */}
            <div className="imagine-item bg-gray-800 rounded-xl p-6 border border-vertex-gold/20 hover:border-vertex-gold/50 transition-colors duration-300">
              <div className="text-vertex-gold text-3xl mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4 className="text-lg font-bold mb-3">
                Preços Premium Aceitos Naturalmente
              </h4>
              <p className="text-gray-300">
                Clientes que entendem e valorizam seu trabalho, pagando o que você realmente vale.
              </p>
            </div>

            {/* Imagine Item 3 */}
            <div className="imagine-item bg-gray-800 rounded-xl p-6 border border-vertex-gold/20 hover:border-vertex-gold/50 transition-colors duration-300">
              <div className="text-vertex-gold text-3xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="text-lg font-bold mb-3">
                Fechamentos Rápidos e Naturais
              </h4>
              <p className="text-gray-300">
                Clientes que chegam até você já pré-vendidos e prontos para fechar.
              </p>
            </div>

            {/* Imagine Item 4 */}
            <div className="imagine-item bg-gray-800 rounded-xl p-6 border border-vertex-gold/20 hover:border-vertex-gold/50 transition-colors duration-300">
              <div className="text-vertex-gold text-3xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4 className="text-lg font-bold mb-3">
                Faturamento Previsível e Crescente
              </h4>
              <p className="text-gray-300">
                Sabendo exatamente quanto vai faturar no próximo mês, trimestre e ano.
              </p>
            </div>

            {/* Imagine Item 5 */}
            <div className="imagine-item bg-gray-800 rounded-xl p-6 border border-vertex-gold/20 hover:border-vertex-gold/50 transition-colors duration-300">
              <div className="text-vertex-gold text-3xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h4 className="text-lg font-bold mb-3">
                Mais Tempo Para o Que Importa
              </h4>
              <p className="text-gray-300">
                Focando no que você faz de melhor: entregar resultados excepcionais para seus clientes.
              </p>
            </div>

            {/* Imagine Item 6 */}
            <div className="imagine-item bg-gray-800 rounded-xl p-6 border border-vertex-gold/20 hover:border-vertex-gold/50 transition-colors duration-300">
              <div className="text-vertex-gold text-3xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="text-lg font-bold mb-3">
                Segurança Financeira Total
              </h4>
              <p className="text-gray-300">
                Dormindo tranquilo sabendo que seu negócio funciona mesmo quando você não está trabalhando.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-vertex-gold/10 to-vertex-gold/5 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-vertex-gold mb-6">
              Isso Não É Um Sonho. É O Que Acontece Quando Você Tem Um Sistema.
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              O <strong>Sistema Vértice do Lucro</strong> é exatamente isso: um processo estruturado, 
              testado e comprovado que transforma mentores, coaches e consultores em verdadeiras 
              máquinas de vendas previsíveis.
            </p>
            <div className="bg-vertex-dark/50 rounded-xl p-6 border border-vertex-gold/30">
              <p className="text-xl font-semibold text-vertex-gold">
                "Não é sobre vender mais. É sobre vender melhor, para as pessoas certas, 
                no momento certo, pelo preço certo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucao;