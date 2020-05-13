import React from 'react';

const Card = ({className, name, id}) => (
    <div className={className}>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} />
        <h2>{name}</h2>
    </div>
)
export default Card