const characterSelection = document.querySelectorAll(".character");

characterSelection.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    character.classList.add("selected");

    changeSelectedChacarterImage(character);

    changeChacarterName(character);

    changeCharacterDescription(character);

    characterSelectionRemotion(character);
  });
});

function changeCharacterDescription(character) {
  const characterDescription = document.getElementById("character-description");
  characterDescription.innerText = character.getAttribute("data-description");
}

function changeChacarterName(character) {
  const characterName = document.getElementById("character-name");
  characterName.innerText = character.getAttribute("data-name");
}

function changeSelectedChacarterImage(character) {
  const fullBodyCharacterImage = document.querySelector(".full-body");
  const characterId = character.attributes.id.value;
  fullBodyCharacterImage.src = `./src/img/card-${characterId}.png`;
}

function characterSelectionRemotion(character) {
  character.addEventListener("mouseleave", () => {
    character.classList.remove("selected");
  });
}
