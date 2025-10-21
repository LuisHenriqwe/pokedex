const layout = {
  nameElement: document.querySelector(".name"),
  numberElement: document.querySelector(".number"),
  typesContainer: document.querySelector(".detail ol"),
  imageElement: document.querySelector(".detail img"),
  stats: {
    hp: document.getElementById("hpFill"),
    attack: document.getElementById("ataqueFill"),
    defense: document.getElementById("defesaFill"),
    "special-attack": document.getElementById("ataqueEFill"),
    "special-defense": document.getElementById("defesaEFill"),
    speed: document.getElementById("velocidadeFill"),
  },
  base_experience: document.getElementById("experienciaFill"),
  height: document.getElementById("alturaFill"),
  weight: document.getElementById("pesoFill")
};

// Pega o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  pokeApi.getPokemonDetails({ url: `https://pokeapi.co/api/v2/pokemon/${id}` })
    .then(pokemon => renderPokemonDetails(pokemon))
    .catch(err => console.error(err));
}

// Renderiza dados no HTML
function renderPokemonDetails(pokemon) {
  layout.nameElement.textContent = pokemon.name;
  layout.numberElement.textContent = "#" + pokemon.number;
  layout.imageElement.src = pokemon.photo;

  const mainElement = document.querySelector("main");
  mainElement.className = ""; 
  mainElement.classList.add(pokemon.type);

  layout.typesContainer.innerHTML = pokemon.types
    .map(type => `<li class="type ${type}">${type}</li>`).join("");

  Object.keys(layout.stats).forEach(statName => {
    const value = pokemon.stats[statName] || 0;
    layout.stats[statName].style.width = Math.min(value, 100) + "%";
    const label = document.querySelector(`.${statName.replace("-", "")}-value`);
    if (label) label.textContent = value + "/100";
  });

  layout.base_experience.style.width = pokemon.base_experience + "%";
  document.querySelector(".experiencia-value").textContent = pokemon.base_experience + "/100";

  layout.height.style.width = pokemon.height + "%";
  document.querySelector(".altura-value").textContent = pokemon.height;

  layout.weight.style.width = pokemon.weight + "%";
  document.querySelector(".peso-value").textContent = pokemon.weight;
}

// Botão voltar
document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});
