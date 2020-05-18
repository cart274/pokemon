import React from 'react';
import styles from './Card.module.css';
import notAvailableImage from '../../assets/images/imageNotAvailable.jpg'
import uuid from 'react-uuid'

const Card = ({name, id, t, onSelect, detail = {}, selectedClass, notSelectedClass, onCloseDetail}) => (
    <article className={`${styles.card} ${selectedClass && styles.cardSelected} ${notSelectedClass && styles.cardNotSelected}`}
    onClick={()=>{ !selectedClass && onSelect()}} >
        <div className={styles.description}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} 
             onError={(e)=>{e.target.onerror = null; e.target.src=notAvailableImage}} />
            <h2>{name}</h2>
        </div>
        {detail.abilities && detail.abilities.length > 0 && <div className={styles.details}>
            <h3>{`${t('Altura')}:`} <span>{`${detail.height / 10}m`}</span></h3>
            <h3>{`${t('Peso')}:`} <span>{`${detail.weight / 10}kg`}</span></h3>
            { detail.abilities.map(({ability, is_hidden}, key)=> 
                is_hidden? <h3 key={uuid()}>{`${t('Habilidad normal')}:`} <span>{ability.name}</span></h3> :
                <h3 key={uuid()}>{`${t('Habilidad oculta')}:`} <span>{ability.name}</span></h3>
            )}
            <h4 onClick={()=>{onCloseDetail()}}>{t('Cerrar')}</h4>
        </div>}
    </article>
)
export default Card