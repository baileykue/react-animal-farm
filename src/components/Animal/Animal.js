import React from 'react'
import './Animal.css'

export default function Animal(props) {
  return (
    <>
      <div className="animal" style={{ left: props.left, top: props.top }}>
        <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
        <span className="name">{props.name}</span>
        <p>{props.says}</p>
      </div>
    </>
  )
}
