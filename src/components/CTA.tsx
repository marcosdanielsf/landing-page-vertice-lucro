'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface Benefit {
  icon: string
  title: string
  description: string
}

interface Stat {
  number: string
  label: string
}

const CTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Obrigado! Entraremos em contato em breve.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
  }

  const benefits: Benefit[] = [
    {
      icon: '✅',
      title: 'Consultoria Gratuita',
      description: 'Análise completa do seu negócio sem custo'
    },
    {
      icon: '⏰',
      title: 'Resposta em 24h',
      description: 'Retorno garantido em até 24 horas'
    },
    {
      icon: '🛡️',
      title: 'Sem Compromisso',
      description: 'Conversa inicial sem obrigações'
    },
    {
      icon: '🏆',
      title: 'Resultados Garantidos',
      description: 'Metodologia comprovada por 500+ empresas'
    }
  ]

  const urgencyFactors: string[] = [
    'Apenas 10 vagas disponíveis este mês',
    'Bônus exclusivo para os primeiros 5 clientes',
    'Desconto de 30% válido até o final da semana',
    'Consultoria gratuita por tempo limitado'
  ]

  const stats: Stat[] = [
    { number: '500+', label: 'Empresas' },
    { number: '98%', label: 'Satisfação' },
    { number: '300%', label: 'ROI Médio' }
  ]

  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
              <span className="mr-2">🚀</span>
              <span className="font-semibold">Transforme Seu Negócio</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para acelerar
              <span className="text-yellow-400 block">seu crescimento?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Agende uma consultoria gratuita e descubra como nossa metodologia 
              pode transformar seu negócio em uma máquina de vendas.
            </p>
          
            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-yellow-400 text-xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Urgency Section */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-8">
              <h4 className="text-red-400 font-bold mb-4 flex items-center">
                <span className="mr-2">🔥</span>
                Oferta Limitada
              </h4>
              <ul className="space-y-2">
                {urgencyFactors.map((factor, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-red-400 mr-3">✓</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Proof */}
            <div className="flex justify-between items-center bg-gray-800/50 rounded-xl p-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Consultoria Gratuita
                </h3>
                <p className="text-gray-300">
                  Preencha o formulário e nossa equipe entrará em contato
                </p>
              </div>
            
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Empresa/Área de Atuação
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Sua empresa ou área"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Conte-nos sobre seu desafio..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  🚀 Quero Minha Consultoria Gratuita
                </button>

                <p className="text-center text-gray-400 text-sm">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA