import React, { useState } from "react";

export default function ContactoFormulario() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const nombre = event.target.nombre.value.trim();
    const correo = event.target.correo.value.trim();
    const mensaje = event.target.mensaje.value.trim();

    // Validación adicional
    if (!nombre || !correo || !mensaje) {
      alert("⚠️ Por favor completa todos los campos.");
      setIsSending(false);
      return;
    }

    const formData = { nombre, correo, mensaje };

    try {
      // ⬇️ Aquí podrás conectar un backend o servicio de correo si deseas
      // await fetch("/api/contacto", { method: "POST", body: JSON.stringify(formData) });

      alert(`📩 ¡Gracias por contactarnos, ${formData.nombre}!\nTe responderemos muy pronto.`);
      event.target.reset();
    } catch (error) {
      alert("⚠️ Ocurrió un error al enviar el mensaje.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="row justify-content-center"
      onSubmit={handleSubmit}
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      {/* Nombre */}
      <div className="col-md-6 mb-3">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre completo"
          autoComplete="name"
          aria-label="Nombre completo"
          required
        />
      </div>

      {/* Correo */}
      <div className="col-md-6 mb-3">
        <input
          type="email"
          name="correo"
          className="form-control"
          placeholder="Correo electrónico"
          autoComplete="email"
          aria-label="Correo electrónico"
          required
        />
      </div>

      {/* Mensaje */}
      <div className="col-12 mb-3">
        <textarea
          name="mensaje"
          className="form-control"
          rows="4"
          placeholder="Escribe tu mensaje o comentario..."
          aria-label="Mensaje"
          required
        ></textarea>
      </div>

      {/* Botón enviar */}
      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-danger btn-lg px-5"
          disabled={isSending}
        >
          {isSending ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}