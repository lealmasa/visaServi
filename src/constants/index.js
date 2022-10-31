import {
  iconMail,
  iconPhone,
  iconLocation,
  iconFb,
  iconWs,
  iconIg,
  iconLocationRed,
  iconPlaya,
  iconPasaport,
  iconTranslate,
  imgCliente,
  imgHnosotros,
  iconPlane,
  imgLocationAlemania,
  imgLocationArgentina,
  imgLocationBrasil,
  imgLocationColombia,
  imgLocationCurazao,
  imgLocationEspaña,
  imgLocationEstadosUnidos,
  imgLocationFrancia,
  imgLocationGalapagos,
  imgLocationMexico,
  imgLocationPanama,
  imgLocationPeru,
  imgLocationReinoUnido,
  imgLocationSuiza,
  imgLocationRepublicaDominicana,
} from "../assets";
import { NosotrosDesc } from "../components";

export const navLinks = [
  {
    id: "inicio",
    title: "Inicio",
    link: "/Visaservi",
  },
  {
    id: "nosotros",
    title: "Nosotros",
    link: "/Nosotros",
  },
  {
    id: "servicios",
    title: "Servicios",
    link: "/Servicios",
  },
];

export const contact = [
  {
    id: "social-media-1",
    icon: iconIg,
    bg: "bgIg",
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-2",
    icon: iconWs,
    bg: "bgWs",
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-3",
    icon: iconFb,
    bg: "bgFb",
    link: "https://www.twitter.com/",
  },
];

export const search = [
  {
    id: "location",
    title: "Estados Unidos",
    link: "#",
  },
  {
    id: "location",
    title: "Canada",
    link: "#",
  },
  {
    id: "location",
    title: "Europa",
    link: "#",
  },
  {
    id: "location",
    title: "Chile",
    link: "#",
  },
];

export const services = [
  {
    id: "Asesoria-profesional-para-Tramitacion-de-Visas",
    title: "Asesoría profesional para Tramitación de Visas.",
    subtitle:
      "Nos encargamos de preparar toda la documentación requerida por los diferentes consulados, pago y programación de citas, llenado de formularios y capacitación para la entrevista consular.",
    icon: iconPasaport,
    bg: "bg-yellow",
    link: "#",
  },
  {
    id: "Regularizacion-Migratoria-en-Ecuador",
    title: "Regularización Migratoria en Ecuador.",
    subtitle:
      "Brindamos asesoría para la Tramitación de visas para Ciudadanos extranjeros que deseen Visitar o Residenciarse en Ecuador.",
    icon: iconLocation,
    bg: "bg-red",
    link: "#",
  },
  {
    id: "Paquetes-Turisticos-y-Seguros-de-Viaje",
    title: "Paquetes Turísticos y Seguros de Viaje.",
    subtitle:
      "Visaservi te ofrece los mejores destinos turísticos en Ecuador y El mundo.",
    icon: iconPlaya,
    bg: "bg-green",
    link: "#",
  },
  {
    id: "Traduducciones-de-Documentos",
    title: "Traduducciones de Documentos.",
    subtitle:
      "Contamos con traductores certificados que te brindarán un servicio de primera calidad para la traducción de tus documentos en distintos idiomas.",
    icon: iconTranslate,
    bg: "bg-primary",
    link: "#",
  },
];

export const elegirnos = [
  {
    id: "reason-1",
    title: "Compromiso",
    subtitle: "Nos encargamos de preparar toda la documentación.",
    icon: iconPasaport,
    bg: "bg-yellow",
  },
  {
    id: "reason-2",
    title: "Seguridad",
    subtitle: "Nos encargamos de preparar toda la documentación23.",
    icon: iconLocationRed,
    bg: "bg-red",
  },
  {
    id: "reason-3",
    title: "Eficacia",
    subtitle: "Nos encargamos de preparar toda la documentación423423.",
    icon: iconLocation,
    bg: "bg-green",
  },
  {
    id: "reason-4",
    title: "Experiencia",
    subtitle: "Nos encargamos de preparar toda la documentación234234.",
    icon: iconTranslate,
    bg: "bg-primary",
  },
];

