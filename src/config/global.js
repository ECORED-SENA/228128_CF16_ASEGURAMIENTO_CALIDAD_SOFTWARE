export default {
  global: {
    componenteFormativo:
      'Plan de mejora de usabilidad del prototipo <i>software</i>',
    descripcionCurso:
      'En el presente componente formativo, el aprendiz conocerá el proceso de pruebas de usabilidad sobre el producto <i>software</i>, con lo cual tendrá la oportunidad de establecer la eficiencia, eficacia, satisfacción y otras métricas, relacionadas con la experiencia de usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métricas de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Eficiencia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Eficacia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Satisfacción',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cuestionarios',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Herramientas',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Documentación de la evaluación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF16_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Métricas de usabilidad',
      referencia:
        'Navarro, A. (2017). <i>Usabilidad: introducción a la usabilidad del software</i>. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xNuRl2eCe04',
    },
    {
      tema: 'Métricas de usabilidad',
      referencia:
        'Lautrec, T. (2019). 5 <i>claves para realizar pruebas de usabilidad</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ia2KxDbpuZA',
    },
  ],
  glosario: [
    {
      termino: '<em>Framework</em>',
      significado:
        'es un entorno o marco de trabajo que incluye un conjunto de procesos y artefactos organizados para optimizar una actividad. ',
    },
    {
      termino: '<em>Goal</em>',
      significado:
        'se traduce como objetivo y es la meta que se propone en una organización o proceso.',
    },
    {
      termino: 'KPI',
      significado:
        '<i>Key Performance Indicator</i> son indicadores clave, usados por las organizaciones para medir sus objetivos.',
    },
    {
      termino: 'Métrica',
      significado:
        'es una unidad en la que se basa una medición y es usada para determinar correlaciones en estructuras de datos.',
    },
    {
      termino: '<em>Target</em>',
      significado:
        'es un público, persona o cosa a la que va direccionado un objetivo.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'es la facilidad de uso que emplea un usuario al ejecutar tareas en un producto.',
    },
    {
      termino: 'UX',
      significado: 'es la abreviatura de experiencia de usuario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Finstad, K. (2010). The usability metric for user experience. <i>Interacting with Computers</i>, 22(5), p. 323-327. ',
      link: 'http://dx.doi.org/10.1016/j.intcom.2010.04.004 ',
    },
    {
      referencia:
        'Lewis, J. (2018). The system usability scale: past, present, and future. <i>International Journal of Human–Computer Interaction</i>, 34(7), p. 577-590. ',
      link: 'https://doi.org/10.1080/10447318.2018.1455307 ',
    },
    {
      referencia:
        'Sauro, J. (2019). <i>What is the purpose of UX measurement?</i> ',
      link: 'https://measuringu.com/ux-measurement-purpose/',
    },
    {
      referencia:
        'Sauro, J. & Lewis, J. (2016). <i>Quantifying the user experience: Practical statistics for user research</i>. Morgan Kaufmann.',
    },
    {
      referencia:
        'Tullis, T. & Albert, W. (2008). <i>Measuring the user experience: Collecting, analyzing, and presenting usability metrics</i>. Morgan Kaufman.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Rodríguez',
          cargo: 'Experto Temático',
          centro: 'Centro Nacional Colombo Alemán - Regional Atlántico ',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
