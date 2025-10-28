// Instancia os Componentes
const topBar = new ComponentTopBar();
const audioPlayer = new ComponentAudioPlayer();
const settingsPanel = new ComponentSettingsPanel();

async function route() {
  // Escreve
  await effectTypewriter({
    selector: "#div-typewriter .texto-1",
    text: "Eu guardei cada memória...",
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-2",
    text: "Cada detalhe...",
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-3",
    text: "Cada sorriso...",
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-4",
    text: "E agora só falta uma última resposta...",
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-5",
    text: "Quer namorar comigo?",
  });

  // Apaga
  await effectTypewriter({
    selector: "#div-typewriter .texto-5",
    text: "Quer namorar comigo?",

    erase: true,
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-4",
    text: "E agora só falta uma última resposta...",

    erase: true,
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-3",
    text: "Cada sorriso...",

    erase: true,
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-2",
    text: "Cada detalhe...",

    erase: true,
  });
  await effectTypewriter({
    selector: "#div-typewriter .texto-1",
    text: "Eu guardei cada memória...",

    erase: true,
  });
}

route();
