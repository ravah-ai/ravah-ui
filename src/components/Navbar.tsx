import React from 'react'

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">
          <img src="/FullLogo_Transparent.png" alt="Ravah.ai logo" />
          <b>Ravah.ai</b>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#calculator">Pipeline Pulse</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}