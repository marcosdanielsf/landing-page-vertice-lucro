'use client'

import React, { useEffect, useState } from 'react'

interface HeroProps {
  onOpenPopup: () => void
}

interface AnimatedStats {
  revenue: number
  clients: number
  success: number
}

const Hero: React.FC<HeroProps> = ({ onOpenPopup }) => {
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({
    revenue: 0,
    clients: 0,
    success: 0
  })

  useEffect(() => {
    const animateCounter = (target: number, key: keyof AnimatedStats, duration: number = 2000): void => {
      const start = 0
      const increment = target / (duration / 16)
      let current = start
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 16)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(450, 'revenue') // $450K+ 
          animateCounter(847, 'clients')
          animateCounter(98, 'success')
          observer.disconnect()
        }
      })
    })

    const statsElement = document.querySelector('.hero-stats')
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in-up">
          <span className="text-yellow-400">🚀</span>
          <span className="text-sm font-medium">Vértice do Lucro - Sistema Comprovado</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-hero mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="block">O Sistema de Lucro</span>
          <span className="block gradient-text font-heading">Vértice</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-white/90 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Transforme sua experiência em um sistema de vendas lucrativas
        </h2>
        
        {/* Headline */}
        <h3 className="text-lg md:text-xl font-semibold mb-6 text-yellow-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Reconhece Essas Frustrações?
        </h3>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Sabemos como é frustrante ter experiência em vendas, mas não ter um sistema que converta esse conhecimento em resultados consistentes e previsíveis.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button 
            className="inline-flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            onClick={onOpenPopup}
          >
            <span>⚡</span>
            <span>Inicie Sua Transformação</span>
          </button>
          <button 
            className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105"
            onClick={onOpenPopup}
          >
            <span>📊</span>
            <span>Saiba Mais Sobre Nosso Método</span>
          </button>
        </div>
        
        {/* Stats */}
        <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              ${animatedStats.revenue}K+
            </div>
            <div className="text-white/80 font-medium">Receita Gerada</div>
            <div className="text-2xl mt-2">💰</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              {animatedStats.clients}+
            </div>
            <div className="text-white/80 font-medium">Clientes Satisfeitos</div>
            <div className="text-2xl mt-2">👥</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              {animatedStats.success}%
            </div>
            <div className="text-white/80 font-medium">Taxa de Sucesso</div>
            <div className="text-2xl mt-2">📈</div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="flex items-center space-x-2">
            <span className="text-lg">🔒</span>
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">⭐</span>
            <span>5 Estrelas</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">🎯</span>
            <span>Resultados Comprovados</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero