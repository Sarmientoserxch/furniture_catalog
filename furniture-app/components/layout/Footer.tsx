import Link from 'next/link';
import { RiSofaFill, RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-warm-600 border-t-4 border-primary-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RiSofaFill className="text-5xl text-warm-600 drop-shadow-lg" />
              <div className="flex flex-col text-2xl text-warm-600 leading-tight">
                <span className="font-medium">Muebles</span>
                <span className="font-medium -mt-1">Sarmiento Sanchez</span>
              </div>
            </div>
            <p className="text-warm-500 text-sm">
              Creando espacios únicos con muebles de calidad excepcional.
              Tu hogar merece lo mejor.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-warm-400">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-warm-600 hover:text-warm-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/categoria/sala" className="text-warm-600 hover:text-warm-400 transition-colors">
                  Salas
                </Link>
              </li>
              <li>
                <Link href="/categoria/comedor" className="text-warm-600 hover:text-warm-400 transition-colors">
                  Comedores
                </Link>
              </li>
              <li>
                <Link href="/categoria/alcoba" className="text-warm-600 hover:text-warm-400 transition-colors">
                  Alcobas
                </Link>
              </li>
              <li>
                <Link href="/categoria/decoracion" className="text-warm-600 hover:text-warm-400 transition-colors">
                  Decoración
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y redes */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-warm-400">Contáctanos</h3>
            <p className="text-warm-600 mb-4 text-sm">
              ¿Tienes preguntas? Estamos aquí para ayudarte.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '573144766493'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                aria-label="WhatsApp"
              >
                <RiWhatsappFill className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <RiFacebookFill className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <RiInstagramFill className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-warm-700 text-sm">
            &copy; {currentYear} Muebles Sarmiento Sanchez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