export const info = [
  {
    id: "info-1",
    infoText: "Loremimsum@gmail.com",
    icon: iconMail,
  },
  {
    id: "info-2",
    infoText: "099 2975 240",
    icon: iconPhone,
  },
  {
    id: "info-3",
    infoText: "Urdenor 1 mz 125 solar 11-12 Edificio Ferretal - Guayaquil",
    icon: iconLocationRed,
  },
];

export const clientes = [
  {
    id: "cliente-1",
    img: imgCliente,
    quote:
      " Prueba Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis nibh euismod amet tristique. Urna leo nisi posuere praesent. ",
  },
  {
    id: "cliente-2",
    img: imgCliente,
    quote: "  adipiscing elit. In turpis nibh ulum leo nisi posuere praesent.",
  },
  {
    id: "cliente-3",
    img: imgCliente,
    quote:
      "  adipiscing elit.istique. Urna ultrices vestibulum  posuere praesent.",
  },
  {
    id: "cliente-4",
    img: imgCliente,
    quote:
      "  adipiscing elit. In turpis nibh  sit amet, consectetur adipiscing elit. In ",
  },
];

export const altHeroData = [
  {
    id: "page1",
    img: imgHnosotros,
    tile: "Asesoría profesional para Tramitación de Visas",
    subtitle:
      "Nos encargamos de preparar toda la documentación requerida por los diferentes consulados, pago y programación de citas, llenado de formularios y capacitación para la entrevista consular.",
  },
  {
    id: "page1",
    img: imgCliente,
    tile: "Regularización Migratoria en Ecuador.",
    subtitle:
      "Brindamos asesoría para la Tramitación de visas para Ciudadanos extranjeros que deseen Visitar o Residenciarse en Ecuador.",
  },
  {
    id: "page1",
    img: imgCliente,
    tile: "Paquetes Turísticos y Seguros de Viaje.",
    subtitle:
      "Visaservi te ofrece los mejores destinos turísticos en Ecuador y El mundo.",
  },
  {
    id: "page1",
    img: imgCliente,
    tile: "Traduducciones de Documentos.",
    subtitle:
      "Contamos con traductores certificados que te brindarán un servicio de primera calidad para la traducción de tus documentos en distintos idiomas.",
  },
];

export const nosotrosDesc = [
  {
    id: "item1",
    bg: "bg-green",
    img: iconPlane,
    title: "misión",
    desc: "Nos encargamos de preparar toda la documentación.",
  },
  {
    id: "item2",
    bg: "bg-green",
    img: iconPlane,
    title: "misión",
    desc: "Nos encargamos de preparar toda la documentación.",
  },
  {
    id: "item3",
    bg: "bg-green",
    img: iconPlane,
    title: "misión",
    desc: "Nos encargamos de preparar toda la documentación.",
  },
];

