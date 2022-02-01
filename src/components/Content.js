import React from 'react'

function Content(props) {
  return (
    <div className="container">
      <div className="content-box text-white">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Content
