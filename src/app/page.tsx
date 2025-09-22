'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Problema from '@/components/Problema'
import Solucao from '@/components/Solucao'
import ComoFunciona from '@/components/ComoFunciona'
import CTA from '@/components/CTA'
import BonusExclusivos from '@/components/BonusExclusivos'
import ProvaSocial from '@/components/ProvaSocial'
import Garantias from '@/components/Garantias'
import Escassez from '@/components/Escassez'
import Investimento from '@/components/Investimento'
import Footer from '@/components/Footer'
import PopupFormulario from '@/components/PopupFormulario'

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleSubmitSuccess = () => {
    setShowPopup(false)
    // Redirecionar para página de confirmação será implementado com Next.js router
    window.location.href = '/confirmacao'
  }

  return (
    <main className="min-h-screen bg-white">
      <Header onOpenPopup={handleOpenPopup} />
      
      <Hero onOpenPopup={handleOpenPopup} />
      
      <About />
      
      <Problema />
      
      <Solucao />
      
      <ComoFunciona />
      
      <CTA />
      
      <BonusExclusivos />
      
      <ProvaSocial />
      
      <Garantias />
      
      <Escassez onOpenPopup={handleOpenPopup} />
      
      <Investimento onOpenPopup={handleOpenPopup} />
      
      <Footer />
      
      {showPopup && (
        <PopupFormulario 
          isOpen={showPopup}
          onClose={handleClosePopup}
          onSubmitSuccess={handleSubmitSuccess}
        />
      )}
    </main>
  )
}