import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer container">
        <div className="footer-informacoes">
          <h3>Equipe</h3>
          <nav>
            <ul className="lista-equipe">
              <li className="membro-item">
                <div className="topo-membro">
                  <span className="cargo">Coordenador</span>
                  <Link href="http://lattes.cnpq.br/5889651019588252" target="_blank" className="link-lattes">
                    Lattes ↗
                  </Link>
                </div>
                <span className="nome-membro">Prof. Ms. Antonio Gonçalves de Farias Junior</span>
              </li>

              <li className="membro-item">
                <div className="topo-membro">
                  <span className="cargo">Docente voluntária</span>
                  <Link href="http://lattes.cnpq.br/1062563715597922" target="_blank" className="link-lattes">
                    Lattes ↗
                  </Link>
                </div>
                <span className="nome-membro">Profa. Dra. Wilma Fernandes Pinheiro</span>
              </li>

              <li className="membro-item">
                <div className="topo-membro">
                  <span className="cargo">Téc. Adm. voluntária</span>
                  <Link href="http://lattes.cnpq.br/1716564808619228" target="_blank" className="link-lattes">
                    Lattes ↗
                  </Link>
                </div>
                <span className="nome-membro">Ms. Alexsandra Bezerra de Sousa</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-contato">
          <h3 className="contato">Redes Sociais</h3>
          <ul className="redes">
            <li>
              <img src="img/instagram.svg" alt="Instagram" />
              <Link href="https://www.instagram.com/cactus_cz/" target="_blank">
                @cactus_cz
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-contato">
          <h3 className="contato">Contato</h3>
          <ul className="redes">
            <li>
              <img src="img/zapIcon.png" alt="whatsapp" />
              <Link href="//wa.me/558388155741" target="_blank">
                +55 (83) 98815-5741
              </Link>
            </li>
            <li>
              <img src="img/email.svg" alt="email" />
              <Link href="mailto:cactus.cz@ifpb.edu.br">cactus.cz@ifpb.edu.br</Link>
            </li>
          </ul>
        </div>
        <div className="footer-informacoes">
          <h3>Endereço</h3>
          <ul>
            <li>Rua José Dantas Nobres</li>
            <li>Bairro Jardim Oásis</li>
            <li>IFPB Campus Cajazeiras</li>
          </ul>
        </div>
        <hr />
        <div className="footer-bottom">
          <img className="logo" src="img/CactusLogo.png" alt="Cactus" />

          <Link href="https://loopisjr.github.io/">www.loopisjr.com.br</Link>

          <a href="#" className="flex items-center gap-1">
            <img src="img/seta.svg" alt="seta" />
            <span>Voltar ao topo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
