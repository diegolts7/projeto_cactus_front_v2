"use client";
import { useCallback, useMemo, useState } from "react";
import ButtonCustom from "../../ui/button/Button";
import Post from "./Post";
import Posts from "@/src/data/posts.json";

interface ListagemPostsProps {
  onClickPostEvent?: (id: string) => void;
}

const ITENS_PER_PAGE = 6;

export default function ListagemPosts({ onClickPostEvent }: ListagemPostsProps) {
  const [visibleCount, setVisibleCount] = useState(ITENS_PER_PAGE);

  const postsSemDescription = Posts.map((p) => ({
    id: p.id,
    title: p.title,
    image: p.image,
    category: p.category,
    date: p.date,
  }));

  const visiblePosts = useMemo(() => {
    return postsSemDescription.slice(0, visibleCount);
  }, [postsSemDescription, visibleCount]);

  const hasMore = visibleCount < postsSemDescription.length;

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITENS_PER_PAGE);
  }, [setVisibleCount]);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {visiblePosts.map((post) => (
          <Post post={post} key={post.id} onClickEvent={onClickPostEvent} />
        ))}
      </div>

      {hasMore && (
        <div className="w-full flex justify-center">
          <ButtonCustom
            onClick={handleLoadMore}
            className="bg-primary w-fit"
            size="md"
            title="Clique para ver mais postagens"
          >
            Ver mais
          </ButtonCustom>
        </div>
      )}
    </section>
  );
}
