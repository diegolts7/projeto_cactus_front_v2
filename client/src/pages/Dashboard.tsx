import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modernismo Funcional
 * - Reutiliza paleta: Branco + Laranja (#FF9500) + Bege (#E8D4C4)
 * - Containers com fundo bege para seções
 * - Filtros e listagens em cards arredondados
 * - Botão de delete em cada seção
 */

interface Project {
  id: string;
  name: string;
  partner: string;
  description: string;
}

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState("2019");
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Projeto X",
      partner: "Sistema Operacional",
      description:
        "O Steam Deck utiliza a SteamOS, que é um sistema operacional baseado em Linux que oferece uma experiência otimizada para jogos. Além disso, o sistema da valve entrega uma experiência mais objetiva para acesso à biblioteca de games por meio de uma interface similar a Big Picture do Steam. Por outro lado, a maior parte dos notebooks é do segmento gamer, disponíveis no mercado brasileiro. Consiste com sistema operacional Windows 11 e recentemente com Linux, o que vira reduzir o custo dos equipamentos. O foco dos equipamentos é em processadores de alto desempenho com Windows 10 no Steam Deck. Porém, em dúvidas, os laptops também podem rodar a SteamOS com seu notebook gamer, assim como também é possível instalar o Windows no Steam Deck. Porém, em dúvidas, os laptops também podem rodar a SteamOS com seu notebook gamer, assim como também é possível instalar o Windows no Steam Deck. Porém, em dúvidas, os laptops também podem rodar a SteamOS com seu notebook gamer, assim como também é possível instalar o Windows no Steam Deck.",
    },
  ]);

  const professors = ["Professor X", "Professor Y", "Professor T"];
  const students = ["Aluno 1", "Aluno 2", "Aluno 3"];
  const years = ["2019", "2020", "2021", "2022", "2023", "2024"];

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header isAdmin={true} />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Year Filter */}
          <div className="bg-orange-100 rounded-2xl p-6 mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Ano
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Professors Section */}
          <div className="bg-orange-100 rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Professores</h2>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 min-h-[150px]">
              <div className="space-y-3">
                {professors.map((professor, index) => (
                  <p key={index} className="text-gray-700 font-medium">
                    {professor}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Students Section */}
          <div className="bg-orange-100 rounded-2xl p-6 mb-6 relative">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Alunos</h2>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Título
            </label>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 min-h-[150px]">
              <div className="space-y-3">
                {students.map((student, index) => (
                  <p key={index} className="text-gray-700 font-medium">
                    {student}
                  </p>
                ))}
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => {}}
              className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all hover:shadow-lg"
              aria-label="Deletar seção"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Projects Section */}
          {projects.map((project) => (
            <div key={project.id} className="bg-orange-100 rounded-2xl p-6 mb-6 relative">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{project.name}</h2>

              {/* Partner Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Parceiro
                </label>
                <Input
                  type="text"
                  value={project.partner}
                  readOnly
                  className="w-full bg-orange-50 border-2 border-orange-200 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              {/* Description Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Texto
                </label>
                <textarea
                  value={project.description}
                  readOnly
                  rows={8}
                  className="w-full bg-orange-50 border-2 border-orange-200 text-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                />
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all hover:shadow-lg"
                aria-label="Deletar projeto"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
