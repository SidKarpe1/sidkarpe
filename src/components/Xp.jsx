import React from 'react'
import './Xp.css'

export default function Xp({title = "none", items=[], position = "none"}) {
  return (
    <div className="item">
      <h2>{title}</h2>
      <h3>{position}</h3>
      <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
  )
}
