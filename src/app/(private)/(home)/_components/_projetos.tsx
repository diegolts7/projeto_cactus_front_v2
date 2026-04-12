"use client";
import "./projetos.css";

export default function Projetos() {
  return (
    <section className="projetos">
      <h3>Nossos projetos</h3>
      <div className="container-projetos">
        <div
          className="projetosCards"
          //  onclick="openModal(
          //      ['img/projetos/modeloATHIS4.png', 'img/projetos/modeloATHIS1.png','img/projetos/modeloATHIS2.png','img/projetos/modeloATHIS3.png' ],
          //      'Escritório modelo ATHIS e Canteiro Escola',
          //      'Bioconstrução',
          //      'Ambiente pedagógico de experimentação prática de técnicas construtivas de baixo impacto ambiental e prestação de serviços de assistência técnica para habitação de interesse social rural e urbana à famílias com renda de até três salários mínimos.'
          //  )"
        >
          <img src="img/projetos/modeloATHIS4.png" alt="Exemplo de projeto" />
          <span className="tipoProject">Bioconstrução</span>
          <p>Escritório modelo ATHIS e Canteiro Escola</p>
        </div>

        <div
          className="projetosCards"
          //  onclick="openModal(
          //      ['img/projetos/CSA1.png','img/projetos/CSA2.png','img/projetos/CSA3.png','img/projetos/CSA4.png'],
          //      'Comunidade que sustenta agricultura - CSA Cajazeiras',
          //      'Agroecologia',
          //      'Famílias da cidade que se tornam co-agricultores dando apoio à produção agroecológica de agricultores familiares de Cajazeiras que semanalmente trazem uma cesta de produtos de época livres de agrotóxicos para as famílias que deram suporte a sua produção.'
          //  )"
        >
          <img src="img/projetos/CSA4.png" alt="Exemplo de projeto" />
          <span className="tipoProject">Agroecologia</span>
          <p>Comunidade que sustenta agricultura - CSA Cajazeiras</p>
        </div>

        <div
          className="projetosCards"
          //  onclick="openModal(
          //      ['img/projetos/plastico1.png','img/projetos/plastico2.png','img/projetos/plastico3.png','img/projetos/plastico4.png'],
          //      'Plastico Precioso Cajazeiras',
          //      'Economia comunitária',
          //      'Comunidade de recicladores de plásticos que faz parte da comunidade global Precious Plastic que dá autonomia aos cidadãos produzirem produtos feitos dos plásticos reciclados através de pequenas máquinas de trituração e modelagem que podem ser montadas pela própria comunidade.  '
          //  )"
        >
          <img src="img/projetos/plastico2.png" alt="Exemplo de projeto" />
          <span className="tipoProject">Economia comunitária</span>
          <p>Plastico Precioso Cajazeiras</p>
        </div>
      </div>
    </section>
  );
}
