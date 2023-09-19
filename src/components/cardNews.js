class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }
  build() {
    //cardRoot --------------------------------------------------------------------
    const cardRoot = document.createElement('div');
    cardRoot.setAttribute('class', 'card')




    //cardLeft ---------------------------------------------------------------------
    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card-left')

    //cardLeft content
    const autor = document.createElement('span')
    autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous")

    const titleNews = document.createElement('a')
    titleNews.href = this.getAttribute('link-url') || 'https://github.com/Caco0'
    titleNews.textContent = this.getAttribute('title')


    const paragrafo = document.createElement('p')
    paragrafo.textContent = this.getAttribute('content')

    //cardLeft filhos
    cardLeft.appendChild(autor)
    cardLeft.appendChild(titleNews)
    cardLeft.appendChild(paragrafo)

    // cardRight -------------------------------------------------------------------
    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card-right')

    //cardRight content
    const imagem = document.createElement('img')
    imagem.src = this.getAttribute('photo') || './assets/img/icons8-empire.svg'
    imagem.alt = this.getAttribute('alt-photo') || 'não foi possível a foto e seu texto padrão'

    //cardRight filhos
    cardRight.appendChild(imagem)

    //cardRoot filhos-----------------------------------------------------------------/root
    cardRoot.appendChild(cardLeft)
    cardRoot.appendChild(cardRight)

    return cardRoot
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
          display: flex;
          width: 70%;
          flex-direction: row;
          margin: 2rem auto;
          border-radius: 10px;
          background-color: rgb(91, 124, 151);
          -webkit-box-shadow: 20px 20px 5px 0px rgba(0, 0, 0, 0.19);
          -moz-box-shadow: 20px 20px 5px 0px rgba(0, 0, 0, 0.19);
          box-shadow: 20px 20px 5px 0px rgba(0, 0, 0, 0.19);
          justify-content: space-between;
        }
        .card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-weight: 600;
          padding: 10px;
        }
        .card-left p {
          color: rgb(68, 68, 68);
          font-weight: 200;
          margin-top: 5px;
        }
        .card-left span {
          font-weight: bold;
        }
        .card-left a {
          margin-top: 15px;
          font-size: 1.7rem;
          text-decoration: none;
          color: black;
        }
        .card-right {
          width: 50%;
          padding: 10px;
        }
        .card-right img {
          width: 100%;
        }

        `
    return style
  }
}
customElements.define('card-news', Cardnews)