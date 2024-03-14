<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Métricas de usabilidad
    .row.bg18.align-items-center.pt-5.mb-5(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-4 
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')                       
              .col-lg-9.my-3
                .bg1.brad.mb-3
                  .row.justify-content-center.align-items-center.p-3(data-aos="flip-down")           
                    .col-lg-auto.mov
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')       
                    .col.text-white
                      p(data-aos="fade-down").mb-0 Las pruebas de usabilidad que son llevadas a cabo por parte del usuario, son técnicas cuya finalidad es evaluar un producto mediante pruebas con los mismos usuarios.                
                p(data-aos="fade-down") Considere los 10 principios de usabilidad de Jakob Nielsen:

            .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Visibilidad del estado del sistema 
                      p El usuario debe saber qué está pasando en el momento justo, por ejemplo, si un formulario fue diligenciado y enviado, el sistema debe informar del estado del proceso, exitoso, fallido o en proceso.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/60.png', alt="")                 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Relación entre el sistema y el mundo real
                      p El lenguaje y contenido manejan un orden lógico y estructurado, que es fácil de identificar en el lenguaje conversacional. Lo ideal es que se elimine el lenguaje técnico de cara al usuario final.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/61.png', alt="") 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Flexibilidad y eficiencia en el uso  
                      p Los usuarios manejan un uso acertado de las opciones, con funcionalidades básicas para los usuarios nuevos y atajos para los más experimentados.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/62.png', alt="")                 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Control y libertad del usuario 
                      p El usuario tiene la libertad de realizar acciones o deshacerlas, por ejemplo, se cuenta con botones de volver hacia atrás o de deshacer alguna acción previa.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/63.png', alt="")

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Diseño minimalista y estético 
                      p Cada pieza de información es relevante y lo que no genera valor al usuario debe ser retirado, dejando de esta manera lo más importante y necesario para el uso del usuario   
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/64.png', alt="")                 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Estándares y consistencia 
                      p Todos los elementos correlacionados manejan la misma estructura y lenguaje, por decirlo así, si se tiene el proceso de registro desde dos elementos, y se captura el nombre en los dos, la etiqueta para ingresar la información debe ser igual  para no discrepar.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/65.png', alt="")

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Asistencia a usuarios para identificar, diagnosticar y corregir los errores 
                      p Es fácil reconocer errores y las indicaciones de solución son claras, dejando de lado cualquier término técnico.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/66.png', alt="")                 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Prevención de errores
                      p Sistema debe informar previamente sobre posibles incidencias, puede ser que indique si se desea confirmar antes de eliminar un registro, o si se va a editar la información personal, se valide previamente la #[i data], porque será reemplazada con una nueva información. De esta manera, el usuario tomará la decisión de proceder con la acción, conociendo los posibles problemas o incidencias que posteriormente se le puedan presentar.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/67.png', alt="")

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Ayuda y documentación  
                      p Los usuarios cuentan con una base de conocimientos para cualquier procedimiento expresada en el sitio.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/68.png', alt="")                 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Reconocimiento en vez de recuerdo 
                      p Los usuarios no deberían recordar los pasos que deben seguir para realizar alguna acción, por el contrario, deberían tenerlo a la mano y ser de fácil reconocimiento, esto debe ser intuitivo.    
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/69.png', alt="")                                                   
            p(data-aos="fade-down").mb-5 Los investigadores y evaluadores de UX, suelen llevar a cabo estudios de usabilidad en cada iteración del producto, desde el inicio de construcción hasta el lanzamiento. Esto es enriquecedor para el equipo de trabajo, dado que permite identificar desde la experiencia de usuario y desde su percepción, los elementos que aportan valor y los problemas más concurrentes que deberán ser corregidos o reemplazados, determinados por su pertinencia y su utilidad.   

            .row.justify-content-center.mb-4 
              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/70.png', alt='')                       
              .col-lg-7.my-3
                p(data-aos="fade-down") Realizar este tipo de proceso desde fases tempranas permite solucionar rápidamente los problemas iniciales y ahorrar a las compañías dinero y tiempo. Durante el proceso de estudio de usabilidad se pide a una serie de participantes de forma individual que completen una serie de acciones o tareas, mientras que el equipo valida, revisa, observa y toma notas, destacando los elogios o inquietudes. Posteriormente a este flujo, los participantes y el equipo de trabajo analizan los resultados e informan cualquier idea al líder, ideas que pueden ir desde cambios, ajustes o nuevas funcionalidades.  

                h5.t1(data-aos="fade-down") Entre los beneficios de aplicar pruebas de usabilidad, se encuentran: 

            .bg6.brad
              .row.justify-content-center.align-items-end.mb-4          
                .col-lg-7.my-3.j
                  .p-5
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | Establecer una validación imparcial, precisa, directa y ejecutada por el usuario final del producto.
                      li 
                        i.fas.fa-code.color1
                        | Son ideales porque implican pocas adecuaciones, dado que se puede tomar el mínimo producto viable, prototipo o versión actual de release para realizar las pruebas. 
                      li 
                        i.fas.fa-code.color1
                        | Se pueden identificar cuáles son las acciones y utilidades que realiza el usuario con el producto y con ello, guiar a nuevas funcionalidades.
                      li 
                        i.fas.fa-code.color1
                        | Se pueden establecer los problemas o errores que puede presentar el producto, con lo cual se puede definir un flujo rápido de trabajo para realizar los cambios pertinentes, ahorrando tiempo, recursos y dinero. 
                      li.mb-0 
                        i.fas.fa-code.color1
                        | Con cada iteración del proceso de usabilidad se puede enriquecer el flujo del producto, estableciendo un mejor diseño intuitivo.           
                .col-lg-5         
                  img.img-a.img-t.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/71.png', alt='')     

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Conceptos básicos

    .row.justify-content-center.mb-4 
      .col-lg-7.my-3
        p(data-aos="fade-down") La usabilidad es una medida de calidad que busca medir la eficacia, eficiencia y satisfacción en la experiencia del usuario con respecto a un producto, lo ideal es que este tipo de interacción entre usuario/producto sea lo más fácil y simple posible. 
        .bg19.brad.mb-3
          .row.justify-content-center.align-items-center.p-3(data-aos="flip-down")           
            .col-lg-auto.mov
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/72.svg', alt='')       
            .col
              p(data-aos="fade-down").mb-0 Para poder llegar a un nivel de usabilidad con calidad es necesario y pertinente aplicar métodos y procesos que permitan medir las métricas.   
        h5.t1(data-aos="fade-down") Para esto se destacan tres tipos de pruebas de usabilidad:                                  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/73.png', alt='')    

    .row.bg20.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-4
              .col-lg-3.my-3.mov
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/74.png', alt='')      
              .col-lg-9.my-3(data-aos="fade-left")
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
                  div(titulo="Pruebas de usabilidad de guerrilla o de pasillo")
                    p Este tipo de proceso es ejecutado en un espacio con tránsito peatonal, donde se solicita al azar, a personas que sirvan como colaboradores. Estas personas realizan la evaluación del producto y al final responden una encuesta diseñada para poder destacar las acciones establecidas para la prueba.   
                  div(titulo="Pruebas de usabilidad remota no moderada")
                    p Este tipo de pruebas tiene dos ventajas, la primera es que se realiza por medio de un #[i software] de terceros, el cual busca reclutar participantes, con lo que el enfoque será más en investigar y menos en reclutar. En segundo lugar, permitirá a los usuarios interactuar con el producto en su entorno natural, el #[i software] usado permite grabar audio y video. Cabe destacar que el permitir que los usuarios interactúen con el producto en su entorno natural es enriquecedor, porque no habrá un experto que dé soporte y las máquinas usadas para su aplicación serán las propias.  
                  div(titulo="Pruebas de usabilidad moderadas")
                    p Este tipo de pruebas tiene dos ventajas, la primera es interactuar con los participantes en tiempo real, sea por medio de una llamada telefónica o video llamada, con lo que será posible tener una retroalimentación rápida de lo que experimentan y adicionalmente, los comentarios e información dada de la prueba serán más claros. La segunda, permitirá a los usuarios mantenerse enfocados, en las funcionalidades o caminos dedicados a la prueba, dejando de lado otros enfoques del producto.                                     

            p.text-white(data-aos="fade-down") Ahora, para poder hacer pruebas de usabilidad será importante tener en cuenta las siguientes fases:

            .row.justify-content-center.mb-4
              .col-lg-6.my-3.mov
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')      
              .col-lg-6.my-3(data-aos="fade-left") 
                .tarjeta.tarjeta--gris1.p-5.mb-5(data-aos="fade-left")
                  SlyderA(tipo="b")
                    div.text-center
                      h5 #[mark.bgtg.px-2 Decidir qué parte del producto será probado]
                      p.text-white.mt-4 Si el equipo de trabajo tiene dudas sobre alguna zona o parte del producto, será necesario decidir si estará dentro de las pruebas que se realizarán, con la finalidad de identificar aciertos y oportunidades de mejora.         
                    div.text-center
                      h5 #[mark.bgtg.px-2 Elegir qué tareas serán caso de estudio]
                      p.text-white.mt-4 Las tareas o acciones ejecutadas por los participantes, deben estar alineadas a los objetivos más comunes de los usuarios, si se tiene un sitio de compras online, lo pertinente será probar el carro de compras.   
                    div.text-center
                      h5 #[mark.bgtg.px-2 Establecer un estándar para el éxito de cada tarea]
                      p.text-white.mt-4 Una vez esté definido qué es lo que se probará y cómo se va a probar, es requerido establecer criterios claros y específicos que determinen el éxito de cada tarea.    
                    div.text-center
                      h5 #[mark.bgtg.px-2 Establecer un plan de estudio y un guion]
                      p.text-white.mt-4 Establecer un guion que indique desde el inicio el propósito del estudio, antecedentes, y preguntas a realizar. Esto para que el estudio sea coherente, imparcial y con un enfoque científico.         
                    div.text-center
                      h5 #[mark.bgtg.px-2 Delegar funciones]
                      p.text-white.mt-4 Durante la ejecución del estudio el moderador de cada sesión con el usuario, deben seguir estrictamente el guion. El moderador debe tomar notas mientras el participante ejecuta la sesión.   
                    div.text-center
                      h5 #[mark.bgtg.px-2 Encontrar participantes]
                      p.text-white.mt-4 Se debe realizar una identificación y reclutamiento de participantes pertinentes, dependiendo de la población representativa a la que se quiere llegar con la prueba. Es importante que los moderadores y participantes que son reclutados no se conozcan, dado que esto puede generar un sesgo al momento de ejecutar la prueba.   
                    div.text-center
                      h5 #[mark.bgtg.px-2 Realizar el estudio]
                      p.text-white.mt-4 En la ejecución de cada estudio, los participantes deberán realizar una tarea a la vez, sin ayuda u orientación, debido a que el tiempo que les tome completar la tarea será un indicador importante de estudio. Luego, hacer un análisis del proceso.        
                    div.text-center
                      h5 #[mark.bgtg.px-2 Analizar los datos]
                      p.text-white.mt-4 En este proceso se recolectan varios datos cualitativos, por lo que su análisis permitirá descubrir patrones, así como descubrir problemas de usabilidad con lo que se recomendarán ajustes de diseño.   
                    div.text-center
                      h5 #[mark.bgtg.px-2 Informar los hallazgos]
                      p.text-white.mt-4 Después de realizar el análisis se deben establecer las conclusiones y ser publicadas, con la finalidad de determinar los pasos a seguir. 

            p.text-white.mb-5(data-aos="fade-down") Luego de ver los tipos y las fases de pruebas de usabilidad a tener en cuenta, se debe estar consciente de realizar el proceso de validación con los participantes. Es común realizar un test o prueba de usabilidad, por lo cual, por cada tipo de estudio, se deberá establecer una serie de encuestas, el factor más importante es ¿qué preguntar?, ¿qué se desea conocer? y esto se resume en cómo hacer buenas preguntas, teniendo en cuenta los siguientes elementos:

            .row.justify-content-center.mb-5           
              .col-lg-4.my-3
                .bg21.p-4.brad.h-100
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='')            
                  p(data-aos="fade-down").mb-0 No se deben realizar preguntas clave que conlleven el sesgo del equipo. 
              .col-lg-4.my-3
                .bg21.p-4.brad.h-100
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')            
                  p(data-aos="fade-down").mb-0 Preguntar a los participantes desde su perspectiva, qué propondrían para completar una meta o tarea expuesta en la sesión.  
              .col-lg-4.my-3
                .bg21.p-4.brad.h-100
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.png', alt='')            
                  p(data-aos="fade-down").mb-0 Cuando los participantes tengan preguntas como ¿esto qué hace?, la respuesta debería ser ¿qué espera que haga?  

    p(data-aos="fade-down").mb-5 Posteriormente, al realizar las pruebas de usabilidad, #[b.t1 es importante evaluar las métricas de usabilidad que previamente fueron expuestas, tales como:]    

    .row.justify-content-center.align-items-center
      .col-4
        .bg2.brad.p-3.my-3(data-aos="fade-down")
          .row.justify-content-center.align-items-top          
            .col-lg.my-1.col-md-12
              ul.lista-ul.fa-ul.mb-0
                li.mb-0 
                  i.fas.fa-code.color1
                  | Eficacia.   

            .col-lg.my-1.col-md-12
              ul.lista-ul.fa-ul.mb-0
                li.mb-0 
                  i.fas.fa-code.color1
                  | Eficiencia.  

            .col-lg.my-1.col-md-12
              ul.lista-ul.fa-ul.mb-0
                li.mb-0 
                  i.fas.fa-code.color1
                  | Satisfacción.                                                    
      .col-lg-8.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.png', alt='')       
                            
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
