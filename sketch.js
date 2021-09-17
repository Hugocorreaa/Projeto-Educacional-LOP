//===== Legenda =====

// tela = 0 -> menu
// tela = 1 -> iniciar - Fase 1
// tela = 1.2 -> Fase 2
// tela = 1.3 -> Fase 3
// tela = 1.4 -> Fase 4
// tela = 1.5 -> Fase 5
// tela = 1.6 -> Fase 6
// tela = 1.7 -> Fase 7
// tela = 1.8 -> Fase 8
// tela = 2 -> instruções
// tela = 3 -> creditos
// tela = 4 -> você errou!
// tela = 5 -> vitoria!

//===== Variáveis ======
let tela = 0;
let cont = 1;

let contador = 0;
let tempo = 0;
let andargarota = 120;
let andarmario = 5;
let andardino = 100;
let andarninja = 40;
let andargaroto = 20;

let garota = [];
let mario = [];
let dino = [];
let ninja = [];
let garoto = [];

// Proporções
function setup() {
  createCanvas(800, 600);
}

// ====== PRELOAD ======
function preload() {
  // === Imagens ====
  // erro
  error = loadImage("erro/erro.png");
  voltarr = loadImage("erro/voltar.png");
  voltarrhover = loadImage("erro/voltarhover.png");

  //menu
  einstein = loadImage("menu/img/einstein.jpg");
  title = loadImage("menu/img/limited.png");
  imginiciar = loadImage("menu/img/iniciar.png");
  imginstrucoes = loadImage("menu/img/instrucoes.png");
  imgcreditos = loadImage("menu/img/creditos.png");
  hoveriniciar = loadImage("menu/img/hoveriniciar.png");
  hoverinstrucoes = loadImage("menu/img/hoverinstrucoes.png");
  hovercreditos = loadImage("menu/img/hovercreditos.png");

  //vitoria
  trofeu = loadImage("vitoria/trofeu.png");

  // == Iniciar
  // fase 1
  numero1 = loadImage("iniciar/fase1/fase1.png");
  semana = loadImage("iniciar/fase1/stqqsd.png");
  alternativa1_1 = loadImage("iniciar/fase1/01.png");
  alternativa2_1 = loadImage("iniciar/fase1/02.png");
  alternativa3_1 = loadImage("iniciar/fase1/03.png");
  alternativa4_1 = loadImage("iniciar/fase1/04.png");
  alternativa1_1hover = loadImage("iniciar/fase1/01hover.png");
  alternativa2_1hover = loadImage("iniciar/fase1/02hover.png");
  alternativa3_1hover = loadImage("iniciar/fase1/03hover.png");
  alternativa4_1hover = loadImage("iniciar/fase1/04hover.png");

  // fase 2
  numero2 = loadImage("iniciar/fase2/fase2.png");
  alternativa1_2 = loadImage("iniciar/fase2/A.png");
  alternativa2_2 = loadImage("iniciar/fase2/B.png");
  alternativa3_2 = loadImage("iniciar/fase2/C.png");
  alternativa4_2 = loadImage("iniciar/fase2/D.png");
  alternativa1_2hover = loadImage("iniciar/fase2/ahover.png");
  alternativa2_2hover = loadImage("iniciar/fase2/bhover.png");
  alternativa3_2hover = loadImage("iniciar/fase2/chover.png");
  alternativa4_2hover = loadImage("iniciar/fase2/dhover.png");

  // fase 3
  numero3 = loadImage("iniciar/fase3/fase3.png");

  alternativa1_3 = loadImage("iniciar/fase3/A.png");
  alternativa2_3 = loadImage("iniciar/fase3/B.png");
  alternativa3_3 = loadImage("iniciar/fase3/C.png");
  alternativa4_3 = loadImage("iniciar/fase3/D.png");
  alternativa1_3hover = loadImage("iniciar/fase3/AHover.png");
  alternativa2_3hover = loadImage("iniciar/fase3/BHover.png");
  alternativa3_3hover = loadImage("iniciar/fase3/CHover.png");
  alternativa4_3hover = loadImage("iniciar/fase3/DHover.png");
  resposta = loadImage("iniciar/fase3/resposta.png");
  respostahover = loadImage("iniciar/fase3/respostahover.png");

  // fase 4
  numero4 = loadImage("iniciar/fase4/fase4.png");

  alternativa1_4 = loadImage("iniciar/fase4/A.png");
  alternativa2_4 = loadImage("iniciar/fase4/B.png");
  alternativa3_4 = loadImage("iniciar/fase4/C.png");
  alternativa4_4 = loadImage("iniciar/fase4/D.png");
  alternativa1_4hover = loadImage("iniciar/fase4/AHover.png");
  alternativa2_4hover = loadImage("iniciar/fase4/BHover.png");
  alternativa3_4hover = loadImage("iniciar/fase4/CHover.png");
  alternativa4_4hover = loadImage("iniciar/fase4/DHover.png");

  // fase 5
  numero5 = loadImage("iniciar/fase5/fase5.png");
  esta = loadImage("iniciar/fase5/Esta.png");
  estou = loadImage("iniciar/fase5/Estou.png");

  alternativa1_5 = loadImage("iniciar/fase5/A.png");
  alternativa2_5 = loadImage("iniciar/fase5/B.png");
  alternativa1_5hover = loadImage("iniciar/fase5/AHover.png");
  alternativa2_5hover = loadImage("iniciar/fase5/BHover.png");

  // fase 6
  numero6 = loadImage("iniciar/fase6/fase6.png");
  numero6hover = loadImage("iniciar/fase6/fase6hover.png");

  alternativa1_6 = loadImage("iniciar/fase6/A.png");
  alternativa2_6 = loadImage("iniciar/fase6/B.png");
  alternativa3_6 = loadImage("iniciar/fase6/C.png");

  alternativa1_6hover = loadImage("iniciar/fase6/AHover.png");
  alternativa2_6hover = loadImage("iniciar/fase6/BHover.png");
  alternativa3_6hover = loadImage("iniciar/fase6/CHover.png");

  // fase 7
  numero7 = loadImage("iniciar/fase7/fase7.png");

  alternativa1_7 = loadImage("iniciar/fase7/A.png");
  alternativa2_7 = loadImage("iniciar/fase7/B.png");
  alternativa3_7 = loadImage("iniciar/fase7/C.png");
  alternativa4_7 = loadImage("iniciar/fase7/D.png");

  alternativa1_7hover = loadImage("iniciar/fase7/AHover.png");
  alternativa2_7hover = loadImage("iniciar/fase7/BHover.png");
  alternativa3_7hover = loadImage("iniciar/fase7/CHover.png");
  alternativa4_7hover = loadImage("iniciar/fase7/DHover.png");

  // fase 8
  numero8 = loadImage("iniciar/fase8/fase8.png");

  alternativa1_8 = loadImage("iniciar/fase8/A.png");
  alternativa2_8 = loadImage("iniciar/fase8/B.png");
  alternativa3_8 = loadImage("iniciar/fase8/C.png");
  alternativa4_8 = loadImage("iniciar/fase8/D.png");

  alternativa1_8hover = loadImage("iniciar/fase8/AHover.png");
  alternativa2_8hover = loadImage("iniciar/fase8/BHover.png");
  alternativa3_8hover = loadImage("iniciar/fase8/CHover.png");
  alternativa4_8hover = loadImage("iniciar/fase8/DHover.png");

  garota[0] = loadImage("iniciar/fase8/cutegirlfiles/png/run1.png");
  garota[1] = loadImage("iniciar/fase8/cutegirlfiles/png/run2.png");
  garota[2] = loadImage("iniciar/fase8/cutegirlfiles/png/run3.png");
  garota[3] = loadImage("iniciar/fase8/cutegirlfiles/png/run4.png");
  garota[4] = loadImage("iniciar/fase8/cutegirlfiles/png/run5.png");
  garota[5] = loadImage("iniciar/fase8/cutegirlfiles/png/run6.png");
  garota[6] = loadImage("iniciar/fase8/cutegirlfiles/png/run7.png");
  garota[7] = loadImage("iniciar/fase8/cutegirlfiles/png/run8.png");
  garota[8] = loadImage("iniciar/fase8/cutegirlfiles/png/run9.png");
  garota[9] = loadImage("iniciar/fase8/cutegirlfiles/png/run10.png");
  garota[10] = loadImage("iniciar/fase8/cutegirlfiles/png/run11.png");
  garota[11] = loadImage("iniciar/fase8/cutegirlfiles/png/run12.png");
  garota[12] = loadImage("iniciar/fase8/cutegirlfiles/png/run13.png");
  garota[13] = loadImage("iniciar/fase8/cutegirlfiles/png/run14.png");
  garota[14] = loadImage("iniciar/fase8/cutegirlfiles/png/run15.png");
  garota[15] = loadImage("iniciar/fase8/cutegirlfiles/png/run16.png");
  garota[16] = loadImage("iniciar/fase8/cutegirlfiles/png/run17.png");
  garota[17] = loadImage("iniciar/fase8/cutegirlfiles/png/run18.png");
  garota[18] = loadImage("iniciar/fase8/cutegirlfiles/png/run19.png");
  garota[19] = loadImage("iniciar/fase8/cutegirlfiles/png/run20.png");

  mario[0] = loadImage("iniciar/fase8/mario/png/run_1.png");
  mario[1] = loadImage("iniciar/fase8/mario/png/run_2.png");
  mario[2] = loadImage("iniciar/fase8/mario/png/run_3.png");
  mario[3] = loadImage("iniciar/fase8/mario/png/run_4.png");
  mario[4] = loadImage("iniciar/fase8/mario/png/run_5.png");
  mario[5] = loadImage("iniciar/fase8/mario/png/run_6.png");
  mario[6] = loadImage("iniciar/fase8/mario/png/run_7.png");
  mario[7] = loadImage("iniciar/fase8/mario/png/run_8.png");

  dino[0] = loadImage("iniciar/fase8/dino/png/run_1.png");
  dino[1] = loadImage("iniciar/fase8/dino/png/run_2.png");
  dino[2] = loadImage("iniciar/fase8/dino/png/run_3.png");
  dino[3] = loadImage("iniciar/fase8/dino/png/run_4.png");
  dino[4] = loadImage("iniciar/fase8/dino/png/run_5.png");
  dino[5] = loadImage("iniciar/fase8/dino/png/run_6.png");
  dino[6] = loadImage("iniciar/fase8/dino/png/run_7.png");
  dino[7] = loadImage("iniciar/fase8/dino/png/run_8.png");

  ninja[0] = loadImage("iniciar/fase8/ninja/png/run_1.png");
  ninja[1] = loadImage("iniciar/fase8/ninja/png/run_2.png");
  ninja[2] = loadImage("iniciar/fase8/ninja/png/run_3.png");
  ninja[3] = loadImage("iniciar/fase8/ninja/png/run_4.png");
  ninja[4] = loadImage("iniciar/fase8/ninja/png/run_5.png");
  ninja[5] = loadImage("iniciar/fase8/ninja/png/run_6.png");
  ninja[6] = loadImage("iniciar/fase8/ninja/png/run_7.png");
  ninja[7] = loadImage("iniciar/fase8/ninja/png/run_8.png");
  ninja[8] = loadImage("iniciar/fase8/ninja/png/run_9.png");

  garoto[0] = loadImage("iniciar/fase8/flatboy/png/run1.png");
  garoto[1] = loadImage("iniciar/fase8/flatboy/png/run2.png");
  garoto[2] = loadImage("iniciar/fase8/flatboy/png/run3.png");
  garoto[3] = loadImage("iniciar/fase8/flatboy/png/run4.png");
  garoto[4] = loadImage("iniciar/fase8/flatboy/png/run5.png");
  garoto[5] = loadImage("iniciar/fase8/flatboy/png/run6.png");
  garoto[6] = loadImage("iniciar/fase8/flatboy/png/run7.png");
  garoto[7] = loadImage("iniciar/fase8/flatboy/png/run8.png");
  garoto[8] = loadImage("iniciar/fase8/flatboy/png/run9.png");
  garoto[9] = loadImage("iniciar/fase8/flatboy/png/run10.png");
  garoto[10] = loadImage("iniciar/fase8/flatboy/png/run11.png");
  garoto[11] = loadImage("iniciar/fase8/flatboy/png/run12.png");
  garoto[12] = loadImage("iniciar/fase8/flatboy/png/run13.png");
  garoto[13] = loadImage("iniciar/fase8/flatboy/png/run14.png");
  garoto[14] = loadImage("iniciar/fase8/flatboy/png/run15.png");

  //instruções
  bginstrucoes = loadImage("instrucoes/img/bginstrucoes.png");

  //creditos
  bgcreditos = loadImage("creditos/img/bgcreditos.png");
  voltar = loadImage("creditos/img/voltar.png");
  hovervoltar = loadImage("creditos/img/hovervoltar.png");

  // === Fonte ===
  fontPress = loadFont("fontes/PressStart2P-Regular.ttf");
}

