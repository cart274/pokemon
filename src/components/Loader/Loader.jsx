import React from 'react';
import style from './Loader.module.css'
import loader from "../../assets/images/loading.gif"
import { connect } from 'react-redux';

const Loader = ({loading, t}) => {
    return(
        loading &&
        <div className={style.loader}>
            <img src={loader} alt="Loader"/>
            <h4>{t('Cargando...')}</h4>
        </div>
    )
}
const mapStateToProps = state => ({
    loading: state.pokemons.loading,
});

export default connect(mapStateToProps)(Loader);