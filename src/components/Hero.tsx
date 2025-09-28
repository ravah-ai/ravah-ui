import React from 'react'

export default function Hero(){
  return (
    <div className="container hero">
      <div className="hero-grid">
        <div>
          <h1>Pipeline Copilot for Safe, Fast Releases</h1>
          <p>Predict risky changes before builds, enforce quality gates automatically, and improve DORA & beyond metrics — with explainable AI.</p>
          <div className="cta-row">
            <a className="btn primary" href="#calculator">Try the Calculator</a>
            <a className="btn" href="#features">Explore Features</a>
          </div>
          <p className="small" style={{marginTop:10}}>Works with GitHub, GitLab, Jenkins. Easy install. No heavy setup.</p>
        </div>
        <div className="viz">
          <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5ec2f4"/><stop offset="1" stopColor="#8ae9a9"/>
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <path id="loop" d="M100,150 C100,60 260,60 300,150 C340,240 500,240 500,150 C500,60 340,60 300,150 C260,240 100,240 100,150 Z"
              fill="none" stroke="url(#g)" strokeWidth="8" filter="url(#glow)" opacity="0.6"/>
            <circle r="6" fill="#fff">
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#loop" />
              </animateMotion>
            </circle>
          </svg>
        </div>
      </div>
    </div>
  )
}