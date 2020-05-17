import React from "react";
import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = ({t = ()=>{}}) => {
  //const {t}= useTranslation();
  return (
    <section className={style.footer}>
      <h3>{t('Desarrollado por')} Carlos Rodríguez</h3>
    </section>
  );
}

export default Footer;
