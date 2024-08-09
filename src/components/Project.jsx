
import './Project.css'
import React from 'react'

export default function Project({title = "none", items=[], language="", technologies=[], link}) {
  return (
    <div className="items1">
    <h2>{title}</h2>
    <div className="section8">
        <h4>Link: <a href={link}>Github link</a></h4>
        <h4>Language: {language} </h4>
        <h4> Technologies: </h4>
        <ul>
        {technologies.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    </div>
    <div className="section8">
        <h4>Description:</h4>
        <ul>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
  </div>
  </div>
  )
}
