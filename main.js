
async function hamar() {
    const id = Math.floor(Math.random() * 50);
    const resposta = `https://api.disneyapi.dev/characters/${id}`;
    const resp = await fetch(resposta);
    const obj = await resp.json();
    const person = obj.data;
    document.getElementById(
        "personagem"
    ).innerHTML = `<img src="${person.imageUrl}">`;
    document.getElementById("nome").innerHTML = `Nome de personagem: ${person.name}`;

}
