import React from "react";
import { Link } from "react-router-dom";
import "./BannerMontreal.css"; // ← Archivo CSS separado

export default function BannerMontreal() {
  return (
    <section className="banner-montreal text-center">
      <div className="overlay">
        <h1>Bienvenido a Montreal: Idiomas, Tecnología y Cultura</h1>
        <p>
          Formamos mentes globales con el poder de los idiomas, la tecnología y
          la cultura.
        </p>

        <Link to="/cursos" className="btn-cta">
          Conoce nuestros cursos
        </Link>
      </div>
    </section>
  );
}
