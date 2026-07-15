<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Emociones

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block Las emociones constituyen un elemento central en el marketing experiencial, influyendo directamente en la percepción y decisiones del consumidor. 
        p.d-block.mb-0 Este capítulo permite comprender su concepto, tipos y tratamiento dentro de las estrategias de #[em marketing], se abordará desde una perspectiva conceptual y aplicada, integrando ejemplos empresariales que evidencian cómo la gestión de emociones fortalece la experiencia del cliente, la conexión con la marca y el posicionamiento en mercados altamente competitivos actuales.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.justify-content-center.align-items-center
      .col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-10
        p Las emociones se definen como respuestas afectivas que experimenta el consumidor frente a estímulos internos o externos, influyendo en su percepción y comportamiento, en el contexto del marketing, las emociones son determinantes en la construcción de experiencias y en la toma de decisiones, ya que conectan al consumidor con la marca a un nivel más profundo (Bagozzi, Gopinath & Nyer, 1999).
        p.mb-0 Las emociones permiten a las marcas generar vínculos significativos con sus clientes. Por ejemplo, Coca-Cola ha desarrollado campañas centradas en la felicidad y la conexión social, logrando posicionarse emocionalmente en diferentes mercados; comprender las emociones permite diseñar experiencias que influyan en la percepción del consumidor, fortaleciendo la recordación y la fidelización hacia la marca.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-8
        p Los tipos de emociones en marketing se clasifican en positivas y negativas, cada una con características específicas que influyen en el comportamiento del consumidor. Las emociones positivas, como la alegría y la confianza, favorecen la compra y la fidelización, mientras que las negativas, como la frustración o el miedo, pueden generar rechazo o evitación.
        .p-4.bg-img.rounded-4
          p.mb-0 Las marcas utilizan emociones positivas para fortalecer su posicionamiento. Por ejemplo, Disney diseña experiencias orientadas a generar alegría y asombro, consolidando una conexión emocional con sus usuarios; comprender los tipos de emociones permite diseñar experiencias adecuadas al contexto y al público objetivo, optimizando la efectividad de las estrategias de #[em marketing].
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/3.png", alt="")
    
    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Clave estratégica. 
              p.mb-4.mb-lg-0 Gestionar emociones permite influir en la percepción y decisión del consumidor.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Tratamientos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.bg-img.rounded-4.mb-3.bg-img--2
          p.mb-0 Los tratamientos de las emociones en marketing hacen referencia a las estrategias utilizadas por las marcas para gestionar, provocar o modular las respuestas emocionales del consumidor durante la interacción con la experiencia; estos tratamientos buscan generar emociones positivas, mitigar emociones negativas y construir una relación emocional coherente con la identidad de la marca.
        p Los tratamientos emocionales se evidencian en el diseño de experiencias que buscan provocar sensaciones específicas. Por ejemplo, Apple gestiona emociones como la sorpresa y la satisfacción mediante lanzamientos de productos cuidadosamente diseñados, generando expectativa y conexión con sus usuarios.
        p.mb-0 El tratamiento adecuado de las emociones permite influir en la percepción del consumidor, fortalecer la experiencia y aumentar la probabilidad de compra, esto implica identificar qué emociones se desean generar y cómo integrarlas en los puntos de contacto con la marca.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 8.
      span Tratamientos de las emociones en marketing
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #DDFAF1")
            th Tratamientos
            th(colspan="2") Descripción		
            th(colspan="2") Ejemplo aplicado
        tbody
          tr(style="background-color: #F6F6F6")
            td Generación
            td(colspan="2") Proceso mediante el cual la marca diseña experiencias orientadas a provocar emociones positivas en el consumidor, como alegría, confianza o satisfacción, fortaleciendo la conexión emocional y la percepción favorable hacia la marca.	
            td(colspan="2") Una marca crea campañas publicitarias que evocan momentos familiares para generar sentimientos de felicidad y cercanía con el consumidor.
          tr
            td Regulación 
            td(colspan="2") Estrategia enfocada en gestionar o mitigar emociones negativas que puedan surgir durante la experiencia del cliente, garantizando una percepción positiva y evitando impactos desfavorables en la relación con la marca. 
            td(colspan="2") Un servicio de atención al cliente resuelve rápidamente una queja, transformando la frustración del usuario en una experiencia positiva. 
          tr(style="background-color: #F6F6F6")
            td Intensificación
            td(colspan="2") Acción orientada a potenciar el impacto emocional de la experiencia, reforzando las sensaciones positivas mediante estímulos que aumenten la recordación y el vínculo con la marca. 
            td(colspan="2") Un evento de marca utiliza música, iluminación y narrativa para amplificar la emoción del público durante la experiencia. 
          tr
            td Coherencia
            td(colspan="2") Alineación entre las emociones que la marca busca generar y su identidad, asegurando que todas las experiencias sean consistentes con sus valores y mensaje. 
            td(colspan="2") Una marca que promueve tranquilidad mantiene un ambiente relajado y comunicación calmada en todos sus puntos de contacto. 

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-img.bg-img--1.rounded-4.bg-acento-a5
          .row.justify-content-center.align-items-center
            .col-sm-1.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.iw-98(src="@/assets/curso/common/like-orange.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-0 Frase de reflexión
              p.mb-4.mb-lg-0 La forma en que se gestionan las emociones hacia otros refleja el nivel de integridad y empatía personal.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/common/sin.svg", alt="" data-aos="zoom-in-down")

</template>

<script>
export default {
  name: 'Tema5',
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