//======================= Menu ==========================
function menu() {
  background(0);
  image(einstein, 0, 0);

  //Titulo
  image(title, 80, 80);

  //Botões
  image(imginiciar, 270, 230);
  image(imginstrucoes, 270, 300);
  image(imgcreditos, 270, 370);

  // ============== Hover mouse ==============
  //hover iniciar
  if (mouseX > 270 && mouseX < 500 && mouseY > 230 && mouseY < 295) {
    image(hoveriniciar, 270, 230);
    // Hover instrucões
  } else if (mouseX > 270 && mouseX < 500 && mouseY > 280 && mouseY < 360) {
    image(hoverinstrucoes, 270, 300);

    //hover creditos
  } else if (mouseX > 270 && mouseX < 500 && mouseY > 370 && mouseY < 430) {
    image(hovercreditos, 270, 370);
  }
}

//======= Instruções =======
function instrucao() {
  background(0);
  image(bginstrucoes, 0, 0);
  image(voltar, 600, 530);

  if (mouseX > 600 && mouseX < 772 && mouseY > 530 && mouseY < 570) {
    image(hovervoltar, 600, 530);

    //voltar para menu
    if (mouseIsPressed) {
      tela = 0;
    }
  }
}

//========= Créditos =========
function creditos() {
  background(0);
  image(bgcreditos, 0, 0);
  image(voltar, 308, 500);

  //hover voltar
  if (mouseX > 308 && mouseX < 480 && mouseY > 500 && mouseY < 550) {
    image(hovervoltar, 308, 500);

    //voltar para menu
    if (mouseIsPressed) {
      tela = 0;
    }
  }
}

