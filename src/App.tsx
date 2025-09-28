import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Calculator from './components/Calculator'
import Footer from './components/Footer'

export default function App(){
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><Hero/></section>
        <section id="features"><Features/></section>
        <section id="calculator"><Calculator/></section>
      </main>
      <Footer />
    </div>
  )
}