import Posts from "@/src/data/posts.json";

interface DetalhesPostProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesPost({ params }: DetalhesPostProps) {
  const { id } = await params;

  const post = Posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <main className="container-principal py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <img src={post.image} alt={post.title} className="w-full max-h-[400px] object-cover rounded-lg mb-4" />

      <p className="text-sm text-gray-500 mb-2">
        {post.category} • {post.date}
      </p>

      <p className="text-gray-700">{post.description}</p>
    </main>
  );
}
