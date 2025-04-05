const Testimonials = () => {
    return (
      <section className="bg-cafe text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dorado mb-12">Testimonios</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-cafe-darker p-6 rounded-lg shadow-lg border border-dorado">
              <p className="text-lg italic mb-4">
                “Armando transformó nuestra empresa con sus soluciones innovadoras. ¡Un verdadero profesional!”
              </p>
              <cite className="block text-dorado font-semibold">– Cliente Satisfecho</cite>
            </div>
            <div className="bg-cafe-darker p-6 rounded-lg shadow-lg border border-dorado">
              <p className="text-lg italic mb-4">
                “Gracias a Armando, nuestros procesos son más eficientes y sostenibles. ¡Altamente recomendado!”
              </p>
              <cite className="block text-dorado font-semibold">– Otro Cliente Feliz</cite>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  