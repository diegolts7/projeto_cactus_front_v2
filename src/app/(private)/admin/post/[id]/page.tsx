import Posts from "@/src/data/posts.json";
import BackButton from "../../../../../components/layout/backButton/BackButton";
import LeituraPost from "@/src/components/layout/posts/LeitutaPost";
import ButtonCustom from "@/src/components/ui/button/Button";

interface DetalhesPostAdminProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesPostAdmin({ params }: DetalhesPostAdminProps) {
  const { id } = await params;

  const post = Posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <main className="container-menor flex flex-col gap-6 pt-10 pb-20">
      <div className="flex justify-between">
        <BackButton />
        <div className="flex gap-4">
          <ButtonCustom className="w-fit rounded-sm bg-blue-400">Modo edição</ButtonCustom>
          <ButtonCustom className="w-fit rounded-sm bg-destructive/70 ">Excluir</ButtonCustom>
        </div>
      </div>

      <LeituraPost post={post} />
    </main>
  );
}
