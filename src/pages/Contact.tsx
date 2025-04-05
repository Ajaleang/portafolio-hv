const Contact = () => {
    return (
      <section className="bg-cafe-claro text-white py-16 px-4 md:px-20" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-dorado">Contáctame</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded bg-cafe border border-gray-600 text-white"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded bg-cafe border border-gray-600 text-white"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded bg-cafe border border-gray-600 text-white"
                  placeholder="Tu mensaje..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-dorado text-cafe font-semibold py-2 px-6 rounded hover:bg-yellow-400 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
  
          {/* Mapa */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-dorado">Ubicación</h3>
            <div className="w-full h-80 rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.676245018262!2d-74.08175358523874!3d4.609710396669482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99e62dfe9c71%3A0xa2d45fc569f30e1c!2sBogot%C3%A1!5e0!3m2!1ses!2sco!4v1617912450946!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Bogotá"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  