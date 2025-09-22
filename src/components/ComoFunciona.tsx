'use client'

import React from 'react'

interface Sprint {
  number: string
  title: string
  description: string
  items: string[]
  color: string
  bgColor: string
}

interface SupportItem {
  icon: string
  title: string
  description: string
}

const ComoFunciona: React.FC = () => {
  const sprints: Sprint[] = [
    {
      number: '0',
      title: 'DIAGNÓSTICO E ESTRATÉGIA PERSONALIZADA',
      description: 'Antes de começar, fazemos um diagnóstico completo do seu negócio atual e criamos uma estratégia personalizada.',
      items: [
        'Análise completa do seu modelo de negócio atual',
        'Identificação dos gargalos e oportunidades',
        'Definição da estratégia personalizada para seu nicho',
        'Roadmap detalhado das próximas 12 semanas'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500'
    },
    {
      number: '1',
      title: 'POSICIONAMENTO E PROPOSTA DE VALOR IRRESISTÍVEL',
      description: 'Definimos exatamente quem é seu cliente ideal e criamos uma proposta que ele não consegue recusar.',
      items: [
        'Definição precisa do seu Avatar de Cliente Ideal',
        'Criação da sua Proposta de Valor Única',
        'Estruturação da sua oferta irresistível',
        'Definição da precificação estratégica'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      number: '2',
      title: 'FUNIL DE VENDAS E GERAÇÃO DE LEADS',
      description: 'Construímos um funil que atrai, qualifica e converte leads automaticamente.',
      items: [
        'Criação do funil de vendas completo',
        'Desenvolvimento de iscas digitais irresistíveis',
        'Configuração de landing pages de alta conversão',
        'Sistema de qualificação automática de leads'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-500'
    },
    {
      number: '3',
      title: 'PROCESSO DE VENDAS E FECHAMENTO',
      description: 'Implementamos um processo de vendas estruturado que converte mais e vende melhor.',
      items: [
        'Scripts de vendas personalizados para seu nicho',
        'Técnicas de fechamento de alta conversão',
        'Sistema de follow-up automatizado',
        'Tratamento de objeções mais comuns'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-500'
    },
    {
      number: '4',
      title: 'AUTOMAÇÃO E ESCALABILIDADE',
      description: 'Automatizamos processos e criamos sistemas escaláveis para crescimento sustentável.',
      items: [
        'Implementação de automações de marketing',
        'Sistemas de CRM e gestão de clientes',
        'Processos de entrega escaláveis',
        'Métricas e KPIs de acompanhamento'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-500'
    },
    {
      number: '5',
      title: 'OTIMIZAÇÃO E CRESCIMENTO',
      description: 'Otimizamos resultados e criamos estratégias de crescimento a longo prazo.',
      items: [
        'Análise de performance e otimizações',
        'Estratégias de retenção de clientes',
        'Planos de expansão e crescimento',
        'Sistemas de melhoria contínua'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-500'
    }
  ]

  const supportItems: SupportItem[] = [
    {
      icon: '👥',
      title: 'Reuniões Semanais de Acompanhamento',
      description: 'Sessões ao vivo para tirar dúvidas, ajustar estratégias e garantir que você está no caminho certo.'
    },
    {
      icon: '💬',
      title: 'Suporte Direto via WhatsApp',
      description: 'Acesso direto à nossa equipe para dúvidas urgentes e suporte técnico.'
    },
    {
      icon: '📊',
      title: 'Análise de Performance Mensal',
      description: 'Relatórios detalhados com insights e recomendações para otimizar seus resultados.'
    },
    {
      icon: '🎓',
      title: 'Treinamentos Exclusivos',
      description: 'Acesso a workshops e masterclasses exclusivas para aprimorar suas habilidades.'
    }
  ]

  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-6 animate-fade-in-up">
            Como Funciona o Sistema Vértice do Lucro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Um processo estruturado em 6 sprints que vai da estratégia à execução, 
            transformando sua expertise em resultados previsíveis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          {sprints.map((sprint, index) => (
            <div 
              key={index}
              className={`mb-12 bg-white rounded-2xl p-8 shadow-lg border-l-4 border-${sprint.bgColor.split('-')[1]}-500 animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-start">
                <div className={`${sprint.bgColor} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0`}>
                  {sprint.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    SPRINT {sprint.number}: {sprint.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {sprint.description}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    {sprint.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`${sprint.color} mr-3 mt-1`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              Suporte Completo Durante Todo o Processo
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Você não estará sozinho. Nossa equipe estará ao seu lado em cada etapa da jornada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="text-yellow-400 text-2xl mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona