// Instancia os Componentes
const topBar = new ComponentTopBar();
const audioPlayer = new ComponentAudioPlayer();
const settingsPanel = new ComponentSettingsPanel();

async function route() {
  const textos = [
    "Eu guardei cada memória...",
    "Cada detalhe...",
    "Cada sorriso...",
    "E agora só falta uma última resposta...",
    "Quer namorar comigo?",
  ];

  // --- Escrita sequencial ---
  for (const [i, frase] of textos.entries()) {
    await effectTypewriter({
      selector: `#div-typewriter .texto-${i + 1}`,
      text: frase,
      speedMS: 120,
      delayEnd: 500,
    });
  }

  /*
  // Espera antes de começar a apagar
  await delay(1500);

  // --- Apagar em ordem reversa ---
  for (let i = textos.length - 1; i >= 0; i--) {
    await effectTypewriter({
      selector: `#div-typewriter .texto-${i + 1}`,
      eraseOnly: true,
      speedMS: 100,
    });
  }
    */

  // --- Opcional: repetir tudo em loop ---
  // Se quiser, basta chamar route() novamente no final
  // await route();
}

route();
