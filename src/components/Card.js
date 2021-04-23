import React from 'react';
const Card=(props)=>{
  return (
    <div class="card" style={{width: "14rem",margin:"4rem"}}>
      <img src={props.pic.medium} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.name.title} {props.name.first} {props.name.last}</h5>
    <p><b>ADDRESS</b><br/>{props.location.city} {props.location.state} {props.location.country}</p>
    <b>email id:</b>{props.email}

      </div>
    </div>
  )
}

export default Card;
