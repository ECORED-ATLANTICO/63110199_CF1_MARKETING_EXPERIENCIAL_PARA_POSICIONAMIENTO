<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El componente formativo Fundamentos experienciales ofrece al aprendiz una comprensión integral de los fundamentos del #[em marketing] tradicional y su evolución hacia el #[em marketing] experiencial, permitiendo analizar cómo las marcas estructuran estrategias orientadas a la experiencia del cliente. Se abordan conceptos clave relacionados con emociones, categorías de clientes y comportamiento de compra, fortaleciendo la capacidad de interpretar las dinámicas del consumidor.
        .p-4.bg-img.rounded-4
          p.mb-0 Asimismo, el componente desarrolla una visión estratégica aplicada, donde el aprendiz comprende la importancia de diseñar experiencias coherentes y significativas. A través del análisis de variables emocionales, sensoriales y conductuales, se fortalecen habilidades para estructurar propuestas de valor que impacten el posicionamiento de marca y generen relaciones duraderas con los clientes.
    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Fundamentos experienciales”, el cual se organiza en seis unidades. Inicia con el capítulo uno abordando el marketing tradicional, allí se planeta su definición, características, componentes, elementos, aplicaciones, ventajas, teorías, principios y leyes. El segundo capítulo aborda el marketing experiencial, en donde se desarrolla su definición, características, componentes, elementos, decálogo, aplicaciones, ventajas, teorías, principios y leyes. El tercer capítulo comprende la interrelación del marketing experiencial y marketing sensorial, donde se aborda sus características, relaciones, aplicaciones, implementaciones, complementación, variables y relaciones. El cuarto capítulo aborda las categorías de clientes, en donde se ve su clasificación y tipología. El quinto capítulo trabaja las emociones, abordando su concepto, tipos, y tratamientos. Culmina el componente con el capítulo seis, correspondiente a formas de decisión de compra impulsiva y racional, allí se aborda su definición, tipos, etapas, características y concluye con ventajas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
