// ----- Top Bar -----
class ComponentTopBar {
  constructor() {
    // --- Referências principais ---
    this.divTopSpacer = document.querySelector("#div-top-spacer");
    this.topBar = document.querySelector("#header-top-bar");

    // --- Configurações ---
    this.threshold = 30; // distância em pixels da borda superior para ativar
    this.visible = false;
    this.lastY = Infinity;
    this.hideTimeout = null;

    // --- Carrega o componente no HTML ---
    this.loadContent();

    // --- Event Listeners ---
    this.initEvents();
  }

  // Carrega o conteúdo da Top Bar
  loadContent() {
    const nav = document.createElement("nav");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");

    a1.innerText = "Início";
    a1.href = "./index.html";

    a2.innerText = "Testes";
    a2.href = "./tests.html";

    a3.innerText = "Sobre";
    a3.href = "./about.html";

    nav.appendChild(a1);
    nav.appendChild(a2);
    nav.appendChild(a3);
    this.topBar.appendChild(nav);
  }

  // Define os Event Listeners
  initEvents() {
    // Detecta movimento do mouse
    window.addEventListener("mousemove", (e) => {
      this.lastY = e.clientY;

      if (e.clientY <= this.threshold) {
        this.showBar();
        return;
      }

      // Se o ponteiro estiver longe do topo e a barra estiver visível, agendar esconder
      if (this.visible) {
        if (this.hideTimeout) clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(() => {
          if (this.lastY > this.threshold + 20) this.hideBar();
        }, 300);
      }
    });

    // Mostrar ao rolar para cima
    let lastScrollY = window.scrollY;
    window.addEventListener(
      "scroll",
      () => {
        const curr = window.scrollY;
        if (curr < lastScrollY) {
          // Rolando para cima
          this.showBar();
          if (this.hideTimeout) clearTimeout(this.hideTimeout);
          this.hideTimeout = setTimeout(() => this.hideBar(), 1500);
        }
        lastScrollY = curr;
      },
      { passive: true }
    );

    // Teclado: ESC fecha
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hideBar();
    });

    // Foco dentro/fora da barra
    this.topBar.addEventListener("focusin", () => this.showBar());
    this.topBar.addEventListener("focusout", () => {
      setTimeout(() => {
        if (!this.topBar.contains(document.activeElement)) this.hideBar();
      }, 120);
    });

    // Toque no topo em dispositivos touch
    window.addEventListener(
      "touchstart",
      (e) => {
        const touch = e.touches[0];
        if (touch && touch.clientY <= this.threshold) {
          this.showBar();
        }
      },
      { passive: true }
    );
  }

  // Mostra a Top Bar
  showBar() {
    if (!this.visible) {
      this.visible = true;
      this.topBar.classList.add("show");
      this.divTopSpacer.style.setProperty(
        "margin-top",
        `${
          this.topBar.clientHeight +
          Number(
            window
              .getComputedStyle(this.topBar, "::after")
              .height.replaceAll("px", "")
          )
        }px`
      );
    }

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  // Esconde a Top Bar
  hideBar() {
    if (this.visible) {
      this.visible = false;
      this.topBar.classList.remove("show");
      this.divTopSpacer.style.removeProperty("margin-top");
    }
  }
}

// ----- Audio Player -----
class AudioPlayer {
  constructor() {
    // --- Referências principais ---
    this.audioPlayer = document.querySelector("#div-audio-player");

    // --- Carrega o componente no HTML ---
    this.loadContent();

    this.buttonBack = this.audioPlayer.querySelector("#button-back");
    this.buttonPlayPause = this.audioPlayer.querySelector("#button-play-pause");
    this.buttonNext = this.audioPlayer.querySelector("#button-next");
    this.audio = document.querySelector("#audio-from-audio-player");

    this.audioIndex = 0;
    this.songs = [
      "./assets/media/audio/Matt Pridgyn - Second Wind [NCS Release].mp3",
      "./assets/media/audio/More Plastic - Rewind [NCS Release].mp3",
    ];

    // --- Event Listeners ---
    this.initEvents();
  }

