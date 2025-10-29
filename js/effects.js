/**
 * Aplica o efeito de máquina de escrever em um elemento.
 * 
 * Modos de uso:
 *  - Escrita simples (erase = false)
 *  - Escrita + apagar (erase = true)
 *  - Apenas apagar o texto atual (eraseOnly = true)
 * 
 * Recursos:
 *  - Loop opcional
 *  - Controle externo (pause, resume, stop)
 *  - Cursor visual com piscar configurável
 */
async function effectTypewriter({
  selector,
  text = "",
  speedMS = 120, // velocidade padrão (~8 caracteres/s)
  initialText = "",
  cursor = true,
  cursorBlink = true,
  cursorBlinkSpeedMS = 600,
  loop = false,
  delayStart = 0,
  delayEnd = 1000,
  erase = false,
  eraseOnly = false,
  onFinish = null,
}) {
  // --- Busca o elemento alvo no DOM ---
  const element = document.querySelector(selector);
  if (!element) return;

  // --- Estado de controle externo ---
  let paused = false;
  let stopped = false;

  const controls = {
    pause: () => (paused = true),
    resume: () => (paused = false),
    stop: () => (stopped = true),
    get isPaused() {
      return paused;
    },
    get isStopped() {
      return stopped;
    },
  };

  // --- Configuração do cursor ---
  const hadCursorBefore = element.classList.contains("with-cursor");

  if (cursor && !hadCursorBefore) {
    element.classList.add("with-cursor");

    // Define velocidade do piscar ou desativa totalmente
    const blinkSpeed = cursorBlink ? `${cursorBlinkSpeedMS}ms` : "0ms";
    element.style.setProperty("--cursor-blink-speed", blinkSpeed);
  }

  // --- Delay inicial antes de começar ---
  await delay(delayStart);

  // --- Loop principal ---
  do {
    // --- Caso 1: Apenas apagar texto existente ---
    if (eraseOnly) {
      const currentLength = element.textContent.length;
      for (let i = currentLength; i > 0; i--) {
        while (paused && !stopped) await delay(100);
        if (stopped) break;

        element.textContent = element.textContent.slice(0, -1);
        await delay(speedMS);
      }

      if (stopped) break;
      if (loop) await delay(delayEnd);
      continue; // volta ao início do loop
    }

    // --- Caso 2: Escrita normal ---
    element.textContent = initialText;

    for (let i = 0; i < text.length; i++) {
      while (paused && !stopped) await delay(100);
      if (stopped) break;

      element.textContent += text[i];
      await delay(speedMS);
    }

    if (stopped) break;

    // Espera antes de apagar (ou reiniciar)
    await delay(delayEnd);

    // --- Caso 3: Escrever e apagar ---
    if (erase) {
      for (let i = text.length; i > 0; i--) {
        while (paused && !stopped) await delay(100);
        if (stopped) break;

        element.textContent = element.textContent.slice(0, -1);
        await delay(speedMS);
      }

      if (stopped) break;
    }

    // Espera antes de repetir, se loop estiver ativo
    if (loop) await delay(delayEnd);

  } while (loop && !stopped);

  // --- Limpeza do cursor ---
  if (cursor && !hadCursorBefore) {
    element.classList.remove("with-cursor");
    element.style.removeProperty("--cursor-blink-speed");
  }

  // --- Callback final ---
  if (onFinish) await onFinish();

  // --- Retorna os controles externos ---
  return controls;
}
