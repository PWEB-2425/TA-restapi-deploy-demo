//const APIURL = "http://localhost:3000/nomes";
const APIURL="https://ta-restapi-deploy-demo.onrender.com/"
async function mostranomes() {
    // identificar o div para colocar os nomes
    const divnomes = document.getElementById("lista");
    // reset do conteúdo
    divnomes.innerHTML = "";
    respostaapi = await fetch(APIURL);
    nomesapi = await respostaapi.json();

    for (cadanome of nomesapi) {
        let novop = document.createElement("p");
        novop.innerHTML = cadanome.nome;
        divnomes.appendChild(novop);
    } 
}

mostranomes();