"use client";

import ButtonCustom from "@/src/components/ui/button/Button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  return (
    <ButtonCustom
      variant="outline"
      className="w-fit rounded-sm border border-primary text-primary hover:bg-primary/20 transition-all duration-300"
      title="Voltar para o blog"
      onClick={() => window.history.back()}
    >
      <ChevronLeft /> Voltar
    </ButtonCustom>
  );
}
