import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Modernismo Funcional
 * - Reutiliza paleta: Branco + Laranja (#FF9500) + Bege (#E8D4C4)
 * - Cards com borda laranja e imagens
 * - Grid responsivo de posts
 * - Botão "Ver mais" para carregar mais posts
 */

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Steam Deck ou notebook gamer: saiba qual opção é a melhor para jogar",
    description: "Comparação entre as melhores opções para gamers em 2024",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    category: "Games",
  },
  {
    id: "2",
    title: "O que é hardware? Veja para que serve, exemplos, tipos existentes e mais",
    description: "Guia completo sobre componentes de hardware",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "Tecnologia",
  },
  {
    id: "3",
    title: "Melhor processador para jogos: 5 opções para melhorar o desempenho ao máximo",
    description: "Análise dos melhores processadores para gaming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "Hardware",
  },
  {
    id: "4",
    title: "PC até R$ 3.500: 5 máquinas intermediárias para trabalhar",
    description: "Melhores computadores para trabalho com orçamento limitado",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    category: "Computadores",
  },
  {
    id: "5",
    title: "LG lança monitor smart com sistema de TV no Brasil; veja preço",
    description: "Novo monitor inteligente da LG chega ao mercado brasileiro",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    category: "Monitores",
  },
  {
    id: "6",
    title: "Intel Core i9: 6 CPUs top de linha que valem a pena comprar em 2024",
    description: "Processadores topo de linha para máxima performance",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "Processadores",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Blog</h1>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border-4 border-orange-500 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <div className="w-full h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category */}
                  <span className="inline-block text-xs font-semibold text-orange-500 mb-2">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all hover:shadow-lg"
              onClick={() => {}}
            >
              Ver mais
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
