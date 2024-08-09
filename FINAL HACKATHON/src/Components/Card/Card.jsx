import React from 'react'

const Card = ({title , description}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
  )
}

export default Card