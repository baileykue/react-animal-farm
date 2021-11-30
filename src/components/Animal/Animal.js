import React from 'react'
import './Animal.css'

export default function Animal({ left, top, name, says, type }) {
  return (
    <>
      <div className="animal" style={{ left: left, top: top }}>
        <img src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
        <span className="name">{name}</span>
        <p>{says}</p>
      </div>
    </>
  )
}
