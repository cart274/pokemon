import React from "react";
import style from "./Footer.module.css";

const Footer = ({t = ()=>{}}) => {

  return (
    <section className={style.footer}>
      <h3>{t('Desarrollado por')} Carlos Rodríguez</h3>
    </section>
  );
}

export default Footer;
