import React from 'react'
import Button from '../Button/Button'
import styles from './Paginator.module.css';

const Paginator = ({total, offset, limit, t, event})=> {
    let paginatorList = createPaginatorArray(total, offset, limit);
    console.log(offset, total)
    return(
        <div className={styles.paginator}>
            { offset > 0 && <Button text={t('Anterior')} onClick={()=> event(offset - limit)} /> }
            { (offset / limit) >= limit && <div className={styles.points}>...</div>}
            {paginatorList.map((item) => <Button key={item} text={item} onClick={()=> event((item - 1) * limit)} className={((item - 1) * limit) === offset ? 'selected' : ''}/>)}
            { offset < (total - limit)  && <div className={styles.points}>...</div>}
            { offset < (total - limit) && <Button text={t('Siguiente')}  onClick={()=> event(offset + limit)}/> }
        </div>
    )
}

const createPaginatorArray = (total, offset, limit) => {
    let paginatorList = [];
    let pos = (offset / limit) + 1
    let pageCount= pos - 5;
    let lowerLimit = (pageCount > 0) ? pageCount + 1: 1;
    //lowerLimit = offset >= (total - limit) ? lowerLimit - 5 : lowerLimit;
    for(let i= lowerLimit; i < lowerLimit + 10; i++) {
        paginatorList.push(i);
    }
    return  paginatorList;
}

export default Paginator