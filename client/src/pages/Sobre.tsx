import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Modernismo Funcional
 * - Página informativa sobre a empresa/projeto
 * - Reutiliza componentes de Header e Footer
 */

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Nós</h1>

          {/* About Section */}
          <section className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quem Somos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Cactos é uma plataforma dedicada a trazer conteúdo de qualidade sobre tecnologia,
              games, hardware e inovação. Nosso objetivo é informar, educar e inspirar nossa comunidade
              com artigos bem pesquisados e análises aprofundadas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Acreditamos que a tecnologia deve ser acessível e compreensível para todos, por isso
              criamos conteúdo que equilibra profundidade técnica com clareza.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missão</h3>
                <p className="text-gray-700">
                  Fornecer informações confiáveis e atualizadas sobre tecnologia e inovação
                </p>
              </div>
              <div className="bg-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visão</h3>
                <p className="text-gray-700">
                  Ser a referência em conteúdo tecnológico para a comunidade brasileira
                </p>
              </div>
              <div className="bg-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
                <p className="text-gray-700">
                  Qualidade, transparência, inovação e compromisso com nossos leitores
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
            <p className="text-gray-700 mb-6">
              Somos uma equipe apaixonada por tecnologia e dedicada a criar conteúdo que faz diferença.
              Cada membro traz sua expertise e perspectiva única para enriquecer nossos artigos.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
