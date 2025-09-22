import React from 'react';

const Garantias = () => {
  const garantias = [
    {
      periodo: "7 DIAS",
      tipo: "Garantia Incondicional",
      descricao: "Se por qualquer motivo você não ficar satisfeito com o Sistema Vértice do Lucro, devolvemos 100% do seu dinheiro sem fazer nenhuma pergunta.",
      detalhes: [
        "Reembolso total sem questionamentos",
        "Processo simples e rápido",
        "Você fica com todo o material",
        "Sem taxas ou multas",
        "Devolução em até 48h"
      ],
      icone: "fas fa-clock",
      cor: "bg-blue-500"
    },
    {
      periodo: "30 DIAS",
      tipo: "Garantia de Satisfação",
      descricao: "Se você implementar o sistema e não ficar completamente satisfeito com a qualidade do conteúdo e suporte, devolvemos seu investimento.",
      detalhes: [
        "Teste o sistema por 30 dias completos",
        "Acesso a todo o conteúdo",
        "Suporte completo incluído",
        "Reembolso integral garantido",
        "Sem complicações burocráticas"
      ],
      icone: "fas fa-heart",
      cor: "bg-green-500"
    },
    {
      periodo: "90 DIAS",
      tipo: "Garantia de Resultados",
      descricao: "Se você implementar tudo que ensinamos e não aumentar sua receita em pelo menos 3x, devolvemos 100% do seu investimento + R$ 1.000 pelo seu tempo.",
      detalhes: [
        "Garantia de aumento de 3x na receita",
        "Bônus de R$ 1.000 se não funcionar",
        "Acompanhamento completo por 90 dias",
        "Suporte prioritário incluído",
        "Implementação assistida"
      ],
      icone: "fas fa-trophy",
      cor: "bg-vertex-gold"
    }
  ];

  return (
    <section id="garantias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vertex-dark mb-6">
            Garantia Tripla de Satisfação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos tão confiantes no Sistema Vértice do Lucro que oferecemos não uma, 
            mas três garantias diferentes para proteger completamente seu investimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {garantias.map((garantia, index) => (
            <div key={index} className="garantia-card bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-vertex-gold">
              <div className="text-center mb-8">
                <div className={`${garantia.cor} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${garantia.icone} text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-vertex-dark mb-2">
                  {garantia.periodo}
                </div>
                <div className="text-lg font-semibold text-vertex-gold">
                  {garantia.tipo}
                </div>
              </div>

              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                {garantia.descricao}
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-vertex-dark text-center">O que está incluído:</h4>
                <ul className="space-y-3">
                  {garantia.detalhes.map((detalhe, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <i className="fas fa-shield-alt text-vertex-gold mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-600">{detalhe}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Confiança */}
        <div className="bg-vertex-dark text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <div className="text-vertex-gold text-4xl mb-4">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-vertex-gold mb-4">
              Por Que Oferecemos Essas Garantias?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-vertex-gold mb-4">Nossa Confiança é Total</h4>
              <p className="text-gray-300 mb-6">
                Já ajudamos mais de 500 consultores e especialistas a transformarem seus 
                conhecimentos em negócios lucrativos. Sabemos que o sistema funciona quando 
                aplicado corretamente.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-3 mt-1"></i>
                  Mais de 500 casos de sucesso
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-3 mt-1"></i>
                  Taxa de sucesso de 90%
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-3 mt-1"></i>
                  Sistema testado e aprovado
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-vertex-gold mb-4">Seu Sucesso é Nossa Prioridade</h4>
              <p className="text-gray-300 mb-6">
                Não queremos apenas vender um curso. Queremos que você tenha resultados reais 
                e transforme sua vida financeira. Por isso, assumimos todo o risco para você.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-3 mt-1"></i>
                  Suporte completo incluído
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-3 mt-1"></i>
                  Acompanhamento personalizado
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-vertex-gold mr-3 mt-1"></i>
                  Compromisso com seus resultados
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-vertex-gold text-vertex-dark rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Risco Zero Para Você
            </h3>
            <p className="text-lg mb-6">
              Com nossa garantia tripla, você pode testar o Sistema Vértice do Lucro 
              por 90 dias completos sem nenhum risco. Se não funcionar, você recebe 
              seu dinheiro de volta + R$ 1.000 pelo seu tempo.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm">Sem Risco</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">90 Dias</div>
                <div className="text-sm">Para Testar</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">+R$ 1.000</div>
                <div className="text-sm">Se Não Funcionar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garantias;