'use client'

import React from 'react'

interface ProblemaCard {
  icon: string
  title: string
  description: string
}

const Problema: React.FC = () => {
  const problemas: ProblemaCard[] = [
    {
      icon: '📅',
      title: 'Agenda Vazia ou Imprevisível',
      description: 'Você nunca sabe quando o próximo cliente vai aparecer. Às vezes tem muitos, às vezes nenhum.'
    },
    {
      icon: '💸',
      title: 'Preços Baixos e Desvalorizados',
      description: 'Você cobra menos do que vale porque tem medo de perder o cliente ou não consegue justificar o valor.'
    },
    {
      icon: '🤔',
      title: 'Clientes Que "Pensam" e Nunca Voltam',
      description: 'Você faz uma proposta, eles dizem que vão pensar, e você nunca mais ouve falar deles.'
    },
    {
      icon: '⏰',
      title: 'Muito Tempo Perdido em Reuniões Que Não Fecham',
      description: 'Você gasta horas explicando seu trabalho para pessoas que não estão prontas para comprar.'
    },
    {
      icon: '📉',
      title: 'Faturamento Instável e Estressante',
      description: 'Um mês você fatura bem, no outro quase nada. Isso gera ansiedade e insegurança financeira.'
    },
    {
      icon: '❓',
      title: 'Não Sabe Como Precificar Corretamente',
      description: 'Você não tem critérios claros para definir preços e sempre fica na dúvida se está cobrando certo.'
    }
  ]

  return (
    <section id="problema" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-6 animate-fade-in-up">
            Você Reconhece Essas Frustrações?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Se você é um mentor, coach ou consultor, provavelmente já passou por pelo menos uma dessas situações:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {problemas.map((problema, index) => (
            <div 
              key={index}
              className="card bg-white p-8 border-l-4 border-red-500 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="text-red-500 text-4xl mb-4">
                {problema.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {problema.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problema.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Se você se identificou com pelo menos 3 dessas situações...
            </h3>
            <p className="text-xl text-yellow-400 font-bold mb-4">
              Você precisa de um SISTEMA, não de mais técnicas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              O problema não é sua competência. O problema é que você não tem um processo estruturado 
              que transforme sua expertise em vendas previsíveis e escaláveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problema