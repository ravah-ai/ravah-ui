import React from 'react'

export default function Footer(){
  return (
    <footer id="contact">
      <div className="container" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}>
        <div>© {new Date().getFullYear()} Ravah.ai. All rights reserved.</div>
        <div className="small">Contact: hello@ravah.ai</div>
      </div>
    </footer>
  )
}