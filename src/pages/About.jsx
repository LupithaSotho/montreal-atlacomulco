import React from "react";
import aboutImg from "../assets/about.png";

export default function About() {
  return (
    <div>

      {/* ===== ENCABEZADO ===== */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(90deg, #1565C0, #7B1FA2)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Quiénes Somos</h1>
          <p className="lead">
            Una institución que impulsa el aprendizaje, la innovación y la cultura.
          </p>
        </div>
      </section>

      {/* ===== DESCRIPCIÓN PRINCIPAL ===== */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={aboutImg}
                alt="Quiénes somos - Montreal"
                className="img-fluid rounded shadow-sm"
                loading="lazy"
              />
            </div>

            <div className="col-md-6">
              <p>
                <strong>Montreal: Idiomas, Tecnología y Cultura</strong> es una
                institución educativa privada dedicada a ofrecer formación
                integral en idiomas extranjeros, tecnología aplicada y cultura
                general. Nuestra misión es preparar a los estudiantes con
                competencias lingüísticas, tecnológicas y culturales que les
                permitan desenvolverse con éxito en un mundo globalizado.
              </p>

              <p>
                Contamos con un equipo docente especializado, materiales
                actualizados y espacios adecuados para un aprendizaje dinámico y
                efectivo. Promovemos valores como el respeto, la responsabilidad
                y la innovación para formar ciudadanos conscientes y comprometidos con su entorno.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MISIÓN Y VISIÓN ===== */}
      <section className="py-5" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container">
          <div className="row text-center">

            {/* Misión */}
            <div className="col-md-6 mb-4">
              <div
                className="p-4 h-100 rounded shadow-sm"
                style={{ backgroundColor: "#FBC02D" }}
              >
                <h3 className="fw-bold text-dark mb-3">Misión</h3>
                <p className="text-dark">
                  Brindar educación de calidad en idiomas, tecnología y cultura,
                  fomentando el desarrollo de habilidades prácticas y
                  conocimientos pertinentes para el crecimiento personal y
                  profesional de nuestros estudiantes.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="col-md-6 mb-4">
              <div
                className="p-4 h-100 rounded shadow-sm"
                style={{ backgroundColor: "#7B1FA2" }}
              >
                <h3 className="fw-bold text-white mb-3">Visión</h3>
                <p className="text-white">
                  Ser una institución líder en la enseñanza de idiomas y
                  tecnología, que inspire a sus estudiantes a ser ciudadanos
                  globales, críticos y creativos, capaces de afrontar retos y
                  contribuir positivamente a la sociedad.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== VALORES ===== */}
      <section
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(90deg, #388E3C, #D32F2F)" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">Nuestros Valores</h2>

          <div className="row">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Respeto</h5>
              <p>Promovemos la empatía y la convivencia armónica.</p>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Responsabilidad</h5>
              <p>Fomentamos el compromiso y la ética en cada acción.</p>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Innovación</h5>
              <p>Impulsamos el uso creativo de la tecnología y el conocimiento.</p>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Cultura</h5>
              <p>Valoramos la diversidad como fuente de aprendizaje.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}