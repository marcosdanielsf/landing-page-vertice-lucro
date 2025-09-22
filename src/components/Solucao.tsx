'use client'

import React from 'react'

interface ImagineItem {
  icon: string
  title: string
  description: string
}

const Solucao: React.FC = () => {
  const imagineItems: ImagineItem[] = [
    {
      icon: '✅',
      title: 'Agenda Sempre Cheia',
      description: 'Com leads qualificados chegando automaticamente, sem você precisar "caçar" clientes.'
    },
    {
      icon: '💰',
      title: 'Preços Premium Aceitos Naturalmente',
      description: 'Clientes que entendem e valorizam seu trabalho, pagando o que você realmente vale.'
    },
    {
      icon: '🤝',
      title: 'Fechamentos Rápidos e Naturais',
      description: 'Clientes que chegam até você já pré-vendidos e prontos para fechar.'
    },
    {
      icon: '📈',
      title: 'Faturamento Previsível e Crescente',
      description: 'Sabendo exatamente quanto vai faturar no próximo mês, trimestre e ano.'
    },
    {
      icon: '⏰',
      title: 'Mais Tempo Para o Que Importa',
      description: 'Focando no que você faz de melhor: entregar resultados excepcionais para seus clientes.'
    },
    {
      icon: '🛡️',
      title: 'Segurança Financeira Total',
      description: 'Dormindo tranquilo sabendo que seu negócio funciona mesmo quando você não está trabalhando.'
    }
  ]

  return (
    <section id="solucao" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6 animate-fade-in-up">
            A Solução: O Sistema Vértice do Lucro
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Um sistema completo que transforma sua expertise em uma máquina de vendas previsível, 
            escalável e altamente lucrativa.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Imagine...
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Como seria sua vida profissional se você tivesse:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {imagineItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-yellow-400 text-3xl mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Isso Não É Um Sonho. É O Que Acontece Quando Você Tem Um Sistema.
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              O <strong className="text-yellow-400">Sistema Vértice do Lucro</strong> é exatamente isso: um processo estruturado, 
              testado e comprovado que transforma mentores, coaches e consultores em verdadeiras 
              máquinas de vendas previsíveis.
            </p>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/30">
              <p className="text-xl font-semibold text-yellow-400 italic">
                "Não é sobre vender mais. É sobre vender melhor, para as pessoas certas, 
                no momento certo, pelo preço certo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solucao