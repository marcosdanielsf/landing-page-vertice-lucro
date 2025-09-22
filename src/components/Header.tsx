'use client'

import React, { useState, useEffect } from 'react'

interface HeaderProps {
  onOpenPopup: () => void
}

interface NavItem {
  name: string
  href: string
}

const Header: React.FC<HeaderProps> = ({ onOpenPopup }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: NavItem[] = [
    { name: 'Início', href: '#hero' },
    { name: 'Problema', href: '#problema' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Garantias', href: '#garantias' },
  ]

  const handleNavClick = (href: string): void => {
    setIsMobileMenuOpen(false)
    
    // Smooth scroll para a seção
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'bg-primary-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-xl">📈</span>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Vértice do Lucro
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Transforme Seu Negócio
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenPopup}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-primary'
                  : 'bg-white hover:bg-gray-100 text-primary-600 shadow-lg'
              }`}
            >
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-2 ${
            isScrolled 
              ? 'bg-white border-t border-gray-100' 
              : 'bg-white/95 backdrop-blur-md rounded-lg mt-2 mx-4'
          }`}>
            <nav className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onOpenPopup()
                  }}
                  className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Começar Agora
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header