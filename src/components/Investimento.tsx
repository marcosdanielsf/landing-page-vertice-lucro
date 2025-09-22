import React from 'react';

interface ComparacaoItem {
  servico: string;
  valor: string;
  duracao: string;
  total: string;
  limitacoes: string;
}

interface InvestimentoProps {
  onOpenPopup: () => void;
}

const Investimento: React.FC<InvestimentoProps> = ({ onOpenPopup }) => {
  const comparacoes: ComparacaoItem[] = [
    {
      servico: "Consultoria Empresarial Individual",
      valor: "$3,000/mês",
      duracao: "6 meses mínimo",
      total: "$18,000",
      limitacoes: "Apenas para seu negócio, sem sistema replicável"
    },
    {
      servico: "Agência de Marketing Digital",
      valor: "$1,600/mês",
      duracao: "Contrato de 12 meses",
      total: "$19,200",
      limitacoes: "Dependência total da agência, sem autonomia"
    },
    {
      servico: "Curso Premium de Vendas",
      valor: "$2,400",
      duracao: "Pagamento único",
      total: "$2,400",
      limitacoes: "Apenas teoria, sem implementação prática"
    },
    {
      servico: "Mentoria Individual",
      valor: "$1,000/mês",
      duracao: "6 meses",
      total: "$6,000",
      limitacoes: "Limitado ao tempo do mentor, sem sistema"
    }
  ];

  return (
    <section id="investimento" className="py-20 bg-gradient-to-br from-vertex-50 via-vertex-100 to-vertex-200 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vertex-gold/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-vertex-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vertex-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/30">
            <h2 className="text-5xl md:text-6xl font-bold text-vertex-900 mb-6 bg-gradient-to-r from-vertex-900 to-vertex-600 bg-clip-text text-transparent">
              Quanto Vale Transformar Seu Conhecimento em Lucro?
            </h2>
            <p className="text-xl text-vertex-700 max-w-4xl mx-auto leading-relaxed">
              Veja quanto você gastaria para obter resultados similares com outras soluções 
              do mercado e compare com o investimento no Sistema Vertex Profit.
            </p>
          </div>
        </div>

        {/* Comparação de Valores */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-vertex-900 mb-12 text-center">
            Comparação com Outras Soluções do Mercado
          </h3>
            <p className="text-lg text-vertex-700 max-w-2xl mx-auto">
                Veja quanto você investiria em soluções separadas para alcançar resultados similares
              </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comparacoes.map((item, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:border-red-400/50 hover:scale-105 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100/60 to-red-200/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-dollar-sign text-red-600 text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-vertex-900 mb-6 text-xl group-hover:text-vertex-700 transition-colors">
                    {item.servico}
                  </h4>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {item.valor}
                    </div>
                    <div className="text-lg text-vertex-700 font-medium">
                      {item.duracao}
                    </div>
                  </div>
                  <div className="bg-red-50/60 backdrop-blur-sm border border-red-200/60 rounded-xl p-4 mb-6">
                    <div className="text-sm text-red-700 font-semibold mb-1">Investimento Total:</div>
                    <div className="text-xl font-bold text-red-800">{item.total}</div>
                  </div>
                  <div className="text-sm text-vertex-600 leading-relaxed">
                    {item.limitacoes}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total das Alternativas */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-3xl p-10 mt-12 text-center shadow-lg">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">Total das Alternativas:</h4>
              <div className="text-5xl md:text-6xl font-bold text-red-600 mb-6">$45,600+</div>
              <p className="text-xl text-red-700 font-semibold">E ainda assim, sem garantia de resultados!</p>
              <p className="text-red-600 mt-4">Além de meses de complexidade de implementação e integração</p>
            </div>
          </div>
        </div>

        {/* Valor do Sistema Vértice */}
        <div className="bg-gradient-to-br from-vertex-800/95 to-vertex-900/95 backdrop-blur-xl text-vertex-50 rounded-3xl p-10 md:p-16 max-w-6xl mx-auto shadow-2xl border border-vertex-700/50 relative overflow-hidden">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-vertex-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="w-28 h-28 bg-gradient-to-br from-vertex-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
                <i className="fas fa-crown text-vertex-900 text-4xl"></i>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-vertex-gold mb-6 bg-gradient-to-r from-vertex-gold to-yellow-400 bg-clip-text text-transparent">
                Sistema Vertex Profit Completo
              </h3>
              <p className="text-xl text-vertex-200 max-w-3xl mx-auto leading-relaxed">
                Tudo que você precisa para transformar seu conhecimento em um negócio lucrativo e escalável
              </p>
            </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-vertex-700/30 rounded-2xl p-8 border border-vertex-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-vertex-gold rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-vertex-900 text-lg"></i>
                </div>
                <h4 className="text-2xl font-bold text-vertex-gold">O que está incluído:</h4>
              </div>
              <ul className="space-y-4 text-vertex-200">
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Sistema completo em 6 sprints</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Acompanhamento de 12 semanas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Suporte direto via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Reuniões semanais de mentoria</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Implementação assistida</span>
                </li>
              </ul>
            </div>
            <div className="bg-vertex-700/30 rounded-2xl p-8 border border-vertex-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-vertex-gold rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-gift text-vertex-900 text-lg"></i>
                </div>
                <h4 className="text-2xl font-bold text-vertex-gold">Mais 8 bônus exclusivos:</h4>
              </div>
              <ul className="space-y-4 text-vertex-200">
                <li className="flex items-start">
                  <i className="fas fa-gift text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Acelerador: 10 reuniões em 10 dias</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-gift text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">30 scripts para WhatsApp e Instagram</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-gift text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Funil de vendas pronto</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-gift text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Masterclass de vendas high-ticket</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-gift text-vertex-gold mr-4 mt-1 text-lg"></i>
                  <span className="text-lg">Mais 4 bônus exclusivos adicionais</span>
                </li>
              </ul>
            </div>
          </div>
          </div>

          {/* Preços */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-vertex-50 to-vertex-100 rounded-3xl p-10 mb-12 shadow-2xl border border-vertex-200">
              <div className="mb-8">
                <div className="w-16 h-16 bg-vertex-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-calculator text-vertex-50 text-2xl"></i>
                </div>
                <p className="text-vertex-600 text-xl mb-4 font-medium">Valor total de todas as alternativas:</p>
                <div className="text-5xl md:text-6xl font-bold text-vertex-900 mb-6 relative">
                  <span className="line-through text-red-500 opacity-70">$45,600+</span>
                </div>
                <div className="bg-gradient-to-r from-vertex-gold to-yellow-500 text-vertex-900 px-8 py-4 rounded-full inline-flex items-center shadow-lg transform hover:scale-105 transition-transform">
                  <i className="fas fa-star mr-3 text-xl"></i>
                  <span className="font-bold text-lg">Valor do Sistema Completo</span>
                </div>
              </div>
              
              <div className="border-t-2 border-vertex-300 pt-8">
                <div className="bg-gradient-to-br from-vertex-800 to-vertex-900 rounded-2xl p-8 text-vertex-50 mb-6">
                  <p className="text-vertex-200 text-xl mb-4 font-medium">Seu investimento hoje:</p>
                  <div className="text-6xl md:text-7xl font-bold text-vertex-gold mb-6 animate-pulse">
                    $2,599
                  </div>
                  <div className="bg-vertex-700/50 rounded-xl p-4 mb-6">
                    <p className="text-vertex-200 text-lg">
                      Ou 12x de <span className="text-vertex-gold font-bold text-xl">$249.94</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-2xl p-6 mb-6 shadow-lg">
                  <div className="flex items-center justify-center mb-2">
                    <i className="fas fa-piggy-bank text-2xl mr-3"></i>
                    <span className="font-bold text-xl">Economia Incrível!</span>
                  </div>
                  <p className="text-lg font-semibold">
                    💰 Você economiza $43,001
                  </p>
                  <p className="text-lg">
                    (94% de desconto)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-vertex-gold mb-1">83%</div>
                <div className="text-sm text-vertex-200">Desconto</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-vertex-gold mb-1">12x</div>
                <div className="text-sm text-vertex-200">Sem Juros</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-vertex-gold mb-1">90 Dias</div>
                <div className="text-sm text-vertex-200">Garantia Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="bg-vertex-100 rounded-2xl p-8 max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-vertex-900 mb-4">
              Calcule Seu Retorno do Investimento
            </h3>
            <p className="text-vertex-700">
              Veja como o Sistema Vertex se paga em apenas alguns meses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-vertex-gold text-vertex-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h4 className="font-bold text-vertex-900 mb-2">Mês 1-2</h4>
              <p className="text-vertex-700 text-sm">
                Implementação do sistema e primeiras vendas. 
                Recuperação de 50% do investimento.
              </p>
              <div className="text-lg font-bold text-green-600 mt-2">
                +$1,300
              </div>
            </div>

            <div className="text-center">
              <div className="bg-vertex-gold text-vertex-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h4 className="font-bold text-vertex-900 mb-2">Mês 3-4</h4>
              <p className="text-vertex-700 text-sm">
                Otimização e escalonamento do sistema. 
                Recuperação completa do investimento.
              </p>
              <div className="text-lg font-bold text-green-600 mt-2">
                +$3,000
              </div>
            </div>

            <div className="text-center">
              <div className="bg-vertex-gold text-vertex-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h4 className="font-bold text-vertex-900 mb-2">Mês 5+</h4>
              <p className="text-vertex-700 text-sm">
                Lucro puro e expansão do negócio. 
                ROI de 300%+ por mês.
              </p>
              <div className="text-lg font-bold text-green-600 mt-2">
                +$6,000/mês
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-green-600 text-white rounded-lg p-4 inline-block">
              <div className="text-sm">ROI em 6 meses:</div>
              <div className="text-2xl font-bold">+1,200%</div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-green-700 text-lg mb-6">
              Teste o Sistema Vertex por 30 dias. Se não estiver 100% satisfeito, 
              devolvemos todo seu dinheiro, sem perguntas.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-700 font-medium">
                "Temos tanta confiança no Sistema Vertex que oferecemos esta garantia. 
                Você não tem nada a perder e tudo a ganhar."
              </p>
              <div className="text-green-600 font-bold mt-2">
                - Equipe Vertex
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-vertex-gold to-yellow-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
            <button 
              className="relative bg-gradient-to-r from-vertex-gold to-yellow-500 text-vertex-900 px-16 py-8 rounded-3xl text-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto border-4 border-yellow-300"
              onClick={onOpenPopup}
            >
              <div className="flex items-center justify-center">
                <i className="fas fa-rocket mr-4 text-2xl animate-bounce"></i>
                <span>QUERO O SISTEMA VERTEX AGORA</span>
                <i className="fas fa-arrow-right ml-4 text-2xl"></i>
              </div>
            </button>
          </div>
          
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-center text-vertex-600">
              <i className="fas fa-shield-alt text-green-600 mr-2"></i>
              <span className="text-lg">Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
            <div className="flex items-center justify-center text-vertex-600">
              <i className="fas fa-clock text-yellow-600 mr-2"></i>
              <span className="text-lg font-semibold">⚡ Oferta limitada • Últimas vagas disponíveis</span>
            </div>
            <div className="flex items-center justify-center text-vertex-600">
              <i className="fas fa-users text-blue-600 mr-2"></i>
              <span className="text-lg">Junte-se a mais de 500 empreendedores de sucesso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investimento;