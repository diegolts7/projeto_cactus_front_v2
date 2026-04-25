"use client";
import BackButton from "@/src/components/layout/backButton/BackButton";
import Editor from "@/src/components/layout/editor/Editor";
import InputCustom from "@/src/components/ui/input/Input";
import { useState } from "react";

export default function CriarPost() {
  const [, setConteudo] = useState("");

  const [image, setImage] = useState<string | null>(null);

  const handleFile = (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  return (
    <main className="container-menor flex flex-col gap-8 pt-10 pb-20">
      <BackButton />

      <form className="flex flex-col gap-5">
        <div className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload"
            onChange={(e) => handleFile(e.target.files?.[0] || null)}
          />

          <label htmlFor="upload" className="block cursor-pointer">
            {!image ? (
              <p>Arraste uma imagem ou clique para selecionar</p>
            ) : (
              <img src={image} alt="preview" className="max-h-64 mx-auto rounded-lg" />
            )}
          </label>
        </div>

        <InputCustom
          placeholder="Preencha o titulo"
          label="Titulo"
          required
          classNameContainer="bg-secondary border-gray-300"
        />
        <InputCustom
          placeholder="Preencha o assunto da postagem"
          label="Assunto"
          required
          classNameContainer="bg-secondary border-gray-300"
        />
        <Editor onEditorChange={(c) => setConteudo(c)} />
      </form>
    </main>
  );
}
