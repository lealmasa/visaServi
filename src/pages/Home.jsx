import React from "react";
import styles, {layout} from "../style";

import {
  Hero,
  Servicios,
  Elegirnos,
  Clientes,
} from "../components";
import { Helmet } from "react-helmet-async";

export const Home = () =>{ return (
  <>
    <Helmet >
    <title>VisaServi | Servicio de visados nacionales e internacionales</title>
    <meta name="description" content="VisaServi te brinda una atención personalizada con toda la información y asesoría necesaria para su trámite migratorio, reserva de paquetes turísticos o traducciones." />
    <meta name="keywords" content="visas, visado, Ecuador, traducciones de Documentos, asesoría de viajes, Estados Unidos, Europa, Canada, Reino Unido, Mexico " />

    </Helmet>

    <section className={`${styles.flexStart}`}>
      <div className={` ${layout.section}`}>
        <Hero />
      </div>
    </section>
    <section className={`${styles.flexStart}`}>
      <div className={` ${layout.section}`}>
        <Servicios />
      </div>
    </section>
    <section className={`${styles.flexStart}`}>
      <div className={` ${layout.section}`}>
        <Elegirnos />
      </div>
    </section>
    <section className={`${styles.flexStart}`}>
      <div className={` ${layout.section}`}>
        <Clientes />
      </div>
    </section>
  </>
)};

export default Home;
