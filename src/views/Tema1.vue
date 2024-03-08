<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Métricas de usabilidad


    .row.bg3.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-4 
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')                       
              .col-lg-9.my-3
                .bg4.p-3.brad(data-aos="flip-down") 
                  p(data-aos="fade-down").mb-0 Las pruebas de usabilidad que son llevadas a cabo por parte del usuario, son técnicas cuya finalidad es evaluar un producto mediante pruebas con los mismos usuarios.   
                .row.justify-content-center.align-items-center.p-3.my-3(data-aos="flip-down")           
                  .col-lg-auto.mov
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')       
                  .col
                    p(data-aos="fade-down").mb-0.tb Esta técnica es una práctica de usabilidad que es indispensable y poco probable que sea reemplazable. #[b.t1 Estos tipos de pruebas son fundamentales, dado que permiten obtener información sobre cómo los usuarios hacen uso del sistema y se realizan de la siguiente forma:]  

            PasosB.color-acento-contenido.bg5.p-3.brad
              .row.justify-content-center.mb-4(titulo="Paso 1")
                .col-8.order-1.my-3
                  .text-white
                    h5 Paso 1 
                    p Las pruebas de usabilidad se conforman de acuerdo con un grupo de usuarios de un sistema. 
              
                .col-lg-auto.order-lg-2.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/6.svg', alt='') 


              .row.justify-content-center.mb-4(titulo="Paso 2")
                .col-8.order-1.my-3
                  .text-white
                    h5 Paso 2 
                    p A los mismos se le solicita que lleven a cabo las acciones o actividades para las que el software fue diseñado y construido. 
              
                .col-lg-auto.order-lg-2.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/7.svg', alt='')  


              .row.justify-content-center.mb-4(titulo="Paso 3")
                .col-8.order-1.my-3
                  .text-white
                    h5 Paso 3 
                    p En este proceso ,el equipo de diseño, desarrollo y demás, realizan el seguimiento de dicha interacción.
              
                .col-lg-auto.order-lg-2.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/8.svg', alt='')  


              .row.justify-content-center.mb-4(titulo="Paso 4")
                .col-8.order-1.my-3
                  .text-white
                    h5 Paso 4 
                    p Se debe llevar registro, haciendo un énfasis en los errores o dificultades que los usuarios pueden tener en el proceso. 
              
                .col-lg-auto.order-lg-2.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/9.svg', alt='')                                                              


            .row.justify-content-center.align-items-center.px-3.my-3.bg6.brad.my-5(data-aos="flip-down")           
              .col-lg-auto.beat.my-3
                img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')       
              .col.my-3
                h5(data-aos="fade-down").mb-0 Este proceso no se encuentra explícitamente orientado a un producto finalizado, sino por el contrario, se puede aplicar también a prototipos.                                                    
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Conceptos básicos  

    p(data-aos="fade-down") Las métricas son indicadores numéricos que expresan una medida cuantitativa, la cual es una referencia, que tiene como finalidad medir o comparar. Por lo cual, se abarcarán diferentes términos y conceptos relacionados con los indicadores. 

    h5(data-aos="fade-down").t1 A nivel general se pueden identificar dos tipos de métricas:                             
       
    .row.bg7.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-4 
              .col-lg-6.my-3
                .bg1.brad1.h-100
                  img.w(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')    
                  .p-4
                    h5 #[mark.bgtg.px-2 Conteo]
                    .text-white 
                      p.mb-0 Este tipo de indicadores expresan cantidades, por ejemplo, cuántas tareas realizó el aprendiz mientras estuvo en la plataforma, cuántas imágenes revisó el usuario de diseño gráfico o cuántos videos observó mientras estuvo en la plataforma.   
              .col-lg-6.my-3
                .bg1.brad1.h-100
                  img.w(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')    
                  .p-4
                    h5 #[mark.bgtg.px-2 Ratios]
                    .text-white 
                      p.mb-0 Es un tipo de indicador que es dividido por otro indicador, con lo que un ratio busca conectar dos métricas y sirve para ponerlas en relación, en la que se busca identificar cuántas veces un valor es contenido por otro.                   

            h5.t1.mb-5(data-aos="fade-down") Para ilustrar un poco más sobre el tipo de métricas tipo ratios, lea los siguientes ejemplos:
            .bg6.brad
              .row.justify-content-center.mb-4          
                .col-lg-7.my-3.j
                  .p-5
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | Se tiene un sistema de información de cursos virtuales, en los cuales se presenta una cantidad de usuarios que ingresaron en un rango de tiempo determinado, versus la cantidad de sesiones activas en el mismo rango de tiempo. 

                      li 
                        i.fas.fa-code.color1
                        | Es posible que en el rango de tiempo (X) se haya conectado (Z) cantidad de usuarios, pero haya (Z+W) cantidad de sesiones activas. Esto es posible porque cabe la posibilidad que un usuario haya iniciado sesión varias veces en el mismo rango de tiempo. 

                      li.mb-0 
                        i.fas.fa-code.color1
                        | Por lo cual, si se quiere saber la cantidad de veces que los usuarios realizaron un ingreso, se realiza un promedio que es una métrica tipo ratio, la cual se calcula dividiendo la cantidad de sesiones (Z+W) sobre la cantidad de usuarios (Z), obteniendo de esta manera, la cantidad de sesiones por usuario en promedio.           
                .col-lg-5         
                  img.img-a.img-t.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='') 

            .row.justify-content-center.align-items-center.px-3.my-3.bg8.brad.my-5(data-aos="flip-down")           
              .col-lg-auto.swing.my-3
                img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')       
              .col.my-3
                p.text-white(data-aos="fade-down").mb-0 Las métricas también pueden ser clasificadas en: métricas de alcance y métricas de comportamiento; esta clasificación es especial para sitios periodísticos o de contenido general.   

            h5.t1.mb-5(data-aos="fade-down") Entre estas podemos encontrar las que buscan medir alcance (#[i reach]) o las que buscan medir comportamiento (#[i engagement]):                


    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="De alcance (<i>reach</i>)" :icono="require('@/assets/curso/temas/17.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 #[mark.px-2.t4.text-white De alcance (#[i reach])]
            p Busca medir cuántas veces se vio el contenido de un sitio en específico, en otras palabras, a qué público objetivo alcanzó a llegar el contenido. Algunos ejemplos que se encuentran en sitios, apps o redes sociales, son:
 
            p Búsquedas - #[i Retweets] - Cantidad de #[i likes] - Páginas visitadas o vistas - Cantidad de comentarios.                                                        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='')       

      .py-4.py-md-5(titulo="De comportamiento (<i>engagement</i>)" :icono="require('@/assets/curso/temas/18.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 #[mark.px-2.t4.text-white De comportamiento (#[i engagement])]
            p Busca medir y entender cómo interactúan los usuarios con el contenido. Algunos ejemplos que se pueden encontrar en páginas, secciones o apps, son:
 
            p Duración promedio de permanencia de usuarios - Promedio de duración de visita de usuarios - Porcentaje de usuarios que llegaron al final del sitio.                                                        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='') 

    h5.t1.mb-5(data-aos="fade-down") También se deben tener en cuenta los siguientes conceptos:

    .row.justify-content-center.mb-4
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')      
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
          div(titulo="Dimensiones")
            p Una dimensión podría expresarse como el lugar geográfico desde donde se realiza la consulta, el tipo de dispositivo desde que se conecta o los títulos de interés del usuario. 

            p La cantidad de dimensiones para una métrica y en este caso para el usuario, pueden ser infinitas, aunque se recomienda trabajar con un número específico y reducido, que sean pertinentes para poder contestar preguntas.     
          div(titulo="Objetivos (<i>goals</i>) y targets")
            p Un objetivo es aquella meta a la cual se desea llegar, como por ejemplo, incrementar la cantidad de visitas o aumentar el tiempo de permanencia de un usuario en la navegación de un portal. Por otro lado, el target se expresa de forma numérica, es el estado al cual se desea llegar y está directamente relacionado con los objetivos propuestos, por ejemplo, se desea llegar a 50.000 visitas diarias.  
          div(titulo="Indicadores clave de performance (KPI)")
            p Son métricas especiales e importantes usadas en las organizaciones para la estrategia funcional y ayudan a determinar el éxito o no de los objetivos establecidos.  
          div(titulo="Marco analítico (<i>Analytical framework</i>)")
            p Marco analítico (Analytical framework)	La convergencia y combinación de los elementos nombrados previamente, son la base fundamental para el marco analítico, sus beneficios son varios y el alcance está ligado explícitamente de cada caso de aplicación en particular, de lo cual a nivel genérico se puede destacar:                                              

            ul.lista-ul.fa-ul.mb-0                   
              li 
                i.fas.fa-code.color1
                | Poder monitorear audiencia y sus comportamientos.
              li 
                i.fas.fa-code.color1
                | Relacionar el producto o servicio desarrollado y los resultados obtenidos.
              li 
                i.fas.fa-code.color1
                | Analizar y comprender los atributos de una audiencia.
              li 
                i.fas.fa-code.color1
                | Controlar la calidad del producto o servicio.
              li 
                i.fas.fa-code.color1
                | Predecir los resultados que se pueden llegar a obtener.
              li 
                i.fas.fa-code.color1
                | Mejorar la calidad del producto, servicio, proceso o contenido.
              li.mb-0 
                i.fas.fa-code.color1
                | Alinear los equipos respecto a lo que es indispensable.	

    p.mb-5(data-aos="fade-down") Luego de toda esta conceptualización inicial, que sirve de marco conceptual, se hace necesario profundizar en las métricas de usabilidad, las cuales se explicarán a continuación.  


    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Eficiencia 

    p(data-aos="fade-down") Son los recursos empleados para alcanzar los objetivos con exactitud e integridad, hace referencia a la cantidad de esfuerzo que los usuarios deben emplear para poder alcanzar las metas de la forma más óptima y con la menor cantidad de recursos.
    h5(data-aos="fade-down").t1.mb-4 En la eficiencia se incluyen las siguientes medidas:

    .bg10.mb-4
      .row.justify-content-center.align-items-end
        .col-lg-4
          img.img-a.img-t.mov(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')      
        .col-lg-7.my-4(data-aos="fade-left")    
          SlyderF.px-3(columnas="col-lg-6")
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/24.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 1]
              p.mb-0.text-center Tiempo empleado para la ejecución de una serie de pasos.
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/25.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 2]
              p.mb-0.text-center Tiempo empleado para la ejecución del primer intento.     
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/26.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 3]
              p.mb-0.text-center Tiempo empleado para la ejecución de una tarea determinada.
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/27.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 4]
              p.mb-0.text-center Tiempo empleado para la ejecución de una tarea determinada con respecto al tiempo de ejecución de un experto.   
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/28.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 5]
              p.mb-0.text-center Tiempo necesario en la curva de aprendizaje, para llegar al rendimiento de un experto.
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/29.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 6]
              p.mb-0.text-center Número de uso de teclas para llegar a la ejecución de una tarea.    
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/30.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 7]
              p.mb-0.text-center Tiempo empleado para la corrección de errores.
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/31.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 8]
              p.mb-0.text-center Número de elementos, imágenes o íconos recordados posteriormente a la finalización de una tarea.    
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/32.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 9]
              p.mb-0.text-center Porcentaje de tiempo empleado para el uso del manual de usuario. 
            .tarjeta.bgw.p-5
              img.img-a.img-t.mb-2(src='@/assets/curso/temas/33.svg', alt='')
              h5.text-center #[mark.bgtg.brad2.px-2 10]
              p.mb-0.text-center Tiempo empleado para volver a aprender o recordar funcionalidades.  

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Eficacia 

    p(data-aos="fade-down") Es la exactitud e integridad con la que se logran los objetivos especificados, hace referencia a la efectividad para alcanzar y lograr los objetivos.
    h5(data-aos="fade-down").t1.mb-4 En las medidas de eficacia se incluyen:                 
    .row.bg11.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center
              .col-lg-6.my-4.j
                ul.lista-ul.fa-ul.mb-0                   
                  li 
                    i.fas.fa-code.color1
                    | Porcentaje de tareas o funciones importantes ejecutadas.
                  li 
                    i.fas.fa-code.color1
                    | Porcentaje de tareas o funciones ejecutadas con éxito en el primer intento. 
                  li 
                    i.fas.fa-code.color1
                    | Cantidad de errores que son persistentes en las ejecuciones. 
                  li 
                    i.fas.fa-code.color1
                    | Cantidad de errores por unidad de tiempo. 
                  li 
                    i.fas.fa-code.color1
                    | Porcentaje de usuarios que pueden realizar la ejecución con éxito de las tareas.
                  li 
                    i.fas.fa-code.color1
                    | Cantidad de solicitudes de soporte que se realizan por tarea.
                  li 
                    i.fas.fa-code.color1
                    | Medida objetiva respecto a la calidad de producción.
                  li 
                    i.fas.fa-code.color1
                    | Medida objetiva respecto a la cantidad de producción. 
                  li.mb-0 
                    i.fas.fa-code.color1
                    | Porcentaje de usuarios que pueden llevar a cabo la ejecución de tareas o funcionalidades sin necesidad de leer el manual.      

              .col-lg-6
                img.img-a.img-t.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')        

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Satisfacción

    p(data-aos="fade-down") Es la comodidad y la aceptabilidad de uso. La satisfacción hace referencia a cómo los usuarios se sientan sobre el sistema.
    h5(data-aos="fade-down").t1.mb-4 Las medidas típicas incluyen:

    .row.justify-content-center.mb-5           
      .col-lg-3.my-3
        .bg12.p-3.brad.h-100
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='')            
          p(data-aos="fade-down").mb-0 Porcentaje de usuarios que indican el proceso “más satisfactorio” que un producto previo    
      .col-lg-3.my-3
        .bg12.p-3.brad.h-100
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='')            
          p(data-aos="fade-down").mb-0 Transición voluntaria de uso de un producto previo a uno nuevo.    
      .col-lg-3.my-3
        .bg12.p-3.brad.h-100
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='')            
          p(data-aos="fade-down").mb-0 Porcentaje de usuarios que sienten “el control” del producto.    
      .col-lg-3.my-3
        .bg12.p-3.brad.h-100
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.svg', alt='')            
          p(data-aos="fade-down").mb-0 Porcentaje de usuario que después de dos horas de uso, recomendaría el producto. 

    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Cuestionarios 

    .row.justify-content-center.mb-5           
      .col-lg-4.my-3
        .bg13.p-4.brad.h-100
          p(data-aos="fade-down").mb-0 Son instrumentos de investigación que consisten en conjunto de preguntas u otro tipo de indicadores que son diseñados específicamente para recolectar información del usuario encuestado. Esta técnica incluye preguntas cerradas y abiertas, que al final se traducen como herramientas de índole cualitativas o cuantitativas. 
      .col-lg-4.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='') 
      .col-lg-4.my-3
        .d-grid.h-100
          .crd.bg14.brad.p-4(data-aos="fade-down")
            .crd__text
              p.mb-4 El diseño de un cuestionario está directamente relacionado con el tipo de información que se desea obtener, ya sea información exploratoria o para probar una hipótesis.   
              img.img-t.fr.mov(src='@/assets/curso/temas/43.svg' alt='')   

    p(data-aos="fade-down").mb-5 Los cuantitativos se usan para realizar validaciones sobre una hipótesis generada previamente; estas son algunas de sus características:       

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Uniformidad")
        .row.justify-content-center.pt-3
          .col-8.order-1.my-3
            h5.t1 Uniformidad  
            p.mb-0 Una de sus características es que están estandarizados y uniformes, por lo que todos los usuarios que se vean encuestados tendrán las mismas preguntas. Esto es significativo para la recolección de datos y el análisis estadístico.  
        
          .col-auto.order-lg-2.my-3 
            img.img-a.img-t(src='@/assets/curso/temas/44.svg', alt='') 
      .py-3.py-md-4(titulo="Exploratorio")
        .row.justify-content-center.pt-3
          .col-8.order-1.my-3
            h5.t1 Exploratorio 
            p.mb-0 Es usado para recopilar información cualitativa, por lo cual su contenido es de naturaleza exploratoria. No hay limitaciones en el tipo y objetivo que se especificó que recoge.  
        
          .col-auto.order-lg-2.my-3 
            img.img-a.img-t(src='@/assets/curso/temas/45.svg', alt='') 
      .py-3.py-md-4(titulo="Secuencia de preguntas")
        .row.justify-content-center.pt-3
          .col-8.order-1.my-3
            h5.t1 Secuencia de preguntas 
            p.mb-0 Suele manejar un flujo estructurado de preguntas con la finalidad de aumentar las respuestas.  
        
          .col-auto.order-lg-2.my-3 
            img.img-a.img-t(src='@/assets/curso/temas/46.svg', alt='') 

    h5(data-aos="fade-down").t1.mb-4 Dentro de la clasificación se observa que los cuestionarios pueden llegar a ser estructurados o por el contrario, tener un flujo libre, por lo cual se puede determinar la siguiente clasificación:   

    .row.bg15.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-4 
              .col-lg-6.my-3
                .bg1.brad1.h-100
                  img.w(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')    
                  .p-4
                    h5 #[mark.bgtg.px-2 Cuestionarios estructurados]
                    .text-white 
                      p.mb-0 Recogen datos cuantitativos y la estructura está pensada, planeada y diseñada para recolectar datos específicos. Hace parte de la investigación formal y puede comprobar datos recolectados previamente, ayuda a validar cualquier hipótesis previa.    
              .col-lg-6.my-3
                .bg1.brad1.h-100
                  img.w(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='')    
                  .p-4
                    h5 #[mark.bgtg.px-2 Cuestionarios no estructurados]
                    .text-white 
                      p.mb-0 Recogen datos cuantitativos, tienen una estructura básica y algunas preguntas están ramificadas; las preguntas suelen ser más abiertas.                  

            h5.text-white.mb-5(data-aos="fade-down") En los cuestionarios se encuentran diversos tipos de preguntas, entre las cuales se encuentran:  

            .row.justify-content-center
              .col-lg-3.my-3.mov
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')      
              .col-lg-9.my-3(data-aos="fade-left")
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg9")
                  div(titulo="Preguntas abiertas")
                    p Este tipo de preguntas ayudan a permitir recopilar datos cualitativos en un cuestionario, el cual se puede responder sin ninguna restricción.     
                  div(titulo="Preguntas dicotómicas")
                    p Hacen referencia al tipo de preguntas cerradas como las de “sí/no”, “falso/verdadero”, y son usadas generalmente en caso de necesidad de validar información básica. Es la forma más sencilla de implementar una pregunta en un cuestionario.   
                  div(titulo="Preguntas de opción múltiple")
                    p Son un tipo de preguntas donde el usuario tiene la opción de seleccionar una o varias opciones de respuesta de un listado. En este tipo de preguntas se debe contener un listado de respuestas correctas o por lo menos una respuesta correcta, una serie de respuestas incorrectas, alternativas cerradas y distractores. No se precisa que todas las preguntas tengan todos los componentes mencionados y esto dependerá del tipo de resultado que se espere.   
                  div(titulo="Preguntas de escala")
                    p Están basadas en el principio de las 4 escalas de medición, nominal, ordinal, intervalo y relación. Algunos tipos de preguntas utilizan estas propiedades fundamentales en orden de rango.   
                  div(titulo="Preguntas de imagen")
                    p Son uno de los tipos de preguntas más fáciles en un cuestionario, a los encuestados se les da la opción de seleccionar una serie de imágenes, limitando la respuesta a los recursos ofrecidos y proporcionalmente aumentando el número de respuestas.                                             
    Separador 
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.6 Herramientas

    .row.justify-content-center.mb-5  
      .col-lg-3.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')                 
      .col-lg-9.my-3
        .bg16.p-4.brad.mb-4
          p(data-aos="fade-down").mb-0 Las tendencias y el cambio de comportamiento en los usuarios afectan directamente la forma de uso de las plataformas digitales, por lo que es necesario modificar el diseño e interacción cada cierto tiempo. La usabilidad o en otras palabras la “facilidad de uso” es un término que implica diferentes factores y no solo depende de la interfaz de usuario, factores entre los que se encuentran los conocimientos y habilidades del propio usuario. Por ello, para que un sitio mantenga su nivel de usabilidad, se requiere realizar pruebas constantemente. Este tipo de evaluaciones no son medibles dado que influyen directamente de la percepción de las personas, pero recuerde que es posible verificar y evaluar los factores que influyen en la facilidad de uso, como por ejemplo identificando el comportamiento de los usuarios y el estudio de la efectividad del diseño web.

        h5(data-aos="fade-down").t1 A nivel general, se pueden mencionar algunas herramientas que permitirán aplicar, de forma práctica, el modelo analítico:        

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.p-2
          .col-lg-6.my-3.col-md-auto
            .t2.pe-5                     
              h4.t3.mb-4 Google Analytics 
              p Esta herramienta permite entregar una gran cantidad de gráficos y datos basados en la cantidad de clics. Para hacer uso de esta herramienta se realiza la inserción de un  código en JavaScript en los sitios web que se desean evaluar. Al realizar una inspección de los clics dados por el usuario, la herramienta provee un mapa de calor, indicando cuáles son las zonas más atractivas para los usuarios.

              p Esta información ayuda a determinar cuáles pueden llegar a ser elementos distractores, lugares que están rotos o no funcionan, como hipervínculos que no llevan a ninguna zona y áreas que requieren ser más destacadas.  
          .col-lg-5.my-3.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/54.png', alt="")  
        .row.justify-content-center.align-items-center.p-2
          .col-lg-6.my-3.col-md-auto
            .t2.pe-5                     
              h4.t3.mb-4 Google Analytics 
              p Es una herramienta tradicional, que es usada para analizar estrategias de marketing, pero a la vez sirve para conocer métricas de información respecto a la usabilidad y experiencia de usuario. Los datos pueden indicar posibles barreras que el usuario encuentra al momento de interactuar con el sitio. 

              p Permite identificar búsquedas internas que realiza el usuario, dado detalles sobre los caminos o flujos que adopta el usuario al momento de navegar, también indica problemas de optimización del SEO y reportes si los usuarios encuentran interés en la información proporcionada en el sitio.  
          .col-lg-5.my-3.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/55.png', alt="") 
        .row.justify-content-center.align-items-center.p-2
          .col-lg-6.my-3.col-md-auto
            .t2.pe-5                     
              h4.t3.mb-4 Chartbeat  
              p Es un servicio que sirve para analizar la audiencia de cualquier sitio web. Es muy fácil de usar, creando un registro en su sitio web y completando datos de usuario, luego se agrega un script en el sitio web. 

              p Algunas de las características más interesantes es que el análisis se realiza en tiempo real, como visitas activas simultáneas, popularidad, tipos de conexiones, ya sean rápidas o lentas; estos datos son comparados con datos de la base de conocimientos, con lo que puede desencadenar alertas. 
          .col-lg-5.my-3.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/56.png', alt="")                                                          
    .row.justify-content-center.align-items-center.px-3.bg17.brad(data-aos="flip-down")           
      .col-lg-auto.beat.my-3
        img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')       
      .col.my-3
        h5(data-aos="fade-down").mb-0 Es importante que previamente, al seleccionar una herramienta, se realice el análisis de las particularidades que cada una intenta resolver, de tal manera que se pueda determinar cuál es la más adecuada y está alineada con los objetivos de la organización, esto con miras a aprovechar al máximo las herramientas y sus facultades.                                                                
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
