"use client";
import Link from "next/link";
import "./cabecalho.css";
import { usePathname } from "next/navigation";

export default function Cabecalho() {
  const pathName = usePathname();

  const paletaCoresConformePath =
    pathName === "/"
      ? { headerClass: "header-primary", colorItemDestaque: "text-[var(--color-secondary)]" }
      : { headerClass: "header-secondary", colorItemDestaque: "text-[var(--color-primary)]" };

  const destacarItem = (path: string) => {
    if (path === pathName) return paletaCoresConformePath.colorItemDestaque;

    return "";
  };

  return (
    <header className={paletaCoresConformePath.headerClass}>
      <div className="nav-bar">
        <Link href="/" className="logo">
          <img src="img/CactusLogo.png" alt="Logo Cactus" className="logo-img" />
        </Link>
        <nav>
          <ul className="lista-nav">
            <li>
              <Link href="/" className={destacarItem("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#contato">Contato</Link>
            </li>
            <li>
              <Link href="/blog" className={destacarItem("/blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className={destacarItem("/dashboard")}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
