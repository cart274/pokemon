import React from 'react';
import styles from './Card.module.css';

const Card = ({name, id, t, onSelect, detail = {}}) => (
    <div className={`${styles.card} ${detail.abilities && styles.cardSelected}`} onClick={()=>{onSelect()}}>
        <div className={styles.description}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} />
            <h2>{name}</h2>
        </div>
        {detail.abilities && detail.abilities.length > 0 && <div className={styles.details}>
            <h3>{`${t('Altura')}:`} <span>{`${detail.height}m`}</span></h3>
            <h3>{`${t('Peso')}:`} <span>{`${detail.weight}kg`}</span></h3>
            { detail.abilities.map(({ability, is_hidden})=> 
                is_hidden? <h3>{`${t('Habilidad normal')}:`} <span>{ability.name}</span></h3> :
                <h3>{`${t('Habilidad oculta')}:`} <span>{ability.name}</span></h3>
            )}
        </div>}
    </div>
)
export default Card