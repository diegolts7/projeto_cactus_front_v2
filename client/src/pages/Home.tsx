import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trash2, Plus, Edit2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modernismo Funcional
 * - Paleta: Branco + Laranja (#FF9500) + Bege (#E8D4C4)
 * - Hierarquia clara através de tipografia e espaçamento
 * - Containers arredondados com fundo bege para seções
 * - Botões laranja com ícones integrados
 */

interface Section {
  id: string;
  title: string;
  text: string;
}

export default function PostCreation() {
  const [, setLocation] = useLocation();
  
  const handleLogout = () => {
    setLocation("/login");
  };
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [sections, setSections] = useState<Section[]>([
    { id: "1", title: "", text: "" },
    { id: "2", title: "", text: "" },
  ]);

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSectionChange = (id: string, field: string, value: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const addSection = () => {
    const newId = String(Math.max(...sections.map((s) => parseInt(s.id)), 0) + 1);
    setSections((prev) => [...prev, { id: newId, title: "", text: "" }]);
  };

  const deleteSection = (id: string) => {
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isAdmin={true} onLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-1 container py-8">
        {/* Action Buttons */}
        <div className="flex gap-3 justify-center mb-12">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg"
            onClick={() => {}}
          >
            <Plus size={18} />
            Criar Novo Post
          </Button>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg"
            onClick={() => {}}
          >
            <Edit2 size={18} />
            Editar Post
          </Button>
        </div>

        {/* Form Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Criação de Post</h1>

          {/* Title Input */}
          <div className="bg-orange-100 rounded-2xl p-6 mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Título
            </label>
            <Input
              type="text"
              placeholder="Digite o Título"
              value={formData.title}
              onChange={(e) => handleFormChange("title", e.target.value)}
              className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          {/* Subtitle Input */}
          <div className="bg-orange-100 rounded-2xl p-6 mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Subtítulo
            </label>
            <Input
              type="text"
              placeholder="Digite o Título"
              value={formData.subtitle}
              onChange={(e) => handleFormChange("subtitle", e.target.value)}
              className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={section.id} className="bg-orange-100 rounded-2xl p-6 mb-6 relative">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Seção {index + 1}
              </h3>

              {/* Section Title */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Título
                </label>
                <Input
                  type="text"
                  placeholder={`Digite o título da seção ${index + 1}`}
                  value={section.title}
                  onChange={(e) =>
                    handleSectionChange(section.id, "title", e.target.value)
                  }
                  className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              {/* Section Text */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Texto
                </label>
                <Input
                  type="text"
                  placeholder={`Digite o texto da seção ${index + 1}`}
                  value={section.text}
                  onChange={(e) =>
                    handleSectionChange(section.id, "text", e.target.value)
                  }
                  className="w-full bg-orange-50 border-orange-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteSection(section.id)}
                className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all hover:shadow-lg"
                aria-label="Deletar seção"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          {/* Add Section Button */}
          <div className="flex justify-center">
            <button
              onClick={addSection}
              className="border-2 border-orange-300 text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
            >
              <Plus size={18} />
              Nova Seção
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
