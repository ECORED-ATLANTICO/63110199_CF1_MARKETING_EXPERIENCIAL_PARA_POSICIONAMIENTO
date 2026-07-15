<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em Marketing] tradicional

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="").z-2
      
      .row.justify-content-center.z-2
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p El <em>marketing</em> tradicional constituye la base conceptual sobre la cual se han estructurado las estrategias comerciales clásicas, enfocándose en la promoción de productos y servicios mediante medios masivos. 
            p.mb-0 Su comprensión permite al aprendiz identificar sus componentes, elementos y aplicaciones en contextos reales, este enfoque será abordado desde una perspectiva conceptual y aplicada, integrando ejemplos empresariales que faciliten la transición hacia modelos centrados en la experiencia del cliente.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Definición

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2.mt-5.pt-4
      .col-lg-8
        p El <em>marketing</em> tradicional se define como el conjunto de estrategias orientadas a promocionar productos o servicios mediante canales convencionales, con una comunicación predominantemente unidireccional, este enfoque busca impactar audiencias amplias a través de medios como televisión, radio y prensa, priorizando la difusión del mensaje sobre la interacción con el consumidor (Kotler & Keller, 2016).
        .p-4.bg-img.mb-3
          p.mb-0 En términos aplicados, el marketing tradicional se fundamenta en la identificación de necesidades del mercado y la creación de mensajes persuasivos que incentiven la compra, empresas como Coca-Cola han consolidado su posicionamiento mediante campañas masivas que refuerzan atributos emocionales y funcionales del producto.
        p.mb-0 Desde una perspectiva estratégica, este enfoque permite generar reconocimiento de marca a gran escala, aunque presenta limitaciones en la personalización y retroalimentación, su integración con enfoques actuales permite 

      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Características

    p.mb-4.mb-lg-5 El #[em marketing] tradicional se caracteriza por su orientación al producto, el uso de medios masivos y la comunicación unidireccional, este enfoque prioriza la difusión del mensaje hacia grandes audiencias, manteniendo el control total por parte de la empresa sobre el contenido y los canales utilizados (Armstrong & Kotler, 2017).

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre sus principales características se encuentran la baja personalización, la segmentación amplia y la medición basada en alcance y frecuencia, empresas como Procter & Gamble han aplicado este modelo para posicionar múltiples marcas mediante campañas estandarizadas en diferentes mercados. Desde una visión estratégica, estas características permiten eficiencia operativa y cobertura, pero limitan la interacción con el cliente, en la actualidad, se complementan con estrategias que buscan mayor conexión emocional y participación del consumidor.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Características del marketing tradicional

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-xl-10
        TabsA.color-acento-botones.tabs-a--large
          .tarjeta.bg-primario-p5.p-4(titulo="Unidireccionalidad, sin interacción directa")
            p.mb-0 En el <em>marketing</em> tradicional, la comunicación fluye únicamente de la empresa hacia el consumidor. Los mensajes se difunden mediante medios como televisión, radio, prensa o publicidad exterior, sin permitir una respuesta inmediata del público. La retroalimentación suele obtenerse posteriormente mediante estudios de mercado o análisis de ventas, lo que limita la interacción y la capacidad de ajustar las estrategias en tiempo real. 
          .tarjeta.bg-primario-p5.p-4(titulo="Alcance masivo para amplia cobertura")
            p.mb-0 El <em>marketing</em> tradicional utiliza medios de comunicación masivos para llegar simultáneamente a un gran número de personas. Su objetivo es aumentar la visibilidad y el reconocimiento de la marca mediante campañas dirigidas a audiencias amplias. Aunque logra una gran cobertura, no siempre alcanza de manera precisa al público objetivo, lo que puede disminuir la eficiencia de la comunicación. 
          .tarjeta.bg-primario-p5.p-4(titulo="Control del mensaje: la empresa define el contenido")
            p.mb-0 En este modelo, la empresa controla completamente el contenido, el formato y el momento de difusión de sus mensajes. La comunicación se planifica para transmitir una imagen consistente de la marca y destacar los beneficios de sus productos o servicios. La participación del consumidor es limitada, por lo que el mensaje permanece prácticamente inalterado durante toda la campaña. 
          .tarjeta.bg-primario-p5.p-4(titulo="Baja personalización: los mensajes son generales")
            p.mb-0 Los mensajes del <em>marketing</em> tradicional se diseñan para públicos amplios y diversos, utilizando un mismo contenido para todos los consumidores. Este enfoque facilita la difusión de campañas a gran escala, pero reduce la capacidad de adaptarse a las necesidades, preferencias e intereses de segmentos específicos, limitando la conexión personalizada con cada cliente. 
      .col-sm-4.col-lg-2.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/4.png", alt="")
    
    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 El marketing tradicional es eficiente para cobertura, pero limitado en interacción.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Componentes

    p.mb-4 Los componentes del marketing tradicional corresponden a los elementos estructurales que permiten diseñar y ejecutar estrategias orientadas al mercado, estos componentes se articulan principalmente a través de la mezcla de marketing, también conocida como las 4P: producto, precio, plaza y promoción; su adecuada integración permite a las organizaciones responder a las necesidades del consumidor desde una perspectiva funcional y competitiva.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 1.
      span Componentes del marketing tradicional
    img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/5-mob.svg", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")
    img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/5.svg", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")
    figcaption.mb-4 Nota. SENA, (2026).

    p.mb-4 Desde una perspectiva estratégica, los componentes del marketing tradicional facilitan la estructuración de la oferta y su posicionamiento en el mercado, sin embargo, su enfoque centrado en el producto limita la comprensión profunda del cliente, lo que ha impulsado la evolución hacia modelos más experienciales.

    .row.justify-content-center
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              p.mb-4.mb-lg-0 #[strong Ejemplo aplicado]. En el ámbito aplicado, cada componente cumple una función específica dentro de la estrategia, por ejemplo, McDonald's gestiona su producto mediante estandarización, su precio con estrategias accesibles, su plaza a través de amplia distribución y su promoción mediante campañas masivas, esta articulación le permite mantener coherencia en mercados globales.
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    Separadoe

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Elementos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los elementos del marketing tradicional hacen referencia a los factores operativos que intervienen en la ejecución de las estrategias, incluyendo el mercado objetivo, los canales de comunicación y los mensajes publicitarios, estos elementos permiten operacionalizar los componentes estratégicos y garantizar que la propuesta de valor llegue de manera efectiva al consumidor (Stanton, Etzel & Walker, 2007).

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .d-none.d-lg-block.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Los elementos del #[em marketing] tradicional se enfocan en identificar segmentos de mercado y definir mensajes claros, por ejemplo, Nestlé adapta sus campañas según el público objetivo, utilizando distintos medios tradicionales para comunicar beneficios específicos de sus productos, dichos elementos permiten alinear la comunicación con los objetivos comerciales; no obstante, su enfoque limitado en la interacción ha llevado a integrar nuevos elementos relacionados con la experiencia y la participación del cliente.
  
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Elementos del #[em marketing] tradicional
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. Elaboración propia con base en Stanton et al. (2026).
        thead
          tr(style="background-color: #F0F6F9")
            th Elemento
            th(colspan="2") Descripción	
            th(colspan="2") Ejemplo aplicado
        tbody
          tr
            td #[strong Mercado objetivo]
            td(colspan="2") Segmento específico de consumidores definido a partir de variables demográficas, geográficas o comportamentales, al cual la empresa dirige sus esfuerzos comerciales para satisfacer necesidades identificadas.
            td(colspan="2") Una empresa de productos infantiles dirige su oferta a padres entre 25 y 40 años con hijos pequeños en zonas urbanas.
          tr
            td #[strong Mensaje]
            td(colspan="2") Contenido comunicativo estructurado que transmite los atributos, beneficios y propuesta de valor del producto, diseñado para influir en la percepción y decisión del consumidor.
            td(colspan="2") Una marca de detergente comunica “mayor limpieza con menor esfuerzo” en su campaña publicitaria televisiva.
          tr
            td #[strong Canal]
            td(colspan="2") Medio o conjunto de medios utilizados para difundir el mensaje al mercado objetivo, permitiendo el alcance y la visibilidad de la marca en diferentes contextos.
            td(colspan="2") Una empresa utiliza televisión y radio para promocionar un nuevo producto en el mercado nacional.
          tr
            td #[strong Audiencia]
            td(colspan="2") Conjunto de personas que reciben el mensaje, incluyendo tanto el público objetivo como otros receptores potenciales que pueden verse impactados por la comunicación.
            td(colspan="2") Una campaña televisiva es vista por familias, jóvenes y adultos, aunque esté dirigida principalmente a amas de casa.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 La correcta definición de elementos permite que el mensaje llegue de manera efectiva al consumidor.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Aplicaciones

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.bg-img.bg-img--2.rounded-4.mb-3
          p.mb-0 Las aplicaciones del #[em marketing] tradicional se centran en la implementación de estrategias orientadas a la promoción de productos y servicios en mercados amplios, utilizando medios de comunicación masivos, este enfoque es especialmente efectivo en contextos donde se busca generar reconocimiento de marca, posicionamiento inicial y cobertura significativa en segmentos de consumidores diversos.
        p En el ámbito empresarial, las aplicaciones del marketing tradicional se evidencian en campañas publicitarias, lanzamientos de productos y estrategias de comunicación institucional, por ejemplo, Colgate ha utilizado campañas televisivas para reforzar la confianza del consumidor en sus productos, destacando atributos funcionales y beneficios directos.
        p.mb-0 Desde una perspectiva estratégica, estas aplicaciones permiten alcanzar grandes audiencias en menor tiempo, aunque presentan limitaciones en la segmentación y personalización. Su uso sigue siendo relevante en mercados donde el acceso digital es limitado o donde se requiere impacto masivo.

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Ventajas

    .row.justify-content-center.align-items-center.mb-3
      .d-none.d-lg-block.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/9.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Las ventajas del #[em marketing] tradicional se relacionan con su capacidad de alcanzar audiencias amplias, generar reconocimiento de marca y mantener control sobre el mensaje, este enfoque permite a las empresas comunicar de manera consistente sus propuestas de valor, utilizando canales consolidados que garantizan cobertura y visibilidad.

    p.mb-5 Entre sus principales ventajas se destacan el alcance masivo, la credibilidad de los medios tradicionales y la facilidad de implementación en estrategias de posicionamiento, estas ventajas permiten eficiencia en la comunicación y fortalecimiento del posicionamiento, sin embargo, su efectividad depende del contexto del mercado y de su integración con otros enfoques más interactivos.

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Ventajas del #[em marketing] tradicional

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-secundario-s10").mb-5
          div(titulo="Alcance masivo")
            p.ms-5.ms-lg-0 El #[em marketing] tradicional permite llegar simultáneamente a un gran número de personas mediante medios como la televisión, la radio, la prensa y la publicidad exterior. Esta amplia cobertura facilita el reconocimiento de la marca y la difusión de campañas dirigidas a mercados de gran tamaño. 
          div(titulo="Control del mensaje")
            p.ms-5.ms-lg-0 La empresa mantiene el control sobre el contenido, el diseño y el momento en que se comunica el mensaje. Esto permite transmitir información coherente, fortalecer la identidad de la marca y asegurar que la comunicación refleje los objetivos de la organización. 
          div(titulo="Credibilidad")
            p.ms-5.ms-lg-0 Los medios tradicionales suelen generar una mayor percepción de confianza entre los consumidores, especialmente cuando la publicidad aparece en canales reconocidos como televisión, radio o prensa. Esta credibilidad contribuye a fortalecer la reputación de la marca y aumentar la confianza del público.
          div(titulo="Posicionamiento")
            p.ms-5.ms-lg-0 La repetición constante de los mensajes en medios masivos favorece que la marca permanezca en la mente de los consumidores. Esto fortalece su reconocimiento, facilita la recordación y contribuye a diferenciarla frente a la competencia.

      .col-10.col-md-6.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/10.png", alt="")
    
    .row.justify-content-center
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              h5.mb-1 Pregunta de aplicación
              p.mb-0 Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-4.mb-lg-0 ¿Cómo influye el alcance masivo en el posicionamiento de una marca?
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    Separador 
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.7 Teorías

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las teorías del #[em marketing] tradicional proporcionan el sustento conceptual que orienta la comprensión del comportamiento del mercado y la formulación de estrategias comerciales, estas teorías se han desarrollado a partir de enfoques económicos y administrativos, destacando la teoría de la oferta y la demanda, la teoría del comportamiento del consumidor y la teoría de la ventaja competitiva (Kotler & Keller, 2016).

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Principales teorías del #[em marketing] tradicional

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").p-4.tarjeta.tarjeta--blanca
          .row.justify-content-center.align-items-center.py-4
            .col-lg-6.mb-4.mb-lg-0
              h4 Oferta y demanda
              p.mb-0 Explica la relación dinámica entre la cantidad de productos que las empresas están dispuestas a ofrecer y la cantidad que los consumidores desean adquirir en el mercado. Esta interacción determina variables clave como el precio y el nivel de producción, configurando el equilibrio del mercado.

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema1/18.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Comportamiento del consumidor
              p.mb-0 Analiza los procesos mediante los cuales los individuos seleccionan, adquieren y utilizan productos o servicios para satisfacer sus necesidades. Este enfoque considera factores psicológicos, sociales y culturales que influyen en la toma de decisiones, aunque en el marketing tradicional se aborda principalmente desde una perspectiva racional y funcional.

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema1/19.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Ventaja competitiva
              p.mb-0 Se centra en la capacidad de una empresa para diferenciarse de sus competidores mediante atributos únicos que le permitan destacarse en el mercado. Estos atributos pueden estar relacionados con el precio, la calidad, la innovación o la eficiencia en la producción y distribución.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema1/20.png', alt='')


    p Estas teorías permiten interpretar cómo las empresas responden a las necesidades del mercado, por ejemplo, Toyota ha utilizado principios de ventaja competitiva para diferenciarse mediante calidad y eficiencia, alineando su oferta con las expectativas del consumidor. 
    p Las teorías del marketing tradicional permiten fundamentar la toma de decisiones comerciales. Sin embargo, su enfoque racional ha sido complementado con modelos que incorporan aspectos emocionales y experienciales del consumidor.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 Las teorías permiten comprender el mercado y fundamentar decisiones estratégicas.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador

    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.8 Principios

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-10
        p Los principios del marketing tradicional constituyen lineamientos fundamentales que orientan la planificación y ejecución de estrategias comerciales, entre los más relevantes se encuentran la orientación al cliente, la generación de valor, la segmentación del mercado y la coherencia en la comunicación, los cuales permiten estructurar acciones alineadas con los objetivos organizacionales (Armstrong & Kotler, 2017).
        p.mb-0 En la práctica, estos principios guían la forma en que las empresas interactúan con el mercado, por ejemplo, Nike aplica el principio de orientación al cliente al diseñar productos que responden a necesidades específicas de rendimiento y estilo, reforzando su posicionamiento.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Principios del #[em marketing] tradicional
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. Elaboración propia con base en Stanton et al. (2026).
        thead
          tr(style="background-color: #F0F6F9")
            th Principio
            th(colspan="2") Descripción		
            th(colspan="2") Ejemplo aplicado
        tbody
          tr
            td #[strong Orientación al cliente]
            td(colspan="2") Enfoque estratégico que prioriza la identificación, comprensión y satisfacción de las necesidades del consumidor, permitiendo diseñar productos y mensajes alineados con sus expectativas.
            td(colspan="2") Una empresa de telefonía analiza las necesidades de conectividad de jóvenes y crea planes con alto consumo de datos móviles.
          tr
            td #[strong Generación de valor]
            td(colspan="2") Capacidad de la empresa para ofrecer beneficios funcionales y simbólicos que superen las expectativas del cliente, influyendo en su percepción y decisión de compra.
            td(colspan="2") Una marca de electrodomésticos ofrece garantía extendida y eficiencia energética como valor agregado frente a la competencia.
          tr
            td #[strong Segmentación]
            td(colspan="2") Proceso de dividir el mercado en grupos homogéneos de consumidores con características similares, facilitando el diseño de estrategias diferenciadas.
            td(colspan="2") Una marca de ropa crea líneas específicas para jóvenes, adultos y niños, adaptando diseño y comunicación a cada grupo.
          tr
            td #[strong Coherencia]
            td(colspan="2") Consistencia entre el mensaje, los canales y la propuesta de valor de la marca, garantizando que la comunicación sea clara y alineada en todos los puntos de contacto.
            td(colspan="2") Una empresa mantiene el mismo tono y mensaje en televisión, radio y punto de venta, reforzando su identidad de marca.

    p.mb-4 Desde un enfoque estratégico, los principios del marketing tradicional permiten garantizar consistencia y efectividad en la gestión comercial, no obstante, su aplicación actual se complementa con enfoques centrados en la experiencia del cliente.        

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              h5.mb-1 Pregunta de aplicación
              p.mb-0 lice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-4.mb-lg-0 ¿Por qué es importante la segmentación en el marketing tradicional?
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.bg-img.bg-img--4.rounded-4
          .row.align-items-center
            .col-lg-2
              figure
                img.mb-4.mb-lg-0.iw-108(src="@/assets/curso/tema1/12.svg", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-1 Segmentación, mercado meta y posicionamiento.
              p.mb-4.mb-lg-0 Lo invitamos a consultar el anexo Kotler, P., & Armstrong, G. (2017). Segmentación, mercado meta y posicionamiento para ampliar sus conocimientos sobre la segmentación de mercados, los mercados meta y posicionamiento.
            .col-4.col-lg-2
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Segmentacion-mercado-meta-posicionamiento.pdf')" target="_blank")
                span Ver Anexo
                i.fas.fa-play-circle

    Separador

    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.9 Leyes

    p.mb-4 Las leyes del #[em marketing] tradicional hacen referencia a principios ampliamente aceptados que orientan la construcción y posicionamiento de las marcas en la mente del consumidor, entre las más reconocidas se encuentran las leyes propuestas por Al Ries y Jack Trout, como la ley del liderazgo, la ley de la categoría y la ley de la percepción, las cuales explican cómo se establecen las ventajas competitivas en el mercado (Ries & Trout, 2001).

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Leyes del #[em marketing] tradicional


    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema1/13.svg', alt='')
          h5.text-center Liderazgo
          p.text-center.mb-0 Ser el primero en la mente del consumidor permite posicionarse con ventaja, generando recordación y preferencia frente a competidores directos.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema1/14.svg', alt='')
          h5.text-center Categoría
          p.text-center.mb-0 Crear una nueva categoría permite diferenciarse en el mercado, facilitando el posicionamiento y reduciendo la competencia directa en la mente del consumidor.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema1/15.svg', alt='')
          h5.text-center Percepción
          p.text-center.mb-0 Posicionarse en la mente del cliente implica construir una imagen clara, coherente y diferenciada que influya en su decisión de compra.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema1/16.svg', alt='')
          h5.text-center Enfoque
          p.text-center.mb-0 Concentrarse en un atributo permite simplificar el mensaje, fortalecer la recordación y posicionar la marca de manera clara en el consumidor.
            
    p En el contexto aplicado, estas leyes permiten comprender cómo las marcas logran posicionarse de manera efectiva. Por ejemplo, Apple ha aplicado la ley de la percepción al construir una imagen asociada a innovación y exclusividad, más allá de las características técnicas de sus productos.
    p.mb-4 Desde una perspectiva estratégica, estas leyes orientan la toma de decisiones enfocadas en la diferenciación y el posicionamiento. Su aplicación permite a las empresas identificar oportunidades en el mercado y construir propuestas de valor sostenibles en el tiempo.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Frase de reflexión
              p.mb-0 La verdadera coherencia no está en lo que se comunica, sino en la congruencia entre lo que se piensa, se dice y se hace.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
