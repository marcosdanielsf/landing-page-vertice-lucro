'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

export default function ConfirmacaoPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center px-4">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Ícone de sucesso */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <CheckCircleIcon className="w-24 h-24 text-green-500 animate-bounce-slow" />
              <div className="absolute inset-0 w-24 h-24 bg-green-500 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎉 Parabéns! Sua inscrição foi confirmada!
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Você está a um passo de transformar seu negócio e maximizar seus lucros!
          </p>

          {/* Card de próximos passos */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 mb-8 text-white">
            <h2 className="text-xl font-semibold mb-4">📧 Próximos Passos:</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-white text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p>Verifique sua caixa de entrada (e spam) para o email de boas-vindas</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-white text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p>Adicione nosso email à sua lista de contatos confiáveis</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-white text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p>Aguarde as instruções de acesso ao sistema completo</p>
              </div>
            </div>
          </div>

          {/* Informações importantes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-medium text-yellow-800">Importante!</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  Se você não receber o email em até 10 minutos, verifique sua pasta de spam ou entre em contato conosco.
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas de sucesso */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">24h</div>
              <div className="text-sm text-gray-600">Suporte Rápido</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-600">Garantia</div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
            
            <button 
              onClick={() => window.open('mailto:contato@verticedolucro.com', '_blank')}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              📧 Entrar em Contato
            </button>
          </div>

          {/* Rodapé da confirmação */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Tem dúvidas? Entre em contato conosco pelo email:{' '}
              <a 
                href="mailto:contato@verticedolucro.com" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                contato@verticedolucro.com
              </a>
            </p>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-200 rounded-full opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  )
}