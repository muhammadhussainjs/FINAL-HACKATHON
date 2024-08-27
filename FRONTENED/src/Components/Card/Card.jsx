import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title , description , date , item  , user}) => {
  
  const navigate = useNavigate()
const gotoSubmit = ()=>{
  navigate('/studentsubmit' , {state:{item , user}})

}
  return (
    <div className="card bg-base-300 w-80 sm:w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">TITLE : {title}</h2>
    <p>DESCRIPTION : {description}</p>
    <p>POSTED DATE : {date}</p>
    
    <div className="card-actions justify-end">
      < button className="btn btn-outline" onClick={gotoSubmit}>Submit Assignment</button>
    </div>
  </div>
</div>
  )
}

export default Card