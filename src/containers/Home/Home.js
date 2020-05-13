import React, {useCallback, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import {getPokemons} from './actions'
import Paginator from '../../components/Paginator/Paginator';
const RESULT_LIMIT = 5;

const Home = ({data = {}, getPokemons, loading = false, error = ''}) => {
  const [offSet, setOffset] = useState(0)
  const {t}= useTranslation();
  const totalPokemons = data.count;
  let pokemons = getPokemonList(data.results);
  console.log(pokemons)
  let next = useCallback((newOffSet) => setOffset(newOffSet), [setOffset])

  useEffect(() => {
    getPokemons(RESULT_LIMIT, offSet)
  }, [offSet]);

  return (
    <>
      <Loader t={t}/>
      <Header/>
      <section className={styles.home}>
        {
          pokemons.map(({name, id}) => (
          <Card className={styles.card} id={id} name={name} key={id} t={t}/>)
        )}
      </section>
      <Paginator total={50} offset={offSet} limit={RESULT_LIMIT} event={(num) => next(num)} t={t} />
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
});

const mapDispatchToProps = {
  getPokemons
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);