  // Cria o conteúdo do Player (imagem, botões e áudio)
  loadContent() {
    // Cria imagem
    const img = document.createElement("img");
    img.src = "./assets/media/images/vinyl-4808792_1920.jpg";
    img.alt = "";

    // Cria container dos botões
    const controlsDiv = document.createElement("div");

    // --- Botão Voltar ---
    const buttonBack = document.createElement("button");
    buttonBack.id = "button-back";
    buttonBack.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
  <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z"/>
</svg>`;

    // --- Botão Play/Pause ---
    const buttonPlayPause = document.createElement("button");
    buttonPlayPause.id = "button-play-pause";
    buttonPlayPause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
    </svg>`;

    // --- Botão Próximo ---
    const buttonNext = document.createElement("button");
    buttonNext.id = "button-next";
    buttonNext.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z"/>
</svg>`;

    // Adiciona os botões
    controlsDiv.append(buttonBack, buttonPlayPause, buttonNext);

    // Cria o áudio
    const audio = document.createElement("audio");
    audio.id = "audio-from-audio-player";

    // Adiciona tudo ao container principal
    this.audioPlayer.append(img, controlsDiv, audio);
  }

  // Define os Event Listeners
  initEvents() {
    // Clique no Botão de Música Anterior
    this.buttonBack.addEventListener("click", () => {
      this.backSong();
    });

    // Clique no Botão de Play/Pause
    this.buttonPlayPause.addEventListener("click", () => {
      this.playPause();
    });

    // Clique no Botão de Música Seguinte
    this.buttonNext.addEventListener("click", () => {
      this.nextSong();
    });

    // Fim da Música, vai para a próxima música
    this.audio.addEventListener("ended", () => {
      this.nextSong();
    });

    // Define o Botão como Play e coloca uma música no Áudio
    this.setPlaySvg();
    this.audio.src = this.songs[this.audioIndex];
  }

  // --- Controle Visual ---
  // Atualiza o Botão de Play/Pause
  updatePlayPauseButton() {
    if (this.audio.paused) {
      this.setPauseSvg();
    } else {
      this.setPlaySvg();
    }
  }

  // Atualiza o Elemento de Audio de acordo com um índice
  updateAudioByIndex(index) {
    this.audioIndex = index;
    this.audio.pause();
    this.audio.src = this.songs[this.audioIndex];
    this.audio.play();
    this.setPauseSvg();
  }

  // Define o botão de Play
  setPlaySvg() {
    const playSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
    </svg>`;
    const element = xmlStringToHtmlElement(playSvg);

    this.buttonPlayPause.querySelector("svg").replaceWith(element);
  }

  // Define o botão de Pause
  setPauseSvg() {
    const pauseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
    </svg>`;
    const element = xmlStringToHtmlElement(pauseSvg);

    this.buttonPlayPause.querySelector("svg").replaceWith(element);
  }

  // --- Controle de Músicas ---
  // Volta para a Música Anterior
  backSong() {
    if (this.audioIndex > 0) {
      this.updateAudioByIndex(this.audioIndex - 1);
    } else {
      this.updateAudioByIndex(this.songs.length - 1);
    }
  }

  // Pausa ou Continua a Música
  playPause() {
    if (this.audio.paused) {
      this.setPauseSvg();
      this.audio.play();
    } else {
      this.setPlaySvg();
      this.audio.pause();
    }
  }

  // Vai para a Música Seguinte
  nextSong() {
    if (this.audioIndex < this.songs.length - 1) {
      this.updateAudioByIndex(this.audioIndex + 1);
    } else {
      this.updateAudioByIndex(0);
    }
  }
}

// Instancia
const topBar = new ComponentTopBar();
const audioPlayer = new AudioPlayer();
