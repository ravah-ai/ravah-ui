import React from 'react'

const Item = ({title, desc}:{title:string, desc:string}) => (
  <div className="card feature">
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
)

export default function Features(){
  return (
    <div className="container" id="features" style={{padding:'28px 0'}}>
      <h3 style={{margin:'0 0 14px'}}>Features</h3>
      <div className="grid-3">
        <Item title="Pre-merge risk scoring" desc="Flags risky PRs based on churn, paths, and coverage signals — before builds waste time."/>
        <Item title="Policy gates" desc="Block merges on high risk, low coverage, or missing approvals. Explainable decisions."/>
        <Item title="Slack/Teams alerts" desc="Notify owners with actionable context and playbooks to remediate."/>
        <Item title="Jenkins/GitHub integration" desc="One step to call the Gateway. Use as a required check in branch protection."/>
        <Item title="Beyond DORA insights" desc="Track flow efficiency, incident maturity, developer satisfaction over time."/>
        <Item title="Secure & scalable" desc="API-key or JWT auth; containerized microservices; K8s-ready."/>
      </div>
    </div>
  )
}