export const serviciosVisa = [
  {
    id: "desc-1",
    title: "Visas Estados Unidos (USA)",
    paises: [
      {
        subtitle: "Requisitos Visa de turismo USA",
        requisitos: [
          "formulario de Solicitud de Visa.",
          "Original y copia del pasaporte, válido y vigente.",
          "Certificado original de antecedentes penales de tu país de origen o en los que hubieses residido durante los últimos cinco años.",
          "Acreditar los medios de vida lícitos que permitirán la subsistencia de la persona solicitante.",
          "Pago de la tarifa de trámite.",
        ],
      },
      {
        subtitle: "Requisitos visa de Estudios USA",
        requisitos: [
          "Original y copia del pasaporte, válido y vigente",
          "Formulario DS-160 (solicitud de visa de no inmigrante).",
          "Recibo de pago de la aplicación.",
          "Foto tamaño pasaporte.",
          "Certificado de estudiante visitante o I-901 (Student and Exchange Visitor Program, SEVP, por sus siglas en inglés)",
          "Comprobante del pago al SEVIS",
        ],
      },
      {
        subtitle: "Requisitos visa de Trabajo USA",
        requisitos: [
          "Posesión de un título bachillerato o grado superior en la especialización específica.",
          "Tener una oferta de trabajo de un empleador en Estados Unidos avalado para contratar extranjeros.",
          "Llenar el Formulario ETA-9035/9035E, Solicitud de Condición Laboral (LCA), junto con el Formulario I-129, Petición para Trabajador No Inmigrante.",
          "Tener pasaporte vigente y documentación de identidad.",
          "Demostrar solvencia para mantener una residencia en Estados Unidos.",
          "No tener antecedentes penales.",
        ],
      },
      {
        subtitle: "Requisitos de Reagrupación Familiar Schengen",
        requisitos: [
          "No ser ciudadano de un Estado de la Unión Europea, del Espacio Económico Europeo y de Suiza, o familiar de ciudadanos de estos países, a los que les sea de aplicación el régimen de ciudadano de la Unión.",
          "No encontrarse irregularmente en territorio español.",
          "Carecer de antecedentes penales en España y en sus países anteriores de residencia por delitos existentes en el ordenamiento español.",
          "No tener prohibida la entrada en Schengen y no figurar como rechazable en el espacio territorial de países Schengen",
          "Tener asistencia sanitaria por estar cubierta por la Seguridad Social o contar con un seguro privado de enfermedad.",
          "No padecer ninguna de las enfermedades que pueden tener repercusiones de salud pública graves de conformidad con lo dispuesto en el Reglamento Sanitario Internacional de 2005.",
          "No encontrarse, en su caso, dentro del plazo de compromiso de no retorno a España que el extranjero haya asumido al acogerse a un programa de retorno voluntario.",
          "Haber abonado la tasa por tramitación del procedimiento.",
          "Tener medios económicos suficientes para atender las necesidades de la familia. Se podrán computar los ingresos aportados por el cónyuge u otro familiar en línea directa y primer grado residente en España que conviva con el reagrupante. No serán computables los ingresos provenientes del sistema de asistencia social.",
        ],
      },
    ],
  },
  {
    id: "desc-2",
    title:
      "Visas Schengen (España, Italia, Francia, Alemania, Suiza Y demás países de la Unión Europea)",
    paises: [
      {
        subtitle: "Requisitos visa de Turismo Schengen:",
        requisitos: [
          "El formulario oficial debidamente complementado con dos fotografías tamaño pasaporte.",
          "Un billete de ida y vuelta.",
          "Una prueba de alojamiento.",
          "Un justificante de los motivos de la visita.",
          "Una prueba de los medios económicos del viajero, como el extracto reciente de una cuenta bancaria.",
          "Un seguro médico de viaje, válido en todo el territorio Schengen y con una cobertura mínima de 30.000 euros.",
        ],
      },
      {
        subtitle: "Requisitos visa de Estudios Schengen",
        requisitos: [
          "Recibo de la tasa abonada",
          "Formulario de solicitud",
          "Fotografía actualizada, tamaño pasaporte a color con fondo blanco.",
          "Pasaporte con vigencia mínima de 6 meses",
          "Acreditación original de la admisión en un centro docente, público o oficialmente reconocido para cursas estudios o realizar trabajos de investigación o formación, en la que deberá constar el código de Registro Nacional de Universidades.",
          "Contenido del Plan de Estudios, incluyendo la duración de los mismos.",
          "Copia notariada del último título académico obtenido",
          "Acreditación de la disposición de medios de subsistencia para todo el periodo que solicita. Dicha acreditación ha de ser fehaciente.",
          "Acreditación de la disposición de alojamiento para todo el periodo de estadía en España.",
          "Seguro Médico que cubra todo el tiempo de estancia en todos los países del Acuerdo Shenguen, médicos y repatriación con una cobertura mínima de 30 mil euros, sin deducible.",
          "Record policial vigente, original y copia apostillada por el ministerio de Relaciones Exteriores, actualizado.",
          "Reserva de vuelo.",
        ],
      },
      {
        subtitle: "Requisitos visa de Trabajo Schengen",
        requisitos: [
          "El formulario de solicitud debidamente cumplimentado que se puede descargar en la página web de los consulados españoles.",
          "Una copia de la autorización de residencia y trabajo obtenida por el empleador.",
          "Pasaporte actualizado y con una vigencia mínima de cuatro meses antes de la fecha en que esté previsto viajar.",
          "Dos fotografías a color, sobre fondo blanco en tamaño pasaporte.",
          "Certificado de antecedentes penales.",
          "Certificado médico que demuestre que no se padece ninguna enfermedad grave o contagiosa que suponga un riesgo para la seguridad pública.",
        ],
      },
      {
        subtitle: "Requisitos de Reagrupación Familiar Schengen",
        requisitos: [
          "No ser ciudadano de un Estado de la Unión Europea, del Espacio Económico Europeo y de Suiza, o familiar de ciudadanos de estos países, a los que les sea de aplicación el régimen de ciudadano de la Unión.",
          "No encontrarse irregularmente en territorio español.",
          "Carecer de antecedentes penales en España y en sus países anteriores de residencia por delitos existentes en el ordenamiento español.",
          "No tener prohibida la entrada en Schengen y no figurar como rechazable en el espacio territorial de países Schengen",
          "Tener asistencia sanitaria por estar cubierta por la Seguridad Social o contar con un seguro privado de enfermedad.",
          "No padecer ninguna de las enfermedades que pueden tener repercusiones de salud pública graves de conformidad con lo dispuesto en el Reglamento Sanitario Internacional de 2005.",
          "No encontrarse, en su caso, dentro del plazo de compromiso de no retorno a España que el extranjero haya asumido al acogerse a un programa de retorno voluntario.",
          "Haber abonado la tasa por tramitación del procedimiento.",
          "Tener medios económicos suficientes para atender las necesidades de la familia. Se podrán computar los ingresos aportados por el cónyuge u otro familiar en línea directa y primer grado residente en España que conviva con el reagrupante. No serán computables los ingresos provenientes del sistema de asistencia social.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Visas y otros documentos en Ecuador",
    paises: [
      {
        subtitle: "Requisitos Visa de turismo Ecuador",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms",
          "Formulario de solicitud de visa",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses",
          "Itinerario de viaje y pasajes de ida y retorno.",
          "Acreditar medios de vida lícitos que permitan la estadía por el tiempo autorizado.",
          "Pago de la tarifa fijada por la normativa aplicable.",
        ],
      },
      {
        subtitle:
          "Requisitos de Visa de residencia permanente por tiempo de permanencia mayor a 21 meses",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses; ",
          "Acreditar los medios de vida lícitos que permitan la subsistencia de la persona solicitante",
          "Pago de la tarifa fijada (Arancel Consular y Diplomático).",
          "Certificado de antecedentes penales del Ecuador.",
          "Constancia de residencia temporal con la que se acredite el tiempo de permanencia de al menos 21 meses continuos",
          "Documentación que de cuenta del hecho que ocasionó el otorgamiento de la visa de residencia temporal.",
        ],
      },
      {
        subtitle: "Requisitos de Visa Virte",
        requisitos: [
          "Solicitud de visa.",
          "Pasaporte o cédula de identidad venezolana o registro consular otorgado por un Consulado venezolano acreditado en el Ecuador, documentos que estarán, en lo pertinente, acorde a lo establecido en el artículo 5 del Decreto Ejecutivo Nro. 436, de 1 de junio de 2022.",
          "Certificado que acredite no tener antecedentes judiciales y/o penales y/o policiales en el país de origen y en los que hubiera residido el solicitante durante los cinco años anteriores a su arribo al país, según sea el caso.",
          "Certificado de no registrar antecedentes penales del Ecuador. ",
          "Los niños y adolescentes venezolanos menores de nueve años, presentarán únicamente su partida de nacimiento o el registro consular.",
        ],
      },
      {
        subtitle: "Requisitos de Visa de residencia permanente por Amparo",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms.",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses.",
          "No ser considerado una amenaza o riesgo para la seguridad pública y estructura del Estado.",
          "Acreditar los medios de vida lícitos que permitan la subsistencia de la persona solicitante y de su grupo familiar dependiente.",
          "No haber obtenido sentencia ejecutoriada por delitos como asesinato, homicidio, violación, secuestro o los demás sancionados con pena privativa de libertad mayor a cinco años, conforme lo establecido por la ley penal vigente.",
          "Pago de la tarifa fijada por la autoridad de movilidad humana; y Demás documentos que la autoridad requiera en los casos que amerite.",
        ],
      },
      {
        subtitle: "Requisitos de Visa de trabajo",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms.",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses.",
          "No ser considerado una amenaza o riesgo para la seguridad pública y estructura del Estado.",
          "Acreditar los medios de vida lícitos que permitan la subsistencia de la persona solicitante y de su grupo familiar dependiente.",
          "No haber obtenido sentencia ejecutoriada por delitos como asesinato, homicidio, violación, secuestro o los demás sancionados con pena privativa de libertad mayor a cinco años, conforme lo establecido por la ley penal vigente.",
          "Pago de la tarifa fijada por la autoridad de movilidad humana.",
          "Título profesional, título de técnico o tecnólogo, apostillado en caso de haber sido emitido en un país parte del Convenio de la Apostilla de La Haya.",
          "Registro del título profesional, título de técnico o tecnólogo ante la autoridad nacional competente.",
        ],
      },
      {
        subtitle: "Requisitos de Pasaporte ecuatoriano",
        requisitos: ["Cédula de Identidad vigente y legible."],
      },
      {
        subtitle: "Requisitos de Cédula ecuatoriana",
        requisitos: [
          "Haber realizado el pago bajo la modalidad de botón de pago, banco corresponsal o banca interna.",
          "Documento de Instrucción Educativa.",
          "Profesión / Ocupación.",
          "Carnet o Certificado para miembro de la Fuerza Pública Ecuatoriana.",
        ],
      },
      {
        subtitle: "Requisitos de Cédula ecuatoriana para extranjeros",
        requisitos: [
          "Turno solicitado.",
          "Pasaporte válido o documento de identidad emitido por el país de origen, sobre el cual fue emitida la visa por el Estado ecuatoriano, válido con un periodo de vigencia mínima de seis meses.",
          "Movimiento migratorio (verificación Interna).",
          "Prueba de la vigencia del hecho que justificó la concesión de la visa o del vínculo de consanguinidad o afinidad en virtud del cual se la otorgó.",
        ],
      },
    ],
  },
];

