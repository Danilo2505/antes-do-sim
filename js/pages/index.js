const mainCards = document.querySelector("#main-cards");
const firstCard = mainCards.querySelector("section");

function activateNavigationButtons(parentElement) {
  const buttonNext = parentElement.querySelector("button.button-next");
  const buttonPrevious = parentElement.querySelector("button.button-previous");

  buttonNext.classList.remove("inactive-button");
  buttonNext.disabled = false;

  buttonPrevious.classList.remove("inactive-button");
  buttonPrevious.disabled = false;
}

function deactivateNavigationButtons(parentElement) {
  const buttonNext = parentElement.querySelector("button.button-next");
  const buttonPrevious = parentElement.querySelector("button.button-previous");

  buttonNext.classList.add("inactive-button");
  buttonNext.disabled = true;

  buttonPrevious.classList.add("inactive-button");
  buttonPrevious.disabled = true;
}

function updateNavigationButtons() {
  const elementWidth = firstCard.offsetWidth;
  const scrollLeft = mainCards.scrollLeft;
  const maxScroll = mainCards.scrollWidth;
  const divNavigationButtons = document.querySelector(
    "#div-cards-navigation-buttons"
  );

  if (scrollLeft === 0) {
    deactivateNavigationButtons(divNavigationButtons);
    const buttonNext = divNavigationButtons.querySelector("button.button-next");
    buttonNext.classList.remove("inactive-button");
    buttonNext.disabled = false;
  } else if (scrollLeft >= maxScroll - elementWidth) {
    deactivateNavigationButtons(divNavigationButtons);
    const buttonPrevious = divNavigationButtons.querySelector(
      "button.button-previous"
    );
    buttonPrevious.classList.remove("inactive-button");
    buttonPrevious.disabled = false;
  } else {
    activateNavigationButtons(divNavigationButtons);
  }
}

function previousCard() {
  const firstCardWidth = firstCard.offsetWidth;

  mainCards.scrollBy({ left: -firstCardWidth });

  updateNavigationButtons();
}

function nextCard() {
  const firstCardWidth = firstCard.offsetWidth;

  mainCards.scrollBy({ left: firstCardWidth });

  updateNavigationButtons();
}

// ----- Execução inicial -----
// Instancia os Componentes
const topBar = new ComponentTopBar();
const settingsPanel = new ComponentSettingsPanel();

updateNavigationButtons();
