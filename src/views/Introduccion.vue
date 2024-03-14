<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-4          
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')         
      .col-lg-8.my-3
        .bg1.brad.p-4.h-100.j(data-aos="fade-right") 
          p(data-aos="fade-down") #[mark.bgty.px-2 ¿Sabías que un plan de mejora de usabilidad del prototipo #[i software] incluye procesos de pruebas y muchas métricas relacionadas a la experiencia de usuario?]
          .text-white
            p(data-aos="fade-down") La era digital está en auge y cada vez surgen más y más herramientas en el mercado que nos brindan funcionalidades empresariales o de entretenimiento, facilitando con ello la vida a millones de usuarios.
  
            p(data-aos="fade-down") Es precisamente por esto, que la pertinencia funcional cobra una gran importancia, porque sin las pruebas de usabilidad no sería posible validar rápidamente cuál es el tipo de interacción que les agrada a los usuarios, por ejemplo, un formulario con #[i slides] de izquierda a derecha o un #[i scroll] vertical, un #[i chat] en tiempo real que permita ver el último mensaje enviado en la conversación, o que muestre siempre el primero como relevante, una foto de usuario en la página de perfil de un empleado o solo su nombre y apellido; esto entre muchas cosas más.   
  
            p(data-aos="fade-down").mb-0 Los #[i test] o pruebas de usabilidad, son prácticas que permiten aumentar la calidad de un producto, teniendo un acercamiento específico con el usuario final y como base, su retroalimentación para la mejora del producto, con lo cual, cuando el producto salga al mercado, ya habrá sido validado previamente por un grupo poblacional significativo, que dio el aval de las funcionalidades. 

    .bg2.brad.p-4.h-100(data-aos="fade-left")
      p(data-aos="fade-down") Este proceso es enriquecedor desde diferentes perspectivas, debido a que las empresas se ahorran con estas prácticas recursos, dinero y tiempo. La finalidad es llegar a construir un producto simple e intuitivo que satisfaga las necesidades de los usuarios, y en otras palabras, haga lo que se supone que debería hacer, sin dar paso a ambigüedades o fallos que se pudieron solucionar en fases tempranas del desarrollo del producto. 

      h5(data-aos="fade-down").mb-0.t1 Así que, bienvenido y le deseamos muchos éxitos en este proceso de aprendizaje.               
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
