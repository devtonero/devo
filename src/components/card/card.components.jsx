import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container'>
         <img alt="computers" 
        src ={`https://robohash.org/${props.IconComputers.id}?set=set2&size=180x180`}
        /> 
       
        <h2> {props.IconComputers.name} </h2>
        <p>{props.IconComputers.email}</p>
    </div>
)