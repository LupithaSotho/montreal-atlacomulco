import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import certBanner from "../assets/certificaciones-banner.png";

export default function Courses() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Función para ir al formulario sin recargar la SPA
  const goToInscripcion = (e) => {
    e.preventDefault();

    // Si ya estamos en /enroll, hacer scroll
    if (location.pathname === "/enroll") {
      const form = document.getElementById("formulario");
      if (form) form.scrollIntoView({ behavior: "smooth" });
    } 
    // Si estamos en otra ruta, navegar con hash
    else {
      navigate("/enroll#formulario");
    }
  };

  return (
    <div>

      {/* ===== ENCABEZADO ===== */}
      <section
        className="text-center text-white py-5"
        style={{
          background:
            "linear-gradient(90deg, #D32F2F, #1565C0, #388E3C, #FBC02D, #7B1FA2)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Nuestros Cursos</h1>
          <p className="lead">
            Programas para desarrollar tus competencias lingüísticas,
            tecnológicas y culturales.
          </p>
        </div>
      </section>

      {/* ===== LISTA DE CURSOS ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">

            {/* INGLÉS */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-danger fw-bold">Inglés</h4>
                  <p>Desde principiante hasta avanzado con certificación.</p>
                  <ul className="list-unstyled text-secondary small">
                    <li>📘 Starters – Movers – Flyers</li>
                    <li>📗 A2 – B1 – B2 – C1 – C2</li>
                  </ul>

                  {/* ✔ Usamos navigate para no recargar */}
                  <button 
                    onClick={goToInscripcion} 
                    className="btn btn-outline-danger mt-3"
                  >
                    Inscribirme
                  </button>

                </div>
              </div>
            </div>

            {/* COMPUTACIÓN */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-primary fw-bold">Computación</h4>
                  <p>Domina herramientas digitales y programación.</p>
                  <ul className="list-unstyled text-secondary small">
                    <li>💻 Básico – Intermedio – Avanzado – Programador</li>
                  </ul>

                  <button 
                    onClick={goToInscripcion} 
                    className="btn btn-outline-primary mt-3"
                  >
                    Inscribirme
                  </button>

                </div>
              </div>
            </div>

            {/* REGULARIZACIÓN */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-success fw-bold">Regularización</h4>
                  <p>Apoyo académico personalizado.</p>
                  <ul className="list-unstyled text-secondary small">
                    <li>📚 Matemáticas – Español – Ciencias – Historia</li>
                  </ul>

                  <button 
                    onClick={goToInscripcion} 
                    className="btn btn-outline-success mt-3"
                  >
                    Inscribirme
                  </button>

                </div>
              </div>
            </div>

            {/* CULTURA */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="fw-bold" style={{ color: "#7B1FA2" }}>
                    Cultura
                  </h4>
                  <p>Talleres artísticos, lectura y expresión.</p>

                  <button 
                    onClick={goToInscripcion} 
                    className="btn btn-outline-dark mt-3"
                  >
                    Inscribirme
                  </button>

                </div>
              </div>
            </div>

            {/* CERTIFICACIONES CAMBRIDGE */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <img
                    src={certBanner}
                    alt="Certificaciones"
                    className="img-fluid rounded mb-3"
                  />
                  <h4 className="fw-bold" style={{ color: "#1565C0" }}>
                    Certificaciones Cambridge
                  </h4>
                  <p>Exámenes con validez internacional.</p>

                  <Link
                    to="/certificaciones"
                    className="btn btn-outline-primary mt-3 fw-bold"
                  >
                    Ver detalles
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== LLAMADO A LA ACCIÓN FINAL ===== */}
      <section
        className="text-center text-white py-5"
        style={{ background: "linear-gradient(90deg, #388E3C, #D32F2F)" }}
      >
        <h2 className="fw-bold">¡Alcanza tus metas con Montreal!</h2>
        <p>Inscríbete hoy mismo.</p>

        <a
          href="/enroll#formulario"
          onClick={goToInscripcion}
          className="btn btn-light btn-lg fw-bold"
        >
          Ir a Inscripciones
        </a>
      </section>

    </div>
  );
}
