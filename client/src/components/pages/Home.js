import React, { useEffect, useState } from 'react'
import { useClothes } from '../../hooks'

export default (props) => {
    const { clothes, getClothing } = useClothes()
    useEffect(() => {
        getClothing()
    }, [])
    return (
      <div className="Dash">
        {clothes.map(item => {
            return (
                <div>hey{console.log(clothes)}</div>
            )
        })}
        <h2>dashboard</h2>
        <button>logout</button>
      </div>
    )
  }
