"use client";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import Image from "next/image";
import EmptyIcon from "@/public/img/empty-con.svg";

interface EmptyCustomProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function EmptyCustom({ title = "Sem resultados", description, content, size = "md" }: EmptyCustomProps) {
  const sizes = {
    sm: {
      icon: "w-10 h-10",
      title: "text-sm",
      description: "text-xs",
      spacing: "py-6",
    },
    md: {
      icon: "w-20 h-20",
      title: "text-base",
      description: "text-sm",
      spacing: "py-10",
    },
    lg: {
      icon: "w-30 h-30",
      title: "text-lg",
      description: "text-base",
      spacing: "py-14",
    },
  };

  const current = sizes[size];

  return (
    <Empty className={current.spacing}>
      <EmptyHeader>
        <EmptyMedia variant="default" className={current.icon}>
          <Image src={EmptyIcon} alt="Icone de sem resultados" className="w-full" priority />
        </EmptyMedia>

        <EmptyTitle className={current.title}>{title}</EmptyTitle>

        {description && <EmptyDescription className={current.description}>{description}</EmptyDescription>}
      </EmptyHeader>

      {content && <EmptyContent>{content}</EmptyContent>}
    </Empty>
  );
}
