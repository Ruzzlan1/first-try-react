/* eslint-disable react/prop-types */
import React from 'react'
import { MdMarkEmailUnread } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

function Button(props) {
  let isEmail = false
  if (props.type === 'email') {
    isEmail = true
  }
  return (
    <button className={`${props.type}-button button`} type="button">
      {isEmail ? <MdMarkEmailUnread /> : <FaLinkedin />}
      {props.name}
    </button>
  )
}

export default Button
