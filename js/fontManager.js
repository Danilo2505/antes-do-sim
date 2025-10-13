const btnFontToggle = document.querySelector("#button-fonte");

// Obtém a fonte salva no localStorage ou define como "default" por padrão
const fontSystem = localStorage.getItem("fontSystem") || "default";

// Função para definir a fonte atual e alterar o ícone do botão
function defineCurrentFont(font, btnFontToggle) {
  // Ícones diferentes para cada fonte (opcional, mas dá um charme visual)
  const defaultContent = `<span style='font-family: "Quicksand", sans-serif;'>A</span>`;

  const playfairContent = `<span style='font-family: "PlayfairDisplay", serif;'>A</span>`;

  const segoeUIContent = `<span style='font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;'>A</span>`;

  document.documentElement.setAttribute("data-font", font);

  if (btnFontToggle) {
    if (font === "playfair") btnFontToggle.innerHTML = playfairContent;
    else if (font === "segoeUI") btnFontToggle.innerHTML = segoeUIContent;
    else btnFontToggle.innerHTML = defaultContent;
  }
}

// Configura o evento de clique
btnFontToggle.addEventListener("click", () => {
  const fonts = ["default", "playfair", "segoeUI"];
  const currentFont = localStorage.getItem("fontSystem") || "default";
  const nextFont = fonts[(fonts.indexOf(currentFont) + 1) % fonts.length]; // alterna ciclicamente
  localStorage.setItem("fontSystem", nextFont);
  defineCurrentFont(nextFont, btnFontToggle);
});

// Define a fonte ao carregar a página
defineCurrentFont(fontSystem, btnFontToggle);
