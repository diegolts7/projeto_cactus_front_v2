import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modernismo Funcional
 * - Página de boas-vindas com hero section
 * - Navegação para blog e outras seções
 * - Reutiliza componentes de Header e Footer
 */

export default function PublicHome() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="container text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bem-vindo à Cactos
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Seu espaço para descobrir conteúdo sobre tecnologia, games, hardware e muito mais
            </p>
            <button
              onClick={() => setLocation("/blog")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg inline-block"
            >
              Explorar Blog
            </button>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Posts em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border-2 border-orange-200 rounded-lg p-4 hover:border-orange-500 transition-colors"
                >
                  <div className="bg-orange-100 h-40 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Post em Destaque {i}</h3>
                  <p className="text-sm text-gray-600">Descrição do post em destaque</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-100 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quer saber mais sobre nosso conteúdo?
            </h2>
            <p className="text-gray-600 mb-6">Visite nosso blog e descubra artigos incríveis</p>
            <button
              onClick={() => setLocation("/blog")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all hover:shadow-lg"
            >
              Ir para Blog
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
