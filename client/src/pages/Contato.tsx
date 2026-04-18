import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modernismo Funcional
 * - Página de contato com formulário e informações
 * - Reutiliza componentes de Header e Footer
 */

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Contato</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entre em Contato</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:loopsjr@gmail.com"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      loopsjr@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefone</h3>
                    <a
                      href="tel:+5583999999999"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      (83) 99999-9999
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Rua José Dantas Nobres<br />
                      Bairro Jardim Oásis<br />
                      IFPB Campus Cajazeiras
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome
                  </label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Assunto
                  </label>
                  <Input
                    type="text"
                    placeholder="Assunto da mensagem"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    required
                    className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Sua mensagem aqui..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