export const serviciosEcuador = [
  {
    id: "desc-3",
    title: "Visa de turismo Ecuador",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms",
          "Formulario de solicitud de visa",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses",
          "Itinerario de viaje y pasajes de ida y retorno.",
          "Acreditar medios de vida lícitos que permitan la estadía por el tiempo autorizado.",
          "Pago de la tarifa fijada por la normativa aplicable.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title:
      "Requisitos de Visa de residencia permanente por tiempo de permanencia mayor a 21 meses",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses; ",
          "Acreditar los medios de vida lícitos que permitan la subsistencia de la persona solicitante",
          "Pago de la tarifa fijada (Arancel Consular y Diplomático).",
          "Certificado de antecedentes penales del Ecuador.",
          "Constancia de residencia temporal con la que se acredite el tiempo de permanencia de al menos 21 meses continuos",
          "Documentación que de cuenta del hecho que ocasionó el otorgamiento de la visa de residencia temporal.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Requisitos de Visa Virte",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Solicitud de visa.",
          "Pasaporte o cédula de identidad venezolana o registro consular otorgado por un Consulado venezolano acreditado en el Ecuador, documentos que estarán, en lo pertinente, acorde a lo establecido en el artículo 5 del Decreto Ejecutivo Nro. 436, de 1 de junio de 2022.",
          "Certificado que acredite no tener antecedentes judiciales y/o penales y/o policiales en el país de origen y en los que hubiera residido el solicitante durante los cinco años anteriores a su arribo al país, según sea el caso.",
          "Certificado de no registrar antecedentes penales del Ecuador. ",
          "Los niños y adolescentes venezolanos menores de nueve años, presentarán únicamente su partida de nacimiento o el registro consular.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Requisitos de Visa de residencia permanente por Amparo",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms.",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses.",
          "No ser considerado una amenaza o riesgo para la seguridad pública y estructura del Estado.",
          "Acreditar los medios de vida lícitos que permitan la subsistencia de la persona solicitante y de su grupo familiar dependiente.",
          "No haber obtenido sentencia ejecutoriada por delitos como asesinato, homicidio, violación, secuestro o los demás sancionados con pena privativa de libertad mayor a cinco años, conforme lo establecido por la ley penal vigente.",
          "Pago de la tarifa fijada por la autoridad de movilidad humana; y Demás documentos que la autoridad requiera en los casos que amerite.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Requisitos de Visa de trabajo",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Fotografía a color en formato JPG máximo de un mb, 5 x 5 cms.",
          "Pasaporte válido y con un periodo de vigencia mínimo de seis (6) meses.",
          "No ser considerado una amenaza o riesgo para la seguridad pública y estructura del Estado.",
          "Acreditar los medios de vida lícitos que permitan la subsistencia de la persona solicitante y de su grupo familiar dependiente.",
          "No haber obtenido sentencia ejecutoriada por delitos como asesinato, homicidio, violación, secuestro o los demás sancionados con pena privativa de libertad mayor a cinco años, conforme lo establecido por la ley penal vigente.",
          "Pago de la tarifa fijada por la autoridad de movilidad humana.",
          "Título profesional, título de técnico o tecnólogo, apostillado en caso de haber sido emitido en un país parte del Convenio de la Apostilla de La Haya.",
          "Registro del título profesional, título de técnico o tecnólogo ante la autoridad nacional competente.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Requisitos de Pasaporte ecuatoriano",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: ["Cédula de Identidad vigente y legible."],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Requisitos de Cédula ecuatoriana",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Haber realizado el pago bajo la modalidad de botón de pago, banco corresponsal o banca interna.",
          "Documento de Instrucción Educativa.",
          "Profesión / Ocupación.",
          "Carnet o Certificado para miembro de la Fuerza Pública Ecuatoriana.",
        ],
      },
    ],
  },
  {
    id: "desc-3",
    title: "Requisitos de Cédula ecuatoriana para extranjeros",
    paises: [
      {
        subtitle: " Requisitos",
        requisitos: [
          "Turno solicitado.",
          "Pasaporte válido o documento de identidad emitido por el país de origen, sobre el cual fue emitida la visa por el Estado ecuatoriano, válido con un periodo de vigencia mínima de seis meses.",
          "Movimiento migratorio (verificación Interna).",
          "Prueba de la vigencia del hecho que justificó la concesión de la visa o del vínculo de consanguinidad o afinidad en virtud del cual se la otorgó.",
        ],
      },
    ],
  },
];

