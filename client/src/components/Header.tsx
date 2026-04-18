import { useLocation } from "wouter";
import { LogOut } from "lucide-react";

interface HeaderProps {
  isAdmin?: boolean;
  onLogout?: () => void;
}

export default function Header({ isAdmin = false, onLogout }: HeaderProps) {
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Sobre", href: "/sobre" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => setLocation("/")}
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/cactus-logo.png" alt="Cactos Logo" className="h-10 w-auto" />
        </button>

        {/* Navigation */}
        {!isAdmin && (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => setLocation(item.href)}
                className={`text-sm font-medium transition-colors ${
                  location === item.href
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!isAdmin && (
            <button
              onClick={() => setLocation("/contato")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:shadow-lg"
            >
              CONTATO
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => {
                if (onLogout) onLogout();
                setLocation("/");
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Sair</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