// ======== Tela de erro ==========
function erro() {
  background(999);
  image(error, 0, 0);
  image(voltarr, 200, 500);

  if (mouseX > 200 && mouseX < 440 && mouseY > 500 && mouseY < 565) {
    image(voltarrhover, 200, 500);
  }
}

// ======== Tela de vitoria ==========
function win() {
  background(999);
  image(trofeu, 220, 290);

  textFont(fontPress);
  textSize(65);
  text("PARABÉNS !", 100, 120);

  textSize(26);
  text("Você terminou o jogo com: ", 80, 170);
  text(cont, 260, 220);
  text("tentivas", 300, 220);

  image(voltarr, 500, 530);

  if (mouseX > 500 && mouseX < 740 && mouseY > 530 && mouseY < 595) {
    image(voltarrhover, 500, 530);
  }
}

//============== Iniciar JOGO ===============
function iniciar() {
  // === FASE 1 ===
  background(999);
  image(numero1, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("Continue a sequência", 50, 105);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  image(semana, 150, 200);
  image(alternativa1_1, 150, 300);
  image(alternativa2_1, 150, 450);
  image(alternativa3_1, 450, 300);
  image(alternativa4_1, 450, 450);

  //hover alternativas fase 1
  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_1hover, 150, 300);
  } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
    image(alternativa2_1hover, 150, 450);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa3_1hover, 450, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
    image(alternativa4_1hover, 450, 450);
  }
}

