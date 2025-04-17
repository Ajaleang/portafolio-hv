import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    if (!form.current) return;

    try {
      emailjs.init('mc6YTZRg94Fv8zWyu');
      
      const formData = {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value
      };

      // Enviar el mensaje principal
      await emailjs.send(
        'service_yhudzxv',
        'template_9efvrsc',
        formData,
        'mc6YTZRg94Fv8zWyu'
      );

      // Enviar el autoreply
      await emailjs.send(
        'service_yhudzxv',
        'template_jxr5wsc',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          to_email: formData.user_email,
          message: formData.message
        },
        'mc6YTZRg94Fv8zWyu'
      );

      setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
      form.current.reset();
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Error al enviar el mensaje: ${error.text || 'Verifica tu conexión y las credenciales de EmailJS'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
      <section className="bg-cafe-claro text-white py-16 px-4 md:px-20" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-dorado">Contáctame</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
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
                  name="user_email"
                  className="w-full p-3 rounded bg-cafe border border-gray-600 text-white"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded bg-cafe border border-gray-600 text-white"
                  placeholder="Tu mensaje..."
                  required
                />
              </div>
              {submitStatus.type && (
                <div className={`p-4 rounded ${submitStatus.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-dorado text-cafe font-semibold py-2 px-6 rounded hover:bg-yellow-400 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
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
  