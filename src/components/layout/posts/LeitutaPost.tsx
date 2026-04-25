import { BlogPost } from "@/src/types/post.types";

interface LeituraPostProps {
  post: BlogPost;
}

export default function LeituraPost({ post }: LeituraPostProps) {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <img src={post.image} alt={post.title} className="w-150 mx-auto max-h-100 object-cover rounded-lg my-8" />

      <p className="text-sm text-(--gray) mb-2">
        {post.category} • {post.date}
      </p>

      <p className="text-gray-700 leading-relaxed">{post.description}</p>
    </section>
  );
}
