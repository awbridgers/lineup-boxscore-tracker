import React from 'react';

const NamePlate = (props)=>(
  <div className = 'namePlate' style = {props.name !== '' ? {background:'#CFB53B'} : {background: 'grey'}}>
    <span>{props.name}</span>
    {props.name !== '' && <button id = {props.id} type = 'button' onClick = {props.onClick}>x</button>}
  </div>
)

export default NamePlate
