# 🌹 Antes do Sim

Um guia para transformar uma ideia romântica em uma experiência interativa e inesquecível.  
Este plano mistura emoção com técnica — porque até o amor precisa de um pouco de organização. 💞

---

## 🎯 Objetivo

Criar um site interativo, poético e pessoal que conduza a pessoa amada por uma jornada de lembranças, terminando com o pedido:  
**“Quer namorar comigo?”**

O projeto será feito apenas com **HTML**, **CSS** e **JavaScript**, sem necessidade de back-end.  
Tudo será carregado localmente: leve, íntimo e feito à mão.

---

## 🪞 1. Planejamento e conteúdo

1. Reúna tudo que faz parte da história:
   - Fotos, vídeos curtos e trilhas sonoras significativas.  
   - Frases curtas ou trechos de conversas que marcaram vocês.  
   - Datas e lugares que merecem ser lembrados.  
2. Organize o conteúdo em ordem emocional, não necessariamente cronológica — pense em **como a pessoa deve se sentir** ao percorrer cada parte.  
3. Escreva pequenos textos para cada memória (1–2 parágrafos).  
4. Escolha a música ou o som de fundo principal (instrumental ou ambiente).  

💡 **Dica:** imagine o site como um pequeno filme interativo — cada seção é uma cena.

---

## 🧱 2. Protótipo em HTML

1. Crie o arquivo `index.html`.  
2. Estruture o corpo em seções:  
   - `intro` — início suave, convite à jornada.  
   - `first-meeting` — o começo de tudo.  
   - `moments` — lembranças e aventuras.  
   - `meaning` — o que essa pessoa representa pra você.  
   - `proposal` — o grande pedido.  
3. Use apenas HTML sem estilo por enquanto, com imagens e botões de navegação simples.  
4. Teste se é possível percorrer todas as seções com links ou botões.  

✅ **Checkpoint:** estrutura básica navegável, mesmo sem CSS.

---

## 🎨 3. Estilo e atmosfera (CSS)

1. Defina a paleta de cores — tons suaves (bege, rosa, dourado ou o tema do casal).  
2. Escolha fontes expressivas:  
   - Títulos com algo elegante (ex: *Playfair Display*).  
   - Texto simples e legível (ex: *Quicksand*).  
3. Aplique transições leves entre seções (`opacity`, `transform`, `filter`).  
4. Adicione fundo musical visual: gradientes, imagens com desfoque ou parallax.  
5. Torne o design **mobile-first**, pois provavelmente será visto em um celular.  

💡 **Dica:** priorize espaços, não encha de elementos. O silêncio visual também emociona.

---

## 🎬 4. Animações e narrativa (CSS + JS)

1. Use classes CSS como `.hidden`, `.fade-in`, `.slide-up`.  
2. Controle a visibilidade via JavaScript:  
   ```js
   function showSection(id) {
     document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
     document.getElementById(id).classList.remove('hidden');
   }
```
3. Adicione **transições suaves** entre seções — quando uma termina, a próxima aparece com fade.
4. Experimente animações poéticas:
    - Letras aparecendo uma a uma (efeito "digitação").
    - Fotos flutuando levemente no fundo.
    - Pequenos corações subindo na tela (CSS `animation`).

✅ **Checkpoint:** experiência fluida, com ritmo e emoção.

---

## 💌 5. Interatividade e emoções (JavaScript)

1. Faça botões “Continuar” e “Voltar” que chamem `showSection()`.
2. Adicione música de fundo controlada por JS (iniciar após clique do usuário).
3. No clímax (“Quer namorar comigo?”):
    - Botão **“Sim”** → dispara confete, som de celebração e animação de corações.
    - Botão **“Não”** → se afasta ou “foge” com o mouse (efeito divertido).
4. Use `setTimeout` para sincronizar textos e sons — crie pausas dramáticas.

💡 **Dica:** pense como um diretor: cada clique é uma batida emocional.

---

## 🎧 6. Mídia e som

1. Adicione trilha sonora com `<audio>` e controle de volume em JS.
2. Utilize fade-in/fade-out entre seções para suavizar a transição.
3. Otimize os arquivos de áudio (mp3 leve, 1–2 MB máx.).
4. Teste em celulares para garantir que a reprodução inicia apenas após interação.

✅ **Checkpoint:** música e efeitos funcionando sem travamentos.

---

## ♿ 7. Detalhes e acessibilidade

1. Adicione textos alternativos (`alt`) em todas as imagens.
2. Garanta contraste suficiente entre fundo e texto.
3. Permita navegação via teclado (`Tab`, `Enter`, `ArrowRight`).
4. Teste a leitura em voz alta (screen readers).
5. Ajuste durações de animações — não muito rápidas, nem cansativas.

💡 **Dica:** quanto mais acessível, mais fluido e elegante o site se torna.

---

## 🧪 8. Polimento e testes

1. Teste em vários dispositivos e navegadores.
2. Otimize imagens (formato WebP ou compressão leve).
3. Ajuste tempos de animação e delays entre seções.
4. Peça para um amigo revisar a fluidez e o impacto emocional.
5. Corrija pequenos detalhes visuais (bordas, sombras, transições).

✅ **Checkpoint:** jornada completa, sem erros visuais ou travamentos.

---

## 🚀 9. Publicação

1. Crie um repositório Git e suba o projeto.
2. Publique no **GitHub Pages** ou **Netlify**.
3. Teste o link final no celular que será usado no momento do pedido.
4. Se quiser, prepare um QR Code ou atalho de tela para abrir rapidamente.
💡 **Dica:** prefira uma URL curta e pessoal — algo que soe íntimo e fácil de lembrar.

---

## 💭 10. Revisão final antes do grande momento

- [ ] Textos e fotos revisados.
- [ ] Música equilibrada (volume e tempo).
- [ ] Efeitos testados no dispositivo principal.
- [ ] Backup do projeto salvo.
- [ ] Link final testado offline (modo cache).

Tudo pronto? Respire fundo.  
Quando ela/ele chegar à última página, o site dirá o que você já sente há tempos.

---

> “Antes do Sim” não é só um site — é uma lembrança digital, um gesto de amor,  
> e talvez o início de uma nova história. 💖