// ==== FASE 2 ====
function fase2() {
  background(999);
  image(numero2, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("25/12 ?", 300, 180);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  image(alternativa1_2, 150, 300);
  image(alternativa2_2, 150, 450);
  image(alternativa3_2, 450, 284);
  image(alternativa4_2, 450, 455);

  //hover alternativas fase 2
  if (mouseX > 150 && mouseX < 400 && mouseY > 350 && mouseY < 415) {
    image(alternativa1_2hover, 150, 300);
    //Alternativa correta. Ao clicar passará para próxima fase.
  } else if (mouseX > 150 && mouseX < 380 && mouseY > 480 && mouseY < 550) {
    image(alternativa2_2hover, 150, 450);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 350 && mouseY < 415) {
    image(alternativa3_2hover, 450, 284);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 480 && mouseY < 550) {
    image(alternativa4_2hover, 450, 455);
  }
}

// === FASE 3 ===
function fase3() {
  background(999);
  image(numero3, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("Qual ano estamos ?", 100, 105);

  image(alternativa1_3, 150, 300);
  image(alternativa2_3, 150, 450);
  image(alternativa3_3, 450, 300);
  image(alternativa4_3, 450, 450);

  image(resposta, 300, 580);

  //hover alternativas fase 3
  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_3hover, 150, 300);
  } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
    image(alternativa2_3hover, 150, 450);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa3_3hover, 450, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
    image(alternativa4_3hover, 450, 450);
    //Resposta certa
  } else if (mouseX > 470 && mouseX < 520 && mouseY > 580 && mouseY < 590) {
    image(respostahover, 471, 580);
  }
}

