export default function ModalProjetoDetalhes() {
  return (
    <div id="projectModal" className="modal">
      <div className="modal-content">
        <span
          className="close-button"
          //   onclick="closeModal()"
        >
          &times;
        </span>

        <div className="carousel-container">
          <button
            className="carousel-btn prev"
            //   onclick="mudarImagem(-1)"
          >
            &#10094;
          </button>
          <img id="modal-img" src="" alt="Imagem do Projeto" />
          <button
            className="carousel-btn next"
            //   onclick="mudarImagem(1)"
          >
            &#10095;
          </button>
        </div>

        <div className="modal-body">
          <span id="modal-specialty" className="tipoProject"></span>
          <h3 id="modal-title"></h3>
          <p id="modal-description"></p>
        </div>
      </div>
    </div>
  );
}
