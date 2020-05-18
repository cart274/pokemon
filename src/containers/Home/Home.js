import React, {useCallback, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import {getPokemons, getPokemonDetail} from './actions'
import ReactPaginate from 'react-paginate';
const RESULT_LIMIT = 5;

const Home = ({data = {}, getPokemons, getPokemonDetail, loading = false, error = '', dataDetail={}}) => {
  const [offSet, setOffset] = useState(0)
  const [pokemonSelected, setPokemonSelected] = useState({})
  const {t}= useTranslation();
  const totalPokemons = data.count;
  const pageCount = Math.ceil(totalPokemons / RESULT_LIMIT);
  let pokemons = getPokemonList(data.results);

  useEffect(() => {
    getPokemons(RESULT_LIMIT, offSet)
  }, [offSet]);

  const showOnPageChange = useCallback((selected) =>{
    let newOffset = (selected) * RESULT_LIMIT;
    setOffset(newOffset);
  })

  useEffect(() => {
    if(pokemonSelected.url)
      getPokemonDetail(pokemonSelected.url)
  }, [pokemonSelected]);

  const onSelectPokemon = useCallback((url = '', id= 0) =>{
    setPokemonSelected({url, id});
  })

  return (
    <>
      <Loader t={t}/>
      <Header/>
      <section className={styles.home}>
        {
          pokemons.map(({name, id, url}) => (
          <Card id={id} name={name} key={id} t={t} onSelect={()=>{onSelectPokemon(url, id);}} 
          detail={id === pokemonSelected.id && dataDetail} selectedClass={id === pokemonSelected.id? 'selected' : ''}
          notSelectedClass={(pokemonSelected.id && pokemonSelected.id !== id)? 'notSelected' : ''}
          onCloseDetail={()=>onSelectPokemon()}/>)
        )}
      </section>
      <ReactPaginate pageCount={pageCount} pageRangeDisplayed={7} marginPagesDisplayed={2} 
        previousLabel={t('Anterior')} nextLabel={t('Siguiente')} onPageChange={({selected = 0}) => showOnPageChange(selected)} 
        containerClassName={styles.paginator} activeClassName={styles.pageSelected}/>
      <Footer t={t} />
    </>
  );
}

const getPokemonList = (results = []) => {
  let pokemons = []
  results.forEach(({name, url}) => {
    pokemons.push({name, url, id: getPokemonId(url)})
  })
  return pokemons;
}

const getPokemonId = (url = '') => {
  let urlSt = url.slice(0, url.length -1)
  let lastSlash = urlSt.lastIndexOf('/')
  return urlSt.substring(lastSlash, urlSt.length)
}

const mapStateToProps = state => ({
  data: state.pokemons.data,
  loading: state.pokemons.loading,
  error: state.pokemons.error,
  dataDetail: state.pokemons.dataDetail,
});

const mapDispatchToProps = {
  getPokemons,
  getPokemonDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);