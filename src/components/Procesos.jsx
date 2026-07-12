import React from 'react';

function Procesos() {
  return (
    <section id="procesos" className="py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5 fw-bold">Nuestro Proceso de Trabajo</h2>
        
       
        <div className="accordion shadow-sm" id="accordionProcesos">
          
  
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1. Análisis y Auditoría
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionProcesos">
              <div className="accordion-body text-muted">
                Comenzamos con una inmersión profunda en tu marca. Analizamos tu situación actual, tu competencia y tu público objetivo para identificar las mejores oportunidades de crecimiento en el mercado digital.
              </div>
            </div>
          </div>

          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. Estrategia Personalizada
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionProcesos">
              <div className="accordion-body text-muted">
                Diseñamos un plan de acción a medida, seleccionando los canales adecuados (SEO, SEM, Redes Sociales) y estableciendo KPIs claros para medir el éxito de la campaña desde el primer día.
              </div>
            </div>
          </div>

          <div className="accordion-item border-0">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3. Ejecución y Optimización Constante
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionProcesos">
              <div className="accordion-body text-muted">
                Llevamos la estrategia a la realidad. Nuestro equipo lanza las campañas y monitorea el rendimiento en tiempo real, realizando ajustes continuos para maximizar tu retorno de inversión (ROI).
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Procesos;