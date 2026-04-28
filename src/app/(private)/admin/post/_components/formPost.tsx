"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import Editor from "@/src/components/layout/editor/Editor";
import ButtonCustom from "@/src/components/ui/button/Button";
import InputCustom from "@/src/components/ui/input/Input";
import InputImageCustom from "@/src/components/ui/input/InputImage";
import { BlogPost } from "@/src/types/post.types";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";

interface FormPostProps {
  initialData?: Omit<BlogPost, "id" | "date">;
  mode?: "edit" | "create";
}

export default function FormPost({ initialData, mode = "create" }: FormPostProps) {
  const [description, setDescription] = useState(initialData?.description || "");
  const [, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "");

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  const forMode = {
    create: {
      titleBtn: (
        <>
          Criar post <Plus />
        </>
      ),
      fn: (data: Omit<BlogPost, "id" | "date">) => {
        console.log("Criar post com os dados", data);
      },
      classBtn: "bg-green-500",
    },
    edit: {
      titleBtn: (
        <>
          Salvar <Edit />
        </>
      ),
      fn: (data: Omit<BlogPost, "id" | "date">) => {
        console.log("Editar post com os dados", data);
      },
      classBtn: "bg-blue-500",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    forMode[mode].fn({
      title,
      category,
      description,
      image: "",
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <InputImageCustom label="Capa" onChange={handleImageChange} />
      <InputCustom
        placeholder="Preencha o title"
        label="title"
        required
        classNameContainer="bg-secondary/50 border-gray-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputCustom
        placeholder="Preencha o category da postagem"
        label="category"
        required
        classNameContainer="bg-secondary/50 border-gray-300"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Field>
        <FieldLabel className="font-bold">
          Conteúdo
          <span className="text-destructive">*</span>
        </FieldLabel>
        <Editor onEditorChange={(c) => setDescription(c)} initialValue={description} />
      </Field>

      <ButtonCustom className={`w-fit ml-auto ${forMode[mode].classBtn}`} type="submit">
        {forMode[mode].titleBtn}
      </ButtonCustom>
    </form>
  );
}