// === FASE 4 ===
function fase4() {
  background(999);
  image(numero4, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("Qual a cor do botão ?", 50, 150);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  image(alternativa1_4, 150, 300);
  image(alternativa2_4, 150, 450);
  image(alternativa3_4, 450, 300);
  image(alternativa4_4, 450, 450);

  //hover alternativas fase 4
  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_4hover, 150, 300);
  } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
    image(alternativa2_4hover, 150, 450);

    //Resposta certa
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa3_4hover, 450, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
    image(alternativa4_4hover, 450, 450);
  }
}

// === FASE 5 ===
function fase5() {
  background(999);
  image(numero5, 10, 8);

  textFont(fontPress);
  textSize(36);
  text(" gostando", 310, 105);
  text("do jogo ?", 240, 165);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  image(esta, 180, 70);

  image(alternativa1_5, 150, 300);
  image(alternativa2_5, 450, 300);

  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_5hover, 150, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa2_5hover, 450, 300);
  } else if (mouseX > 170 && mouseX < 325 && mouseY > 60 && mouseY < 110) {
    image(estou, -15, 60);
  }
}

// === FASE 6 ===
function fase6() {
  background(999);
  image(numero6, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("Qual a cor azul ?", 50, 150);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  image(alternativa1_6, 150, 300);
  image(alternativa2_6, 450, 300);
  image(alternativa3_6, 300, 400);

  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_6hover, 150, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa2_6hover, 450, 300);
  } else if (mouseX > 300 && mouseX < 532 && mouseY > 400 && mouseY < 465) {
    image(alternativa3_6hover, 300, 400);
  } else if (mouseX > 10 && mouseX < 80 && mouseY > 5 && mouseY < 75) {
    image(numero6hover, 10, 8);
  }
}

// === FASE 7 ===
function fase7() {
  background(999);
  image(numero7, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("Qual sobrenome do", 130, 150);
  text("criador ?", 290, 210);
  textSize(12);
  text("Hugo © 2021", 350, 600);

  image(alternativa1_7, 150, 300);
  image(alternativa2_7, 150, 450);
  image(alternativa3_7, 450, 300);
  image(alternativa4_7, 450, 450);

  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_7hover, 150, 300);
  } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
    image(alternativa2_7hover, 150, 450);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa3_7hover, 450, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
    image(alternativa4_7hover, 450, 450);
  }
}

// === FASE 8 ===
function fase8() {
  background("#E2D4BE");
  image(numero8, 10, 8);

  textFont(fontPress);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  tempo = tempo + 1;
  andargarota = andargarota + 7;
  image(garota[contador % 19], andargarota, 10);
  if (tempo > 1) {
    contador = contador + 1;
    tempo = 0;
  }

  andarmario = andarmario + 10;
  image(mario[contador % 7], andarmario, 60);
  if (tempo > 1) {
    contador = contador + 1;
    tempo = 0;
  }

  andardino = andardino + 10;
  image(dino[contador % 7], andardino, 150);
  if (tempo > 1) {
    contador = contador + 1;
    tempo = 0;
  }

  andarninja = andarninja + 10;
  image(ninja[contador % 8], andarninja, 260);
  if (tempo > 1) {
    contador = contador + 1;
    tempo = 0;
  }

  andargaroto = andargaroto + 10;
  image(garoto[contador % 14], andargaroto, 390);
  if (tempo > 1) {
    contador = contador + 1;
    tempo = 0;
  }

  if (andargarota > 800) {
    tela = 1.82;
  }
}

function fase82() {
  background(999);
  image(numero5, 10, 8);

  textFont(fontPress);
  textSize(36);
  text("Quantos botões tem", 100, 105);
  text("na roupa da", 220, 165);
  text("garota ?", 290, 220);
  textSize(12);
  text("Hugo Corrêa © 2021", 300, 600);

  image(alternativa1_8, 150, 300);
  image(alternativa2_8, 150, 450);
  image(alternativa3_8, 450, 300);
  image(alternativa4_8, 450, 450);

  if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
    image(alternativa1_8hover, 150, 300);
  } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
    image(alternativa2_8hover, 150, 450);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
    image(alternativa3_8hover, 450, 300);
  } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
    image(alternativa4_8hover, 450, 450);
  }
}

