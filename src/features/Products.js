import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const data=useSelector((state)=>state.products.users)
  
  return (
    <div>
      {data.map((value)=>{
        return(
          <ul key={value.id}>
            <li>{value.name}</li>
            <li>{value.address}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Products
