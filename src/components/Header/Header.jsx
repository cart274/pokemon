import React from "react";
import styles from "./Header.module.css";
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png"
import esflag from "../../assets/images/icons/esflag.jpg"
import enflag from "../../assets/images/icons/enflag.jpg"

const Header = (props) =>{
  const {i18n}= useTranslation();

  const changeLanguage = (e)=>{
    e.preventDefault();
    if(i18n.language === 'en')
      i18n.changeLanguage('es');
    else
      i18n.changeLanguage('en');
  }

  return (
    <section className={styles.header}>
      <img src={logo} alt="Logo" />
      <button className={styles.btnLang} onClick={(e)=>{changeLanguage(e)}}>
        <img  src={i18n.language === 'en' ? esflag :enflag} alt="language"/>
      </button>
    </section>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