// ======== FUNÇÃO CLICK ==========
function mouseClicked() {
  // ======= Menu
  if (tela == 0) {
    // Iniciar
    if (mouseX > 270 && mouseX < 500 && mouseY > 230 && mouseY < 295) {
      tela = 1;
    }
    //Intruções
    else if (mouseX > 270 && mouseX < 500 && mouseY > 280 && mouseY < 360) {
      tela = 2;
    }
    //Créditos
    else if (mouseX > 270 && mouseX < 500 && mouseY > 370 && mouseY < 430) {
      tela = 3;
    }
  }
  // Tela de erro, ao clicar volta para o menu
  if (tela == 4) {
    if (mouseX > 200 && mouseX < 440 && mouseY > 500 && mouseY < 565) {
      tela = 0;
      andargarota = 120;
      andarmario = 5;
      andardino = 100;
      andarninja = 40;
      andargaroto = 20;
      cont = cont + 1;
    }
  }
  // Tela de vitória
  if (tela == 5) {
    if (mouseX > 500 && mouseX < 740 && mouseY > 530 && mouseY < 595) {
      tela = 0;
      cont = 1;
    }
  }

  // == Fase1
  if (tela == 1) {
    //Resposta correta
    if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 1.2;
    } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    }
  }

  // == Fase2
  if (tela == 1.2) {
    if (mouseX > 150 && mouseX < 400 && mouseY > 350 && mouseY < 415) {
      tela = 4;
    } else if (mouseX > 150 && mouseX < 380 && mouseY > 480 && mouseY < 550) {
      tela = 4;
      //Resposta correta
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 350 && mouseY < 415) {
      tela = 1.3;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 480 && mouseY < 550) {
      tela = 4;
    }
  }

  // == Fase3
  if (tela == 1.3) {
    //Resposta correta
    if (mouseX > 470 && mouseX < 520 && mouseY > 580 && mouseY < 590) {
      tela = 1.4;
    } else if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    }
  }

  // == Fase4
  if (tela == 1.4) {
    if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 4;

      //Resposta certa
    } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
      image(alternativa2_4hover, 150, 450);
      tela = 1.5;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    }
  }

  // == Fase5
  if (tela == 1.5) {
    if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
      //Resposta certa
    } else if (mouseX > 170 && mouseX < 325 && mouseY > 60 && mouseY < 110) {
      tela = 1.6;
    }
  }

  // == Fase6
  if (tela == 1.6) {
    if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 300 && mouseX < 532 && mouseY > 400 && mouseY < 465) {
      tela = 4;
      //Resposta certa
    } else if (mouseX > 10 && mouseX < 80 && mouseY > 5 && mouseY < 75) {
      tela = 1.7;
    }
  }

  // == Fase7
  if (tela == 1.7) {
    if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
      //Resposta certa
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
      tela = 1.8;
    }
  }

  // == Fase8
  if (tela == 1.82) {
    //Resposta certa
    if (mouseX > 150 && mouseX < 400 && mouseY > 300 && mouseY < 360) {
      tela = 5;
    } else if (mouseX > 150 && mouseX < 400 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 300 && mouseY < 360) {
      tela = 4;
    } else if (mouseX > 450 && mouseX < 680 && mouseY > 450 && mouseY < 510) {
      tela = 4;
    }
  }
}

// ******** FUNCTION DRAW ***********
function draw() {
  if (tela == 0) {
    menu();
  } else if (tela == 1) {
    iniciar();
  } else if (tela == 1.2) {
    fase2();
  } else if (tela == 1.3) {
    fase3();
  } else if (tela == 1.4) {
    fase4();
  } else if (tela == 1.5) {
    fase5();
  } else if (tela == 1.6) {
    fase6();
  } else if (tela == 1.7) {
    fase7();
  } else if (tela == 1.8) {
    fase8();
  } else if (tela == 1.82) {
    fase82();
  } else if (tela == 2) {
    instrucao();
  } else if (tela == 3) {
    creditos();
  } else if (tela == 4) {
    erro();
  } else if (tela == 5) {
    win();
  }
}
