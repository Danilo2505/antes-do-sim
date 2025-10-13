// ----- Top Bar -----
class ComponentTopBar {
  constructor() {
    // --- Referências principais ---
    this.body = document.querySelector("body");
    this.topbar = document.querySelector("#header-top-bar");

    // --- Configurações ---
    this.threshold = 30; // distância em pixels da borda superior para ativar
    this.visible = false;
    this.lastY = Infinity;
    this.hideTimeout = null;

    // --- Event Listeners ---
    this.initEvents();

    // --- Execução inicial ---
    this.loadContent();
  }

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
    this.topbar.addEventListener("focusin", () => this.showBar());
    this.topbar.addEventListener("focusout", () => {
      setTimeout(() => {
        if (!this.topbar.contains(document.activeElement)) this.hideBar();
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

  // Carrega o conteúdo da Top Bar
  loadContent() {
    const nav = document.createElement("nav");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");

    a1.innerText = "Início";
    a1.href = "/index.html";

    a2.innerText = "Sobre";
    a2.href = "/about.html";

    nav.appendChild(a1);
    nav.appendChild(a2);
    this.topbar.appendChild(nav);
  }

  // Mostra a Top Bar
  showBar() {
    if (!this.visible) {
      this.visible = true;
      this.topbar.classList.add("show");
      this.body.style.setProperty(
        "margin-top",
        `${this.topbar.clientHeight}px`
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
      this.topbar.classList.remove("show");
      this.body.style.removeProperty("margin-top");
    }
  }
}

// Instancia
const topBar = new ComponentTopBar();
