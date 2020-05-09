import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {setProducts} from './actions'

const Home = (props) => {

  return (
    <>
      <Header/>
    </>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setProducts: (items)=>dispatch(setProducts(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);