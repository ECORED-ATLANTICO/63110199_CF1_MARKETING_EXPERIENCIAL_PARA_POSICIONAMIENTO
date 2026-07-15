<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comportamiento del consumidor',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave del <em>marketing</em> experiencial, emociones y decisiones de compra mediante la validación de afirmaciones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal propósito del <em>marketing</em> experiencial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar experiencias memorables para los clientes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Eliminar la competencia.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Incrementar únicamente las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica del <em>marketing</em> tradicional?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promueve la participación permanente del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se centra exclusivamente en experiencias sensoriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Personaliza completamente cada mensaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utiliza principalmente una comunicación unidireccional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué factor influye directamente en las decisiones de compra del consumidor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Las emociones.', esCorrecta: true },
            { id: 'b', texto: 'El clima.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La ubicación geográfica únicamente.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El tamaño de la empresa.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Para qué sirve la segmentación de clientes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para eliminar la competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reducir el número de productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para diseñar estrategias diferenciadas según las características del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para vender el mismo producto a todos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿En qué consiste el <em>marketing</em> sensorial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'En reducir los precios.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'En estimular los sentidos para influir en la percepción del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'En realizar únicamente publicidad digital.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'En aumentar la producción.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál describe correctamente una compra racional?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Se realiza sin pensar.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Depende solo de las emociones.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Se decide por impulso.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Se basa en el análisis y la comparación de alternativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué efecto producen las experiencias positivas en los consumidores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecen la fidelización y la recordación de la marca.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Eliminan la competencia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Disminuyen la percepción de valor.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Reducen las ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿De qué depende el posicionamiento de una marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo del precio.', esCorrecta: false },
            { id: 'b', texto: 'Solo de la publicidad.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'De múltiples factores como la percepción, el valor y la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente del tamaño de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué pueden generar los estímulos sensoriales en el consumidor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Únicamente satisfacción.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Cambios en su comportamiento y percepción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente decisiones racionales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ningún efecto.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es una característica de la compra impulsiva?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Siempre requiere comparación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es completamente planificada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se realiza después de largos análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ocurre rápidamente como respuesta a estímulos inmediatos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué integra la experiencia del cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emociones, percepciones e interacciones con la marca.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo el precio.', esCorrecta: false },
            { id: 'c', texto: 'Únicamente el servicio.', esCorrecta: false },
            { id: 'd', texto: 'Solo la publicidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante comprender al consumidor en el <em>marketing</em> experiencial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque elimina la competencia.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Porque reduce los costos.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Porque permite diseñar experiencias significativas y relevantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque evita realizar investigaciones de mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué influye en el posicionamiento de una marca?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La percepción del cliente.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Solo la inversión en publicidad.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Exclusivamente el precio.', esCorrecta: false },
            { id: 'd', texto: 'La cantidad de empleados.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué buscan las estrategias de <em>marketing</em> experiencial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir la producción.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Eliminar el contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar únicamente las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generar una conexión emocional con los consumidores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué medios utiliza principalmente el <em>marketing</em> tradicional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medios de comunicación masivos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Únicamente redes sociales.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Exclusivamente plataformas móviles.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Solo eventos presenciales.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Para qué sirve la tipología de clientes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para eliminar segmentos.', esCorrecta: false },
            { id: 'b', texto: 'Para reducir la oferta.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Para comprender los diferentes comportamientos de compra.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Para fijar precios.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué efecto producen generalmente las emociones negativas en la relación con una marca?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Siempre generan fidelización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pueden afectar negativamente la percepción y la lealtad del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementan automáticamente las ventas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'No producen ningún efecto.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué elemento influye en la percepción del cliente durante la experiencia de compra?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo el precio.', esCorrecta: false },
            { id: 'b', texto: 'Únicamente el producto.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Exclusivamente la publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El entorno donde ocurre la experiencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Las decisiones de compra pueden estar influenciadas por cuáles factores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores emocionales y racionales.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo factores económicos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Exclusivamente factores sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente factores culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué relación existe entre el <em>marketing</em> experiencial y la percepción del consumidor?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No existe relación.', esCorrecta: false },
            { id: 'b', texto: 'Solo influye en el precio.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'La experiencia de marca influye directamente en la percepción del consumidor y en su posicionamiento.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Solo afecta la publicidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente, tiene una adecuada comprensión de la temática de Fundamentos experienciales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo. ',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
