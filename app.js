function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi entrado. voc~e precisa digitar o nome de um personagem</p>"
        return 
    } 

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleUpperCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)) {
        // cria um novo elemento
       resultados += `
      <div class="item-resultado">
         <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
         </h2>
         <p class="descricao-meta">${dado.descricao}</p> 
         <a href="${dado.link}" target="_blank">Mais infrormações</a>
      </div>
    `;  
    }
  }

  if (!resultados) {
       resultados = "<p>Nada foi entrado</p>"
  }
  
  // Insere os resultados na seção HTML
  section.innerHTML = resultados;
}