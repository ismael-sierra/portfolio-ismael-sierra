import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje", error);
      });
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contacto
      </h2>

      {success && (
        <p className="text-green-600 dark:text-green-400 text-center mb-6">
          ¡Gracias por tu mensaje! Te responderé pronto.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block mb-2 font-semibold">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 border-none focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 border-none focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Mensaje</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 border-none focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;
