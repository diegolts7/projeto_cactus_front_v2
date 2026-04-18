import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-orange-500 text-white">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Mapa */}
          <div>
            <h3 className="text-lg font-bold mb-4">Mapa</h3>
            <nav className="space-y-2">
              <button
                onClick={() => setLocation("/")}
                className="block text-sm hover:underline transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => setLocation("/blog")}
                className="block text-sm hover:underline transition-colors"
              >
                Blog
              </button>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Instagram size={18} />
                @cactos
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Linkedin size={18} />
                Cactos
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Facebook size={18} />
                Cactos
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <a
                href="mailto:contato@cactos.com.br"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Mail size={18} />
                contato@cactos.com.br
              </a>
              <a
                href="tel:+5583999999999"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Phone size={18} />
                (83) 99999-9999
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-bold mb-4">Endereço</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={18} className="flex-shrink-0 mt-1" />
              <div>
                <p>Rua José Dantas Nobres</p>
                <p>Bairro Jardim Oásis</p>
                <p>IFPB Campus Cajazeiras</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-400 pt-8 flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/cactus-logo.png" alt="Cactos Logo" className="h-12 w-auto brightness-0 invert" />
          </div>

          {/* Website */}
          <div className="text-sm">www.cactos.com.br</div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm hover:underline transition-colors mt-4 md:mt-0"
          >
            <span>Voltar ao topo</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
