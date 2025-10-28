async function effectTypewriter({
  selector,
  text,
  speedMS = 80,
  initialText = "",
  cursor = true,
  loop = false,
  delayStart = 0,
  delayEnd = 1000,
  erase = false,
  onFinish = null,
}) {
  const element = document.querySelector(selector);

  // Escrever
  if (!erase) {
    // Define o texto inicial do elemento
    element.textContent = initialText;
    // Faz um loop indo de 0 ao último índice do texto
    for (let i = 0; i < text.length; i++) {
      // Atualiza o conteúdo do elemento com o próximo caractere
      element.textContent = element.textContent + text[i];
      // Espera o tempo de cada caractere
      await delay(speedMS);
    }
  }

  // Apagar
  else {
    // Faz um loop indo de 0 ao último índice do texto
    for (let i = 0; i < text.length; i++) {
      // Atualiza o conteúdo do elemento sem o último caractere
      element.textContent = element.textContent.slice(0, -1);
      // Espera o tempo de cada caractere
      await delay(speedMS);
    }
  }

  if (onFinish) onFinish();
}
