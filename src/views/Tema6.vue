<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tema 6

    .row.mb-4.mb-lg-5
    .col-lg-11
      p.mb-0 Las ventajas de comprender las formas de decisión de compra impulsiva y racional radican en la capacidad de las organizaciones para diseñar estrategias más efectivas, alineadas con el comportamiento del consumidor, este conocimiento permite identificar cómo influyen los factores emocionales y racionales en la elección del cliente, optimizando la experiencia y el posicionamiento de la marca.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 10.
      span Ventajas de comprender la decisión de compra
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
    table
      caption Nota. SENA, (2026).
      thead
        tr(style="background-color: #F0F6F9")
          th Ventaja
          th(colspan="2") Descripción		
          th(colspan="2") Ejemplo aplicado
      tbody
        tr
          td Segmentación
          td(colspan="2") Comprender la decisión de compra permite identificar distintos perfiles de consumidores según su comportamiento, facilitando el diseño de estrategias diferenciadas y más ajustadas a sus necesidades.
          td(colspan="2") Una empresa segmenta clientes impulsivos y racionales, aplicando promociones rápidas para unos y comparativos técnicos para otros.
        tr
          td Personalización
          td(colspan="2") Comprender la decisión de compra permite identificar distintos perfiles de consumidores según su comportamiento, facilitando el diseño de estrategias diferenciadas y más ajustadas a sus necesidades.
          td(colspan="2") Una empresa segmenta clientes impulsivos y racionales, aplicando promociones rápidas para unos y comparativos técnicos para otros.

    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.bg-img.bg-img--4.rounded-4
          .row.align-items-center
            .col-lg-2
              figure
                img.mb-4.mb-lg-0.iw-108(src="@/assets/curso/tema1/12.svg", alt="" data-aos="zoom-in-down")
            .col-lg-8
              h5.mb-1 Comportamiento del consumidor
              p.mb-4.mb-lg-0 Lo invitamos a consultar el anexo para ampliar sus conocimientos sobre comportamiento del consumidor.
            .col-4.col-lg-2
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Comportamiento_del_consumidor_Solomon.pdf')" target="_blank")
                span Ver Anexo
                i.fas.fa-play-circle

</template>

<script>
export default {
  name: 'Tema6',
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
