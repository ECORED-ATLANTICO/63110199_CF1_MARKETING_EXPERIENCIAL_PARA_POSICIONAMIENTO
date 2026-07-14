export default {
  global: {
    Name: 'Fundamentos experienciales',
    Description:
      'El componente aborda los fundamentos del <em>marketing</em> tradicional y <em>experiencial</em>, integrando emociones, categorías de clientes y decisiones de compra. Permite comprender cómo diseñar estrategias centradas en la experiencia del cliente, fortaleciendo el posicionamiento de marca mediante la articulación de elementos sensoriales, emocionales y estratégicos en contextos reales de mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: '<em>Marketing</em> tradicional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Componentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elementos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Aplicaciones',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ventajas',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Teorías',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Principios',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Leyes',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Marketing</em> experiencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Componentes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Elementos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Decálogo',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Aplicaciones',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Ventajas',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Teorías',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Principios',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Leyes',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Interrelación del <em>marketing</em> experiencial y <em>marketing</em> sensorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Relaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aplicaciones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Implementaciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Complementación',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Variables',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Relaciones',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Categorías de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipología',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Emociones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tratamientos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Formas de decisión de compra impulsiva y racional ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Definición',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Etapas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Características',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Ventajas',
            hash: 't_6_5',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Audiencia',
      significado:
        'Conjunto de personas a quienes se dirige un mensaje o una estrategia de marketing.',
    },
    {
      termino: 'Canal',
      significado:
        'Medio utilizado para comunicar la propuesta de valor y llegar al mercado objetivo.',
    },
    {
      termino: 'Categoría de clientes',
      significado:
        'Clasificación de los consumidores según características, necesidades o comportamientos similares.',
    },
    {
      termino: 'Cliente',
      significado:
        'Individuo que interactúa con la marca durante el proceso de compra.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Acciones, decisiones y reacciones del consumidor durante la búsqueda, compra y uso de productos o servicios.',
    },
    {
      termino: 'Compra impulsiva',
      significado:
        'Decisión de compra rápida, motivada principalmente por emociones o estímulos inmediatos, con poca planificación.',
    },
    {
      termino: 'Compra racional',
      significado:
        'Decisión de compra basada en el análisis, la comparación de alternativas y la evaluación de beneficios.',
    },
    {
      termino: 'Emoción',
      significado:
        'Respuesta afectiva que influye en la percepción, la experiencia y la decisión del consumidor.',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'Conjunto de percepciones, emociones e interacciones que vive una persona durante su relación con una marca.',
    },
    {
      termino: '<em>Marketing</em> experiencial',
      significado:
        'Estrategia centrada en diseñar experiencias memorables que generen vínculos emocionales entre el cliente y la marca.',
    },
    {
      termino: '<em>Marketing</em> sensorial',
      significado:
        'Estrategia que utiliza estímulos dirigidos a los sentidos para influir en la percepción y el comportamiento del consumidor.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Grupo específico de consumidores al que una organización dirige sus productos, servicios y estrategias comerciales.',
    },
    {
      termino: 'Narrativa de marca',
      significado:
        'Historia y mensaje que una organización construye para comunicar su identidad y generar conexión emocional con los consumidores.',
    },
    {
      termino: 'Percepción',
      significado:
        'Interpretación que el consumidor realiza sobre una marca, producto o servicio a partir de sus experiencias y estímulos recibidos.',
    },
    {
      termino: 'Personalización',
      significado:
        'Adaptación de productos, servicios o experiencias a las necesidades, preferencias y características de cada cliente.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca en la mente del consumidor en comparación con sus competidores.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir el mercado en grupos de consumidores con características o necesidades comunes para diseñar estrategias específicas.',
    },
    {
      termino: 'Toma de decisión',
      significado:
        'Proceso mediante el cual el consumidor evalúa alternativas y elige un producto o servicio para satisfacer una necesidad.',
    },
    {
      termino: 'Valor percibido',
      significado:
        'Evaluación que realiza el cliente sobre los beneficios obtenidos frente a los costos asumidos al adquirir un producto o servicio.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Atributo o característica diferenciadora que permite a una organización destacar frente a sus competidores y generar mayor valor para el cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). <em>Los segmentos del marketing: análisis, definición y tipos.</em> RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, <em>11</em>(21).',
      link:
        'https://rodin.uca.es/bitstream/handle/10498/31668/Segmentacio_n%20de%20mercado.pdf?sequence=4',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). <em>Segmentación, mercado meta y posicionamiento</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Niño Sierra, D. F. (s.f.). <em>Fidelización del cliente</em>. Fundación Universitaria UNIEMPRESARIAL.',
      link:
        'https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/a4b5d64d-a649-4170-8d61-6b8b400e6dbd/content',
    },
    {
      referencia:
        'Solomon, M. R. (2018). <em>Comportamiento del consumidor: Comprando, poseyendo y siendo</em> (12ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México. (2020). <em>El entorno del marketing</em>. UNAM.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
