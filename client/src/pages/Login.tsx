import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modernismo Funcional
 * - Reutiliza paleta: Branco + Laranja (#FF9500) + Bege (#E8D4C4)
 * - Container centralizado com fundo bege
 * - Campos com ícones integrados
 * - Botão de ação em laranja
 */

export default function Login() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular login - em produção, isso seria uma chamada de API
    setTimeout(() => {
      setIsLoading(false);
      // Redirecionar para página de criação de post
      setLocation("/posts");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header isAdmin={true} />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-orange-100 rounded-3xl p-8 shadow-lg">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Login Administrador
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Login
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
                  <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    required
                    className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {isLoading ? "Carregando..." : "ENTRAR"}
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 text-center">
              <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
                Esqueceu a senha? Recuperar
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
