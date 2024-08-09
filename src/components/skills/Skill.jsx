import React from 'react'
import './Skill.css'
import js from './Js.png'
import html from './HTML.png'
import css from './css.png'
import react from './react.png'
import nodejs from './nodejs.png'
import python from './python.png'
import numpy from './numpy.png'
import pandas from './pandas.png'
import pytorch from './pytorch.png'
import django from './django.png'
import vscode from './vscode.png'
import netbeans from './netbeans.png'

export default function Skill() {
  return (
    <div className="main">

      <div className="body1">
          <h1> HTML </h1>
          <img src={html} className></img>
      </div>

      <div className="body1">
        <h1> CSS </h1>
        <img src={css}></img>
      </div>

      <div className="body1">
          <h1> Javascript </h1>
          <img src={js}></img>
      </div>

      <div className="body1">
          <h1> React </h1>
          <img src={react}></img>
      </div>

      <div className="body1">
          <h1> Node.js </h1>
          <img src={nodejs}></img>
      </div>

      <div className="body1">
          <h1> Python </h1>
          <img src={python}></img>
      </div>

      <div className="body1">
          <h1> Numpy </h1>
          <img src={numpy}></img>
      </div>

      <div className="body1">
          <h1> Pandas </h1>
          <img src={pandas}></img>
      </div>

      <div className="body1">
          <h1> Pytorch </h1>
          <img src={pytorch}></img>
      </div>

      <div className="body1">
          <h1> Django </h1>
          <img src={django}></img>
      </div>
      <div className="body1">
          <h1> VS Code </h1>
          <img src={vscode}></img>
      </div>
      <div className="body1">
          <h1> Netbeans </h1>
          <img src={netbeans}></img>
      </div>
      {/* <div className="body1">
          <h1> Pycharm </h1>
          <img src={pycharm}></img>
      </div> */}
    </div>
  )
}
