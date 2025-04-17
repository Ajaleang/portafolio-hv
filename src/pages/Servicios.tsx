import { FaLaptopCode, FaMicrochip, FaIndustry } from 'react-icons/fa';

const Servicios = () => {
  return (
    <section className="bg-cafe text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-dorado mb-12 text-center">Servicios Profesionales</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Desarrollo Web */}
          <div className="bg-cafe-claro rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-dorado text-3xl mr-3" />
              <h3 className="text-2xl font-semibold">Desarrollo de Sitios Web</h3>
            </div>
            <p className="mb-6 text-justify">
              Diseñamos y desarrollamos sitios web a medida, optimizados para SEO y adaptables a dispositivos móviles. Ofrecemos planes según tus necesidades:
            </p>
            <ul className="space-y-4">
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Plan Básico</h4>
                <p>Landing page de una sola sección. Ideal para presencia en línea básica.</p>
                <p className="text-dorado font-semibold">Desde $450.000 COP</p>
              </li>
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Plan Profesional</h4>
                <p>Sitio de hasta 5 páginas (Inicio, Servicios, Sobre mí, Contacto, etc.).</p>
                <p className="text-dorado font-semibold">Desde $750.000 COP</p>
              </li>
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Plan E-commerce</h4>
                <p>Tienda en línea con pasarela de pagos, carrito de compras y gestión de productos.</p>
                <p className="text-dorado font-semibold">Desde $1.500.000 COP</p>
              </li>
            </ul>
          </div>

          {/* Soluciones IoT */}
          <div className="bg-cafe-claro rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaMicrochip className="text-dorado text-3xl mr-3" />
              <h3 className="text-2xl font-semibold">Soluciones IoT e Inteligentes</h3>
            </div>
            <p className="mb-6 text-justify">
              Implementamos soluciones tecnológicas utilizando microcontroladores y sensores para automatizar y optimizar procesos. Algunos ejemplos:
            </p>
            <ul className="space-y-4">
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Monitoreo Ambiental</h4>
                <p>Sistemas para medir temperatura, humedad y calidad del aire en tiempo real.</p>
                <p className="text-dorado font-semibold">Desde $1.000.000 COP</p>
              </li>
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Automatización de Iluminación</h4>
                <p>Control inteligente de luces basado en presencia y horarios programados.</p>
                <p className="text-dorado font-semibold">Desde $500.000 COP</p>
              </li>
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Control de Acceso</h4>
                <p>Sistemas de acceso mediante tarjetas RFID o reconocimiento facial.</p>
                <p className="text-dorado font-semibold">Desde $1.000.000 COP</p>
              </li>
            </ul>
          </div>

          {/* Automatización Industrial y Control */}
          <div className="bg-cafe-claro rounded-lg shadow-lg p-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <FaIndustry className="text-dorado text-3xl mr-3" />
              <h3 className="text-2xl font-semibold">Automatización Industrial & Control</h3>
            </div>
            <p className="mb-6 text-justify">
              Ofrecemos servicios avanzados de diseño e implementación de sistemas de automatización industrial utilizando microcontroladores, PLCs y plataformas IoT. También desarrollamos modelos y algoritmos para el control de plantas y procesos físicos.
            </p>
            <ul className="space-y-4">
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Automatización de Procesos</h4>
                <p>Integración de sensores y actuadores para controlar líneas de producción y procesos industriales.</p>
                <p className="text-dorado font-semibold">Desde $3.500.000 COP</p>
              </li>
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Control de Plantas</h4>
                <p>Implementación de controladores PID, LQR, y sistemas de control adaptativo para plantas físicas o simuladas.</p>
                <p className="text-dorado font-semibold">Desde $4.000.000 COP</p>
              </li>
              <li className="border-l-4 border-dorado pl-4">
                <h4 className="text-xl font-bold">Supervisión y Telemetría</h4>
                <p>Desarrollo de paneles de visualización y dashboards con recolección de datos en tiempo real.</p>
                <p className="text-dorado font-semibold">Desde $1.500.000 COP</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Servicios;
