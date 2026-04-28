"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const TEditor = dynamic(() => import("@tinymce/tinymce-react").then((mod) => mod.Editor), { ssr: false });

interface EditorProps {
  initialValue?: string;
  onEditorChange?: (content: string) => void;
  style?: string;
}

export default function Editor({ initialValue = "", onEditorChange, style = "" }: EditorProps) {
  const editorRef = useRef(null);

  return (
    <TEditor
      apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      onEditorChange={(newContent) => onEditorChange?.(newContent)}
      init={{
        placeholder: "Comece a escrever seu conteúdo aqui...",
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "fullscreen",
        ],
        toolbar:
          "undo preview | blocks | bold italic | fontfamily fontsize | alignleft aligncenter alignright | bullist numlist",
        content_style: style,
      }}
    />
  );
}
