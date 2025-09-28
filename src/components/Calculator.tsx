import React, { useMemo, useState } from 'react'

type Levels = 'Elite'|'High'|'Medium'|'Low'
const clamp = (n:number,min=0,max=100)=>Math.max(min,Math.min(max,n))
const level = (s:number):Levels => s>=85?'Elite':s>=70?'High':s>=50?'Medium':'Low'

export default function Calculator(){
  const [deploys,setDeploys]=useState(1)
  const [leadH,setLeadH]=useState(24)
  const [cfr,setCfr]=useState(20)
  const [mttrH,setMttrH]=useState(4)
  const [flow,setFlow]=useState(30)
  const [sat,setSat]=useState(6)
  const [inc,setInc]=useState(1)

  const scores = useMemo(()=>{
    const dep = clamp((deploys/1)*60,0,100)
    const lt  = clamp(100 - (Math.log10(leadH+1)*35),0,100)
    const cfrS= clamp(100 - cfr*3.2,0,100)
    const mttr= clamp(100 - (Math.log10(mttrH+1)*40),0,100)
    const flowS=clamp(flow,0,100)
    const satS =clamp((sat/10)*100,0,100)
    const incMap=[10,45,70,100]
    const incS = incMap[Math.max(0,Math.min(3,inc))]
    const composite = clamp(((dep+lt+cfrS+mttr)/4)*0.7 + ((flowS+satS+incS)/3)*0.3)
    return {dep,lt,cfrS,mttr,flowS,satS,incS,composite}
  },[deploys,leadH,cfr,mttrH,flow,sat,inc])

  const Badge = ({s}:{s:number}) => <span className={`badge ${level(s).toLowerCase()}`}>{level(s)} • {s.toFixed(0)}</span>

  const row = (label:string,help:string,ctrl:React.ReactNode) => (
    <div className="row">
      <label>{label}</label>
      <div className="help">{help}</div>
      {ctrl}
    </div>
  )
  const slider=(v:number,set:(n:number)=>void,min:number,max:number,step:number,postfix?:string)=> (
    <div className="range">
      <input type="range" min={min} max={max} step={step} value={v} onChange={e=>set(Number(e.target.value))}/>
      <div className="small" style={{width:80,textAlign:'right'}}>{postfix?`${v}${postfix}`:v}</div>
    </div>
  )

  return (
    <div className="container" id="calculator" style={{padding:'28px 0'}}>
      <h3 style={{margin:'0 0 10px'}}>Beyond DORA Metrics Calculator</h3>
      <div className="calculator">
        <div className="panel">
          {row('Deployment Frequency (per day)','Elite > 1/day; higher is better.',
            slider(deploys,setDeploys,0,100,0.5))}
          {row('Lead Time (hours)','Time from commit to prod; lower is better.',
            slider(leadH,setLeadH,0,24*30,1,'h'))}
          {row('Change Failure Rate (%)','Deploys causing incidents; lower is better.',
            slider(cfr,setCfr,0,100,1,'%'))}
          {row('MTTR (hours)','Time to restore service; lower is better.',
            slider(mttrH,setMttrH,0,24*14,1,'h'))}
          <hr className="sep"/>
          {row('Flow Efficiency (%)','Active work vs waiting; higher is better.',
            slider(flow,setFlow,0,100,1,'%'))}
          {row('Dev Satisfaction (1–10)','Friction in delivery; higher is better.',
            slider(sat,setSat,1,10,1))}
          {row('Incident Maturity (0–3)','0 Manual → 3 Auto-remediate.',
            slider(inc,setInc,0,3,1))}
        </div>
        <div className="panel">
          <h4 style={{marginTop:0}}>Summary</h4>
          <div style={{display:'grid',gap:'10px'}}>
            <div>Deployment Frequency <Badge s={scores.dep}/></div>
            <div>Lead Time <Badge s={scores.lt}/></div>
            <div>Change Failure Rate <Badge s={scores.cfrS}/></div>
            <div>MTTR <Badge s={scores.mttr}/></div>
            <div>Flow Efficiency <Badge s={scores.flowS}/></div>
            <div>Developer Satisfaction <Badge s={scores.satS}/></div>
            <div>Incident Maturity <Badge s={scores.incS}/></div>
            <hr className="sep"/>
            <div style={{fontWeight:700}}>Composite Readiness <Badge s={scores.composite}/></div>
            <div className="small">Tip: track changes over time; focus on the lowest badges first.</div>
          </div>
        </div>
      </div>
    </div>
  )
}