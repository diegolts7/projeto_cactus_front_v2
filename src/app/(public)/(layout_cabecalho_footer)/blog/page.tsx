"use client";
import ListagemPosts from "@/src/components/layout/posts/ListagemPosts";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  return (
    <main className="flex-1 py-12">
      <div className="container-principal">
        <h1 className="text-4xl font-bold text-gray-900 mb-5">Blog</h1>

        <ListagemPosts onClickPostEvent={(id) => router.push(`/blog/${id}`)} />
      </div>
    </main>
  );
}
