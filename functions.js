const pokemonDropdown = document.getElementById("pokemon")
const pokemonCard = document.querySelector(".pokemon-card")

const pokemonChoice = (pokemon) => {
    pokemonCard.innerHTML = null;
    const pokemonImage = document.createElement("img");
    const pokemonBody = document.createElement("p");
    pokemonImage.classList = "pokemonImageCSS";
    // pokemonDropdown.classList = ".pokemon-cardCSS"
    if (pokemon === "Bulbasaur"){
        pokemonImage.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        pokemonBody.textContent = "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
        }
    if (pokemon === "Charizard"){
        pokemonImage.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        }
    if (pokemon === "Pikachu"){
        pokemonImage.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        }
    if (pokemon === "Blastoise"){
        pokemonImage.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
        }
    if (pokemon === "Garchomp"){
        pokemonImage.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png"
        }
    pokemonCard.append(pokemonImage)
    pokemonCard.append(pokemonBody)
    }

pokemonDropdown.onchange = (event) => pokemonChoice(event.target.value)
