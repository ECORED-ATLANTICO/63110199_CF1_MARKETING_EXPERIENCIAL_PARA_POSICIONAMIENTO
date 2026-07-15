<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Marketing] experiencial

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El #[em marketing] experiencial representa una evolución del #[em marketing] tradicional, centrada en la generación de experiencias memorables que conecten emocionalmente con el consumidor.
        p Este capítulo permite comprender cómo las marcas diseñan experiencias que impactan la percepción y el comportamiento del cliente, su abordaje se realizará desde una perspectiva conceptual y estratégica, incorporando ejemplos y aplicaciones que evidencian la importancia de la experiencia como elemento clave en el posicionamiento.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Definición

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El #[em marketing] experiencial se define como un enfoque estratégico que busca generar experiencias significativas y memorables en el consumidor, integrando estímulos emocionales, sensoriales y cognitivos en la interacción con la marca, este modelo prioriza la vivencia del cliente como elemento central del posicionamiento, superando la lógica funcional del producto (Schmitt, 1999).

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .d-none.d-lg-block.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/9.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 En el ámbito aplicado, el #[em marketing] experiencial permite a las marcas diferenciarse mediante la creación de momentos únicos. Por ejemplo, Starbucks ha construido su propuesta de valor a partir de la experiencia en tienda, combinando ambiente, atención y personalización, este enfoque fortalece la conexión emocional con el consumidor, incrementando la recordación y la fidelización, su implementación requiere coherencia entre todos los puntos de contacto con la marca.
        
    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.bg-img.bg-img--4.rounded-4
          .row.align-items-center
            .col-lg-2
              figure
                img.mb-4.mb-lg-0.iw-108(src="@/assets/curso/common/play.svg", alt="")
            .col-lg-8
              h5.mb-1 ¿Qué es #[em marketing] experiencial?
              p.mb-4.mb-lg-0 Lo invitamos a consultar el siguiente recurso educativo para fortalecer su comprensión del #[em marketing] experiencial. Este presenta el concepto de experiencia de marca y explica cómo influye en la percepción del consumidor.
            .col-4.col-lg-2
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=KZiaKCJybfY" target="_blank")
                span Ver Video
                i.fas.fa-play-circle

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Características

    p.mb-4 El #[em marketing] experiencial se caracteriza por su enfoque en el cliente, la integración de estímulos sensoriales y la generación de experiencias personalizadas. A diferencia del #[em marketing] tradicional, este modelo promueve la interacción activa del consumidor, convirtiéndolo en protagonista de la experiencia de marca.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-10
        .p-4.bg-img.bg-img--2.rounded-4
          p.mb-0 Entre sus principales características se encuentran la multisensorialidad, la emocionalidad, la participación del cliente y la creación de valor simbólico. Por ejemplo, Disney diseña experiencias que combinan narrativa, ambientación y servicio, logrando una conexión profunda con sus visitantes, estas características permiten construir relaciones duraderas con los consumidores, fortaleciendo el posicionamiento y la fidelización.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Características del #[em marketing] experiencial
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. Elaboración propia con base en Pine y Gilmore, (2026).
        thead
          tr(style="background-color: #DDFAF1")
            th Característica
            th(colspan="2") Descripción		
            th(colspan="2") Ejemplo aplicado
        tbody
          tr(style="background-color: #F6F6F6")
            td Multisensorialidad
            td(colspan="2") Integración estratégica de estímulos visuales, auditivos, olfativos, táctiles y gustativos que permiten generar una experiencia más completa, influyendo en la percepción y recordación del consumidor.
            td(colspan="2") Una tienda de café utiliza aroma a café recién molido, música suave y decoración cálida para generar una experiencia sensorial envolvente.
          tr
            td Emocionalidad
            td(colspan="2") Capacidad de generar conexión afectiva entre el consumidor y la marca, utilizando experiencias que evocan sentimientos positivos y fortalecen la relación a largo plazo.
            td(colspan="2") Una campaña publicitaria muestra momentos familiares para asociar la marca con felicidad y cercanía emocional.
          tr(style="background-color: #F6F6F6")
            td Participacións 
            td(colspan="2") Involucramiento activo del cliente en la experiencia, permitiendo que interactúe con la marca y se convierta en parte del proceso de consumo.
            td(colspan="2") Una marca de tecnología permite a los clientes probar productos en tienda antes de comprarlos, generando interacción directa.
          tr
            td Personalización
            td(colspan="2") Adaptación de la experiencia a las preferencias, necesidades y comportamientos del cliente, generando mayor relevancia y valor percibido.
            td(colspan="2") Una plataforma digital recomienda productos según el historial de navegación y compra del usuario, ajustando la experiencia individualmente.
  
    .row.justify-content-center
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              h5.mb-1 Pregunta de aplicación
              p.mb-0 Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-4.mb-lg-0 ¿Qué rol juega la emoción en el #[em marketing] experiencial?
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Componentes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-0 Los componentes del #[em marketing] experiencial corresponden a los elementos estructurales que permiten diseñar experiencias significativas para el consumidor. Estos se orientan a integrar dimensiones sensoriales, emocionales, cognitivas y relacionales, con el propósito de generar conexiones profundas con la marca. A diferencia del #[em marketing] tradicional, estos componentes priorizan la vivencia del cliente como eje central de la estrategia (Schmitt, 1999).
        .p-4.bg-img.rounded-4
          p.mb-0 Los componentes se articulan en torno a módulos experienciales como sentir, pensar, actuar y relacionar. Por ejemplo, IKEA diseña sus tiendas para que los clientes interactúen con los productos, vivan espacios simulados y construyan una experiencia completa antes de la compra. Estos componentes permiten estructurar experiencias coherentes en todos los puntos de contacto, su adecuada integración fortalece el posicionamiento de la marca y genera diferenciación sostenible en el mercado.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 Intervenir en cada etapa mejora la experiencia y aumenta la probabilidad de compra.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Elementos

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/5.png", alt="").z-2
      
      .row.justify-content-center.z-2
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p Los elementos del #[em marketing] experiencial hacen referencia a los recursos y factores que permiten materializar la experiencia del cliente en cada punto de contacto con la marca, estos incluyen el entorno físico, la interacción con el personal, la narrativa de la marca y los estímulos sensoriales que configuran la percepción del consumidor, estos elementos se combinan para crear experiencias coherentes y memorables. 
            p.mb-0 Por ejemplo, Apple integra diseño minimalista, atención personalizada y ambientación en sus tiendas, generando una experiencia diferenciadora que refuerza su posicionamiento estos elementos permiten operacionalizar los componentes del marketing experiencial, asegurando que la experiencia sea consistente y alineada con la identidad de la marca.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Elementos del #[em marketing] experiencial

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.bg-primario-p5.p-4(titulo="Entorno físico")
            p.mb-0 Espacio donde ocurre la experiencia, diseñado estratégicamente para influir en percepciones, emociones y comportamiento del consumidor durante la interacción con la marca. 
          .tarjeta.bg-primario-p5.p-4(titulo="Personal")
            p.mb-0 Interacción humana que representa la marca, influyendo directamente en la experiencia del cliente mediante actitud, comunicación y calidad del servicio ofrecido. 
          .tarjeta.bg-primario-p5.p-4(titulo="Narrativa")
            p.mb-0 Historia de la marca construida estratégicamente para generar significado, conexión emocional y coherencia en la experiencia del consumidor en todos los puntos. 
          .tarjeta.bg-primario-p5.p-4(titulo="Estímulos")
            p.mb-0 Sensaciones generadas a través de elementos sensoriales que influyen en la percepción, emociones y comportamiento del consumidor durante la experiencia con marca. 
        
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Decálogo

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El decálogo del #[em marketing] experiencial reúne un conjunto de orientaciones estratégicas que guían la creación de experiencias significativas para el consumidor, estas directrices buscan asegurar que las acciones de la marca estén centradas en el cliente, integrando aspectos emocionales, sensoriales y relacionales que fortalezcan la conexión con el consumidor y su percepción de valor (Schmitt, 1999).

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .d-none.d-lg-block.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/8.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p El decálogo implica diseñar experiencias coherentes, memorables y alineadas con la identidad de la marca. Por ejemplo, Red Bull ha construido su posicionamiento a partir de experiencias asociadas a deportes extremos, generando vivencias que trascienden el producto.
        p.mb-0 Desde un enfoque estratégico, el decálogo permite estructurar acciones consistentes en todos los puntos de contacto, garantizando que la experiencia sea relevante y diferenciadora en el mercado.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      span Decálogo del #[em marketing] experiencial
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026). 
        thead
          tr(style="background-color: #DDFAF1")
            th Principio
            th(colspan="2") Descripción		
            th(colspan="2") Ejemplo aplicado
        tbody
          tr(style="background-color: #F6F6F6")
            td Centrado en el cliente 
            td(colspan="2") Enfoque estratégico que prioriza las necesidades, expectativas y vivencias del consumidor, diseñando experiencias alineadas con su percepción y comportamiento durante la interacción. 
            td(colspan="2") Una tienda adapta su servicio y ambientación según el perfil de cliente que la visita. 
          tr
            td Emocionalidad 
            td(colspan="2") Capacidad de generar conexiones afectivas mediante experiencias que evocan sentimientos, fortaleciendo la relación con la marca y su recordación en el consumidor. 
            td(colspan="2") Una campaña muestra historias reales que generan empatía y conexión emocional con la marca. 
          tr(style="background-color: #F6F6F6")
            td Coherencia 
            td(colspan="2") Alineación entre todos los puntos de contacto, garantizando que la experiencia, el mensaje y la identidad de la marca sean consistentes. 
            td(colspan="2") Una marca mantiene el mismo estilo visual y tono en tienda, redes sociales y publicidad. 
          tr
            td Memorabilidad 
            td(colspan="2") Diseño de experiencias que generan impacto duradero en el consumidor, facilitando la recordación y diferenciación frente a la competencia en el mercado. 
            td(colspan="2") Un evento de marca ofrece una experiencia única que los clientes recuerdan y comparten. 
          tr(style="background-color: #F6F6F6")
            td Interacción 
            td(colspan="2") Participación activa del cliente en la experiencia, permitiendo su involucramiento directo y fortaleciendo la relación con la marca. 
            td(colspan="2") Una marca permite personalizar productos en tiempo real dentro del punto de venta. 
          tr
            td Sensorialidad 
            td(colspan="2") Uso estratégico de estímulos sensoriales para influir en la percepción del consumidor, generando experiencias más completas y significativas. 
            td(colspan="2") Un restaurante utiliza música, aromas e iluminación para mejorar la experiencia del cliente. 
          tr(style="background-color: #F6F6F6")
            td Autenticidad 
            td(colspan="2") Coherencia entre lo que la marca comunica y lo que realmente ofrece, generando confianza y credibilidad en la experiencia del cliente. 
            td(colspan="2") Una marca sostenible demuestra prácticas reales alineadas con su discurso ambiental. 
          tr
            td Innovación 
            td(colspan="2") Aplicación de ideas creativas en el diseño de experiencias, permitiendo diferenciarse y generar mayor impacto en el consumidor. 
            td(colspan="2") Una tienda incorpora realidad aumentada para mejorar la experiencia de compra. 
          tr(style="background-color: #F6F6F6")
            td Relación 
            td(colspan="2") Construcción de vínculos duraderos con el cliente mediante experiencias significativas que fortalecen la fidelización y el compromiso con la marca. 
            td(colspan="2") Una empresa mantiene contacto constante con clientes a través de experiencias personalizadas. 
          tr
            td Valor 
            td(colspan="2") Generación de beneficios percibidos por el cliente a partir de la experiencia, superando sus expectativas y fortaleciendo su decisión de compra. 
            td(colspan="2") Un servicio incluye beneficios adicionales que mejoran la experiencia del cliente frente a la competencia. 

    .row.justify-content-center
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              h5.mb-1 Pregunta de aplicación
              p.mb-0 Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje. 
              p.mb-4.mb-lg-0 ¿Cómo puede una empresa aplicar el principio de memorabilidad en su estrategia? 
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Caso de estudio

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-10
        p Las aplicaciones del marketing experiencial se enfocan en la implementación de estrategias que buscan generar experiencias significativas en diferentes contextos de interacción con el consumidor, estas aplicaciones abarcan eventos, puntos de venta, entornos digitales y acciones de marca que permiten involucrar activamente al cliente en la experiencia. 
        p.mb-0 En el ámbito empresarial, estas aplicaciones se evidencian en activaciones de marca, experiencias inmersivas y estrategias de engagement, por ejemplo, Nike ha desarrollado espacios interactivos donde los consumidores pueden probar productos y vivir experiencias alineadas con el rendimiento deportivo; las aplicaciones del marketing experiencial permiten generar diferenciación, fortalecer el posicionamiento y construir relaciones duraderas con los clientes.  
        
    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Aplicaciones del #[em marketing] experiencial
  
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-secundario-s10").mb-5
          div(titulo="Eventos en vivo")
            p.ms-5.ms-lg-0 Los eventos en vivo crean experiencias memorables mediante la interacción directa entre la marca y los consumidores. Estos espacios fortalecen el vínculo emocional, promueven la participación activa y generan percepciones positivas que favorecen el posicionamiento y la recordación de la marca. 
          div(titulo="Activaciones de marca")
            p.ms-5.ms-lg-0 Las activaciones de marca involucran al consumidor mediante experiencias creativas e interactivas que despiertan emociones y fomentan la participación. Su propósito es acercar la marca al público, fortalecer el reconocimiento y generar conexiones significativas que impulsen la preferencia del cliente. 
          div(titulo="Espacios físicos")
            p.ms-5.ms-lg-0 Los espacios físicos integran el ambiente, el servicio y el diseño para ofrecer experiencias coherentes con la identidad de la marca. Cada interacción influye en la percepción del consumidor, fortalece la confianza y contribuye a construir relaciones duraderas con los clientes. 
          div(titulo="Entornos digitales ")
            p.ms-5.ms-lg-0 Los entornos digitales permiten crear experiencias personalizadas e interactivas a través de plataformas, redes sociales y aplicaciones. Estas herramientas complementan las experiencias presenciales, favorecen la participación continua y fortalecen la relación entre la marca y el consumidor. 

      .col-10.col-md-6.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/10.png", alt="")

    p.mb-4 Aunque se desarrollan en contextos diferentes, estas aplicaciones forman parte de una estrategia integral de marketing experiencial orientada a generar experiencias memorables, fortalecer la percepción de la marca y construir relaciones duraderas con los consumidores.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 Las aplicaciones deben generar interacción activa y coherente con la marca. 
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 Ventajas

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .p-4.bg-img.rounded-4.bg-img--6.mb-3
          p.mb-0.pe-lg-5 Las ventajas del marketing experiencial radican en su capacidad para generar conexiones emocionales profundas entre la marca y el consumidor, lo que incrementa la recordación, la fidelización y el posicionamiento, a diferencia del marketing tradicional, este enfoque permite construir relaciones significativas basadas en experiencias memorables que trascienden la funcionalidad del producto.
        p.mb-0 Estas ventajas se reflejan en mayor engagement, diferenciación competitiva y fortalecimiento de la identidad de marca. Desde una perspectiva estratégica, el marketing experiencial permite a las organizaciones adaptarse a consumidores más exigentes, ofreciendo valor agregado a través de la experiencia, esto favorece la lealtad del cliente y la construcción de comunidades alrededor de la marca.

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              h5.mb-1 Pregunta de aplicación
              p.mb-0 Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-4.mb-lg-0 ¿Cómo influye la experiencia en la fidelización del cliente?
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    Separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.8 Teorías

    p.z-2.mb-4 Las teorías del marketing experiencial se fundamentan en modelos que integran dimensiones sensoriales, emocionales y cognitivas del consumidor, entre las más relevantes se encuentra la teoría de la economía de la experiencia propuesta por Pine y Gilmore, así como los módulos estratégicos experienciales de Schmitt, los cuales explican cómo las experiencias influyen en la percepción y comportamiento del cliente (Schmitt, 1999; Pine & Gilmore, 1998).

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, estas teorías permiten estructurar experiencias que impacten de manera integral al consumidor, por ejemplo, Lego ha desarrollado espacios interactivos donde los usuarios participan activamente, combinando aprendizaje, emoción y creatividad. Desde un enfoque estratégico, estas teorías facilitan la comprensión del consumidor como un ser integral, cuyas decisiones están influenciadas por factores más allá de lo racional, esto permite diseñar estrategias más efectivas y diferenciadoras.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5.
      span Teorías del #[em marketing] experiencial
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026). 
        thead
          tr(style="background-color: #DDFAF1")
            th Teoría
            th(colspan="2") Descripción		
            th(colspan="2") Ejemplo aplicado
        tbody
          tr(style="background-color: #F6F6F6")
            td Economía de la experiencia 
            td(colspan="2") Enfoque que plantea que el valor se genera a partir de experiencias memorables, donde las empresas diseñan vivencias que van más allá del producto o servicio. 
            td(colspan="2") Un parque temático crea experiencias inmersivas que hacen que el cliente valore la vivencia más que el servicio básico ofrecido. 
          tr
            td Módulos experienciales 
            td(colspan="2") Modelo que integra dimensiones como sentir, pensar, actuar y relacionar, permitiendo diseñar experiencias que impactan al consumidor de forma integral. 
            td(colspan="2") Una tienda combina estímulos sensoriales, interacción con productos y actividades para involucrar emocional y cognitivamente al cliente. 
          tr(style="background-color: #F6F6F6")
            td Experiencia del cliente 
            td(colspan="2") Enfoque que analiza la percepción global del consumidor en todos los puntos de contacto, integrando emociones, interacción y evaluación del servicio recibido. 
            td(colspan="2") Una empresa asegura coherencia en atención, producto y comunicación para garantizar una experiencia positiva en cada interacción del cliente. 

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 Las teorías permiten diseñar experiencias integrales y estratégicas.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.9 Principios

    p.z-2.mb-4 Los principios del marketing experiencial constituyen lineamientos estratégicos que orientan el diseño y ejecución de experiencias centradas en el cliente, estos principios incluyen la orientación a la experiencia, la coherencia en los puntos de contacto, la integración de estímulos sensoriales y la generación de valor emocional, permitiendo construir relaciones significativas con el consumidor.
            
    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Principios del #[em marketing] experiencial

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").p-4.tarjeta.tarjeta--blanca
          .row.justify-content-center.align-items-center.py-4
            .col-lg-6.mb-4.mb-lg-0
              h4 Orientación a la experiencia
              p.mb-0 Este principio implica diseñar todas las acciones de #[em marketing] teniendo como eje central la vivencia del cliente, más allá del producto o servicio ofrecido. La organización debe comprender cómo el consumidor percibe, siente e interactúa en cada momento, asegurando que cada contacto genere una experiencia significativa. Su aplicación estratégica permite diferenciar la marca al enfocarse en lo que el cliente vive, no solo en lo que compra.
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/tema2/13.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Coherencia en los puntos de contacto
              p.mb-0 Hace referencia a la consistencia entre todos los momentos de interacción del cliente con la marca, incluyendo canales físicos, digitales y humanos. Cada punto de contacto debe transmitir el mismo mensaje, valores e identidad, evitando contradicciones que afecten la percepción del consumidor. Estratégicamente, la coherencia fortalece la confianza, mejora la experiencia global y contribuye al posicionamiento claro y sólido de la marca. 
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/tema2/14.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Integración de estímulos sensoriales
              p.mb-0 Este principio se basa en la incorporación planificada de estímulos que activen los sentidos del consumidor, como elementos visuales, auditivos, olfativos, táctiles o gustativos. Su objetivo es enriquecer la experiencia y generar mayor impacto emocional y recordación. Desde una perspectiva estratégica, la integración sensorial permite intensificar la percepción del cliente y diferenciar la experiencia frente a otras marcas en el mercado. 
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/tema2/15.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Generación de valor emocional 
              p.mb-0 Consiste en crear experiencias que no solo satisfacen necesidades funcionales, sino que también generan emociones positivas y significativas en el consumidor. Este valor emocional influye en la percepción de la marca, la fidelización y la decisión de compra. Estratégicamente, permite construir relaciones duraderas, ya que el cliente no solo recuerda lo que adquirió, sino cómo se sintió durante la experiencia. 
            .col-10.col-lg-4
              figure
                img(src='@/assets/curso/tema2/16.png', alt='')

    p.z-2.mb-4 Estos principios guían la forma en que las marcas estructuran sus experiencias y permiten garantizar consistencia en la experiencia del cliente, fortaleciendo el posicionamiento y la fidelización, su aplicación exige una visión integral de la marca.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-0 La coherencia en la experiencia fortalece la percepción de la marca. 
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador
    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.10 Leyes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/17.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Las leyes del #[em marketing] experiencial hacen referencia a principios estratégicos que orientan la creación de experiencias efectivas y diferenciadoras en el mercado, estas leyes se relacionan con la importancia de la percepción, la autenticidad, la emoción y la participación del cliente, como elementos clave en la construcción del posicionamiento de marca.
        .p-4.bg-img.rounded-4
          p.mb-0 En la práctica, estas leyes permiten comprender cómo las experiencias impactan en la mente del consumidor, por ejemplo, Coca-Cola ha desarrollado campañas experienciales que apelan a la emoción y la conexión social, fortaleciendo su posicionamiento global; estas leyes orientan la creación de experiencias auténticas y memorables, permitiendo a las marcas diferenciarse en entornos altamente competitivos.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema2/18.svg', alt='')
          h5.text-center Percepción
          p.text-center.mb-0 La experiencia define la marca en la mente del consumidor, construyendo significados que influyen directamente en su recordación y decisión final.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema2/19.svg', alt='')
          h5.text-center Emoción
          p.text-center.mb-0 La conexión afectiva con la marca genera vínculos duraderos, influyendo en la percepción del consumidor y fortaleciendo la fidelización en el tiempo.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema2/20.svg', alt='')
          h5.text-center Autenticidad
          p.text-center.mb-0 La coherencia con la identidad de marca garantiza credibilidad, alineando acciones, mensajes y experiencias para generar confianza en el consumidor actual.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema2/21.svg', alt='')
          h5.text-center Participación
          p.text-center.mb-0 El involucramiento del cliente en la experiencia permite generar interacción activa, fortaleciendo la conexión con la marca y aumentando su recordación significativa.

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5.py-xl-0
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Frase de reflexión
              p.mb-0 La verdadera experiencia que se brinda a otros es reflejo de la integridad con la que se actúa.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-audio.rounded-4
          .row.align-items-center
            .col-sm-4
              figure.pt-3
                img.w-195(src="@/assets/curso/tema6/mic.png", alt="")
            .col-sm-8.col-lg-8.p-4
              p Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer sus conocimientos en los conceptos y aplicaciones del #[em marketing] experiencial.
              TarjetaAudio.mb-3(
                texto="“La idea de negocio como base del desarrollo empresarial”"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
