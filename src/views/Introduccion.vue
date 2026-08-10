<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-secundario-s10.mb-4
      .row.align-items-center
        .col-lg-5
          figure
            img(src="@/assets/curso/intro.png")
        .col-lg-7
          p.mb-0.p-4 El componente formativo aborda los fundamentos del #[em marketing] tradicional y su evolución hacia el #[em marketing] experiencial, integrando conceptos relacionados con la experiencia del cliente, las emociones y las decisiones de compra. Este enfoque permite comprender cómo las marcas construyen posicionamiento a partir de la interacción con los consumidores y la generación de valor más allá del producto.
    
    .bg-secundario-s10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/intro.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El componente formativo aborda los fundamentos del #[em marketing] tradicional y su evolución hacia el #[em marketing] experiencial, integrando conceptos relacionados con la experiencia del cliente, las emociones y las decisiones de compra. Este enfoque permite comprender cómo las marcas construyen posicionamiento a partir de la interacción con los consumidores y la generación de valor más allá del producto.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-1.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro-icon.svg", alt="" data-aos="zoom-in-down")
      .col-lg-10
        p.mb-0 Su importancia radica en que el aprendiz desarrolla capacidades para interpretar el comportamiento del consumidor y estructurar estrategias coherentes con la marca. El contenido se abordará desde un enfoque conceptual aplicado, mediante ejemplos empresariales, análisis de casos y herramientas que facilitan la comprensión de la transición del #[em marketing] tradicional hacia enfoques experienciales.

</template>

<script>
export default {
  name: 'Introduccion',
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