export const servicesLocations = [
  {
    id: "location1",
    title: "Galápagos",
    desc: "Algún hechizo mágico convirtió a la flora y fauna de éste lugar en algo único, e imposible de encontrar en otro lugar del planeta.",
    img: imgLocationGalapagos,
  },
  {
    id: "location2",
    title: "Colombia",
    desc: "Viajar por Colombia es compartir con una infinidad de culturas y descubrir paisajes inimaginables, pues solo este país es capaz combinar opuestos como la nieve y el mar en un mismo lugar.",
    img: imgLocationColombia,
  },
  {
    id: "location3",
    title: "Perú",
    desc: "El Perú es uno de los países más variados del mundo. Un país multicultural, lleno de tradiciones, una laureada gastronomía y vastas reservas naturales.",
    img: imgLocationPeru,
  },
  {
    id: "location4",
    title: "Argentina",
    desc: "Argentina es uno de los países más bellos del mundo. Con una rica historia, una cultura encantadora y una comida deliciosa, hay mucho que ver y hacer aquí.",
    img: imgLocationArgentina,
  },
  {
    id: "location5",
    title: "Brasil",
    desc: "Tierra de grandes fiestas al aire libre con música y baile, de gente colorida y playas para nadar. Es un país de contrastes: ciudades cosmopolitas y bosques vírgenes del hombre.",
    img: imgLocationBrasil,
  },
  {
    id: "location6",
    title: "Panamá",
    desc: "Panamá es un país con un pulso moderno, pero también con un fuerte sentido de su historia. Con algunas de las playas más hermosas de América Central, gastronomía inigualable, Centros comerciales y zona libre para las compras.",
    img: imgLocationPanama,
  },
  {
    id: "location7",
    title: "México",
    desc: "Desde la playa hasta la montaña, del desierto a la selva, de la zona arqueológica a la vibrante metrópoli, de lo dulce a lo picante, de la tranquilidad a la algarabía de sus fiestas, México tiene todo lo que busca el turista",
    img: imgLocationMexico,
  },
  {
    id: "location8",
    title: "Curazao",
    desc: "La influencia de distintas culturas, la preciosa arquitectura colonial, sus formaciones geográficas y diversa fauna marina, su particular gastronomía y la punzante alegría de sus habitantes son algunos de esos atributos.",
    img: imgLocationCurazao,
  },
  {
    id: "location9",
    title: "República Dominicana",
    desc: "Rodeada por el Océano Atlántico hacia el Norte y el Mar Caribe hacia el Sur, República Dominicana se enorgullece de contar con las mejores playas del mundo, magníficos hoteles y resorts.",
    img: imgLocationRepublicaDominicana,
  },
  {
    id: "location10",
    title: "Estados Unidos",
    desc: "País decultura en Boston, Filadelfia o San Francisco. País de diversión y fiesta en Miami, Nueva Orleans o Los Ángeles. Tierra de inmensidades en las Rocosas, Alaska o Hawai.",
    img: imgLocationEstadosUnidos,
  },
  {
    id: "location11",
    title: "España",
    desc: "España es un país turístico al que acuden anualmente millones de viajeros atraídos por sus playas y agradable clima, el abundante patrimonio artístico del país y la riqueza gastronómica.",
    img: imgLocationEspaña,
  },
  {
    id: "location12",
    title: "Francia",
    desc: "Francia se caracteriza por la oferta turística que presenta, la cual se enfoca en el arte, la historia y la gastronomía que mezclado con las distintas manifestaciones forman un conjunto de experiencias interesantes e inolvidables para el turista. ",
    img: imgLocationFrancia,
  },
  {
    id: "location13",
    title: "Alemania",
    desc: "Alemania ofrece una gran variedad de atracciones: ya sean las turbulentas Ciudades Mágicas, las medianas y pequeñas ciudades con su estilo único, los impresionantes paisajes naturales, la gastronomía de temporada o los eventos musicales y deportivos.",
    img: imgLocationAlemania,
  },
  {
    id: "location14",
    title: "Suiza",
    desc: "Suiza es un pequeño país europeo de mucha belleza natural, donde las grandes ciudades están cerca de montañas, lagos, bosques, ríos y abundante aire fresco.",
    img: imgLocationSuiza,
  },
  {
    id: "location15",
    title: "Reino Unido",
    desc: "El Reino Unido divide sus grandes contribuciones la humanidad en sus paisajes entre Inglaterra, Gales, Escocia e Irlanda del Norte. Encontrarás muchísimo para hacer, desde la energética Londres hasta las indomables Tierras Altas de Escocia.",
    img: imgLocationReinoUnido,
  },
];
