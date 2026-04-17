import Link from "next/link";
import "./cabecalho.css";

export default function Cabecalho() {
  return (
    <header>
      <div className="nav-bar">
        <Link href="index.html" className="logo">
          <img src="img/CactusLogo.png" alt="Logo Cactus" className="logo-img" />
        </Link>
        <nav>
          <ul className="lista-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#conteudoInit">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/#contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
