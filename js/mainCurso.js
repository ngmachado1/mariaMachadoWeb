document.addEventListener('DOMContentLoaded', ()=>{
    cambiarCurso();
});

    // Cursos de Construccion
    function cambiarCurso(){
        let optBarniz = document.querySelector('#Barniz');
        let optConstruccion = document.querySelector('#Construccion');
        let HTMLin = document.querySelector(".detalle")
    
        
        optBarniz.addEventListener("click", ()=>{
            HTMLin.innerHTML = RenderCursoBarniz();
            optBarniz.classList.add('active');
            optConstruccion.classList.remove('active');
        });
        optConstruccion.addEventListener("click", ()=>{
            HTMLin.innerHTML = RenderCursoConstruccion();
            optConstruccion.classList.add('active');
            optBarniz.classList.remove('active');
        })
    }
    
    function RenderCursoBarniz(){
        return`  
        <h2>Tecnicas Básicas de Barnizado en Violieria</h2>
        <div class="tiempo-modo">
            <h5><span class="icon-calendar"></span> 4 Semanas</h5>
            <h5><span class="icon-megaphone"></span> Online</h5>
        </div>
        <div class="clases barniz">
            <p><span class="icon-tools celeste"></span> <b>Clase 1:</b> PREPARACIONES PREVIAS
            <ul class="item-curso">
                <li>Preparación del instrumento.</li>
                <li>Pulido y sellado de poros.</li>
                <li>Tratamientos químicos de la madera.</li>
            </ul>
            </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 2:</b> COCCIÓN DE BARNICES Y EXTRACCION DE COLOR
            <ul class="item-curso">
                <li>Coccion de barniz Mixto.</li>
                <li>Coccion de barniz al aceite.</li>
                <li>Preparación de colores naturales.</li>
            </ul>
            </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 3:</b> COCCIÓN DE BARNICES Y EXTRACCION DE COLOR
                <ul class="item-curso">
                    <li>Barniz mixto: pincel, muñecas, soplete</li>
                    <li>Barniz al aceite: pincel, dedos</li>
                </ul>
            </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 4:</b> TERMINACIÓN
                <ul class="item-curso">
                    <li>Estirado y pulido final.</li>
                    <li>Métodos de cuidado por cada tipo de barniz</li>
                </ul>
                </p>
        </div>
    `
    }
    function RenderCursoConstruccion(){
        return `
        <h2>Curso de Construcción</h2>
        <div class="tiempo-modo">
            <h5><span class="icon-calendar"></span> 8 Semanas</h5>
            <h5><span class="icon-megaphone"></span> Online</h5>
        </div>
        <div class="clases">
            <p><span class="icon-tools celeste"></span> <b>Clase 1:</b> Tallado de tacos, ensamble y terminación de
                aros. </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 2:</b> Ensamble (juntas) de fondo y tapa. </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 3:</b> Marcación de silueta limado y terminación de
                bordes. </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 4:</b> Esbozo de curvas externas.</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 5:</b> Fileteado.</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 6:</b> Esgucio y terminación de curvas</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 7:</b> Trabajo en tapa, effes</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 8:</b> Cadena</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 9:</b> Trabajo en fondo, curvas y espesores. </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 10:</b> Realizar planos, escuadras, marcacion y
                cortado en mango.
            </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 11:</b> Tallado de rulo y clavijero.</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 12:</b> Realización y pre-encolado de tastiera.
                Encolado de tapa y
                aro.</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 13:</b> Encastre de mango.</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 14:</b> Terminación de aro y mango. Encolado de
                fondo.</p>
            <p><span class="icon-tools celeste"></span> <b>Clase 15:</b> Tallado de mango y terminación de botón.
            </p>
            <p><span class="icon-tools celeste"></span> <b>Clase 16:</b> Terminación y pulido final.</p>
        </div>
        `
    }