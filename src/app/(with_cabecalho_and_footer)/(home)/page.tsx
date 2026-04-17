import FormContato from "./_components/form_contato/_formContato";
import Projetos from "./_components/projetos/_projetos";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="apresentacao" id="apresentacao">
        <div className="flex justify-center">
          <img src="img/CactusApresentacao.png" alt="Apresentação Cactus" className="cactus-apresentacao" />
        </div>
        <h2>Construindo com a terra, crescendo com a comunidade</h2>
        <h3>
          <span className="destaque">Apoiamos</span> comunidades do Alto Sertão Paraibano com{" "}
          <span className="destaque">assistência técnica</span>, em bioconstrução, agroecologia e economia solidária.
        </h3>
      </section>

      <section className="conteudoInit" id="conteudoInit">
        <h3> O que fazemos? </h3>
        <p>Conheça as nossas áreas de atuação e especialidades</p>
        <div className="especialidades" id="especialidades">
          <div className="especialidade">
            <img src="img/arvoresIcon.png" alt="icone de arvores" />
            <span className="tituloCard"> Agroecologia </span>
            <p>
              Planejamento de espaços produtivos com base na permacultura, promovendo diversidade, cuidado com a água e
              regeneração do solo.
            </p>
          </div>
          <div className="especialidade">
            <img src="img/infraIcon.png" alt="icone de pilha de Infraestrutura" />
            <span className="tituloCard">Bioconstrução</span>
            <p>
              Assistência técnica para famílias urbanas e rurais de baixa renda construírem ou reformarem moradias
              dignas, confortáveis e adaptadas ao clima local.
            </p>
          </div>
          <div className="especialidade">
            <img src="img/inovacaoIcon.png" alt="icone de inovação" />
            <span className="tituloCard">Economia Solidária</span>
            <p>
              Apoio a grupos e comunidades na organização de arranjos produtivos locais, fortalecendo cooperação,
              geração de renda e autonomia coletiva.
            </p>
          </div>
        </div>
      </section>

      <Projetos />

      <section className="objetivos">
        <h3>O que queremos?</h3>
        <p className="subtitulo">Esses são alguns dos principais objetivos do Cactus</p>

        <div className="objetivos-container">
          <div className="objetivos-itens">
            <img className="objetivo-icon" src="img/estudanteIcon.png" alt="Icone de aluno" />
            <p>
              Prestar assistência técnica e consultoria especializada ao IFPB, à comunidade local, entidades públicas e
              privadas;
            </p>
          </div>

          <div className="objetivos-itens">
            <img className="objetivo-icon" src="img/estudanteIcon.png" alt="Icone de aluno" />
            <p>
              Gerar, sistematizar e publicar material referente a estudos e pesquisas sobre desenvolvimento sustentável;
            </p>
          </div>

          <div className="objetivos-itens">
            <img className="objetivo-icon" src="img/estudanteIcon.png" alt="Icone de aluno" />
            <p>Desenvolver programas de treinamento e desenvolvimento profissional;.</p>
          </div>

          <div className="objetivos-itens">
            <img className="objetivo-icon" src="img/estudanteIcon.png" alt="Icone de aluno" />
            <p>Incentivar e viabilizar o desenvolvimento de pesquisas com potencial inovador;</p>
          </div>
        </div>
      </section>

      <section className="contato" id="contato">
        <h3>Quer falar com a gente?</h3>
        <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

        <FormContato />
      </section>
    </>
  );
}
