import React from 'react'
import thumb from '../../images/1.png'
import LinkButton from './Button'

function Info() {
  return (
    <main className="content">
      <img src={thumb} alt="info" />
      <div className="info-box">
        <h1 className="info-box--header text-white">Qurbanov Ruslan</h1>
        <p className="info-box--pos">Frontend Developer</p>
        <small className="info-box--web text-white">ruslan.io</small>
        <div className="button-container">
          <LinkButton type="email" name="Email" />
          <LinkButton type="social" name="Linkedin" />
        </div>
      </div>
    </main>
  )
}

export default Info
