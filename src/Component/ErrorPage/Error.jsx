import React from 'react'
import './Error.css'
import {useNavigate} from 'react-router-dom'
function Error() {
  const navigate = useNavigate();
const goback = () =>{
navigate('/');
} ;
  
  return (
    <>
      <div id='error'>
        <div id='Error'>4<span>0</span>4</div>
        <div id='err'>ERROR
        <p id='paragraph'>Page <span>Not</span> found </p>
        <button id='btn1' onClick={()=>goback()}>Go Back</button> 
        </div>
      </div>
     
     
    </>
  )
}

export default Error