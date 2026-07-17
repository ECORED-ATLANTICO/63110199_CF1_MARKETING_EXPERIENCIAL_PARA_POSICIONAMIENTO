<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Categorías de clientes

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block Las categorías de clientes permiten segmentar y comprender a los consumidores según sus características y comportamientos, facilitando el diseño de estrategias de #[em marketing] más efectivas.
        p.d-block.mb-0 Este capítulo aborda la clasificación y tipología de clientes como base para la personalización de experiencias, su desarrollo se realizará desde un enfoque conceptual y aplicado, integrando ejemplos empresariales que evidencian cómo el conocimiento del cliente fortalece la toma de decisiones y el posicionamiento de la marca.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Clasificación

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .d-none.d-lg-block.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p La clasificación de clientes consiste en agrupar a los consumidores según criterios específicos como comportamiento, frecuencia de compra, necesidades y nivel de interacción con la marca, esta clasificación permite identificar patrones que facilitan la toma de decisiones estratégicas orientadas al diseño de experiencias personalizadas.
        p.mb-0 Las empresas clasifican a sus clientes en categorías como frecuentes, ocasionales y potenciales. Por ejemplo, Amazon utiliza datos de comportamiento para segmentar clientes y ofrecer recomendaciones personalizadas, esta clasificación permite optimizar recursos y diseñar estrategias diferenciadas, alineadas con las características de cada grupo de clientes.

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h5.mb-0.pe-4.ps-2 Clasificación de clientes

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema4/3.svg', alt='')
          h5.text-center Frecuente
          p.text-center.mb-0 Cliente que compra regularmente, generando ingresos constantes y relación estable.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema4/4.svg', alt='')
          h5.text-center Ocasional
          p.text-center.mb-0 Cliente que compra esporádicamente según necesidades o estímulos específicos del mercado.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema4/5.svg', alt='')
          h5.text-center Potencial
          p.text-center.mb-0 Individuo que aún no compra, pero puede convertirse en cliente.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .rounded-4.p-4.bg-img.bg-img--5.h-100
          img.iw-124.mb-4(src='@/assets/curso/tema4/6.svg', alt='')
          h5.text-center Leal
          p.text-center.mb-0 Cliente fiel que repite compras y recomienda la marca activamente.

    .row.justify-content-center
      .col-xl-10
        .bg-img.bg-img--3.rounded-5.bg-acento-a5.p-4.py-xl-0
          .row.align-items-center
            .col-lg-8
              h5.mb-1 Pregunta de aplicación
              p.mb-0 Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-4.mb-lg-0 ¿Cómo puede una empresa utilizar la clasificación de clientes para mejorar sus estrategias? 
            .col-lg-4
              figure
                img.iw-262(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipología

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema4/3.png", alt="").z-2
      
      .row.justify-content-center.z-2
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow.mb-4
            p.mb-0 La tipología de clientes se refiere a la categorización de los consumidores según sus características psicológicas, comportamientos de compra y relación con la marca, esta tipología permite comprender de manera más profunda las motivaciones y expectativas del cliente, facilitando el diseño de experiencias más relevantes (Solomon, 2018).

    p Entre las tipologías más comunes se encuentran clientes racionales, emocionales, impulsivos y analíticos, cada uno con características específicas que influyen en su comportamiento. Por ejemplo, Zara adapta sus estrategias para atender tanto a clientes impulsivos como racionales mediante diseño y rotación de productos.
    p.mb-4.mb-lg-5 La tipología permite diseñar experiencias diferenciadas que respondan a las necesidades específicas de cada tipo de cliente, fortaleciendo la conexión con la marca.

    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.bg-img.bg-img--4.rounded-4
          .row.align-items-center
            .col-lg-2
              figure
                img.mb-4.mb-lg-0.iw-108(src="@/assets/curso/common/play.svg", alt="")
            .col-lg-8
              h5.mb-1 8 tipos de clientes y cómo atenderlos
              p.mb-4.mb-lg-0 Lo invitamos a consultar el siguiente recurso educativo para profundizar en la temática abordada. En este se presenta una clasificación de los diferentes tipos de clientes que pueden encontrarse en los procesos de atención, describiendo sus comportamientos, actitudes y formas de interacción.
            .col-4.col-lg-2
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Ypc9fCF4A3M" target="_blank")
                span Enlace
                i.fas.fa-play-circle

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Frase de reflexión
              p.mb-4.mb-lg-0 Entender a los demás con respeto y coherencia es reflejo de una integridad personal auténtica.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")





















</template>

<script>
export default {
  name: 'Tema4',
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
