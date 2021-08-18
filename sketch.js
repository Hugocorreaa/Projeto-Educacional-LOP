//===== Legenda =====

// tela = 0 -> menu
// tela = 1 -> iniciar
// tela = 2 -> instruções
// tela = 3 -> creditos



//===== Variáveis ======
let tela = 0

// Proporções
function setup() {
  createCanvas(800, 600);
}

// === Imagens ====
function preload(){
  //menu
  einstein = loadImage("menu/img/einstein.jpg")
  title = loadImage("menu/img/limited.png")
  imginiciar = loadImage("menu/img/iniciar.png")
  imginstrucoes = loadImage("menu/img/instrucoes.png")
  imgcreditos = loadImage("menu/img/creditos.png")
  hoveriniciar = loadImage("menu/img/hoveriniciar.png")
  hoverinstrucoes = loadImage("menu/img/hoverinstrucoes.png")
  hovercreditos = loadImage("menu/img/hovercreditos.png")

  //Iniciar

  //instruções
  bginstrucoes = loadImage("instrucoes/img/bginstrucoes.png")

  //creditos
  bgcreditos = loadImage("creditos/img/bgcreditos.png")
  voltar = loadImage("creditos/img/voltar.png")
  hovervoltar = loadImage("creditos/img/hovervoltar.png")
}

//======================= Menu ==========================
function menu(){
  background(0)
  image(einstein, 0, 0)
  
  //Titulo
  image(title, 80, 80)

  
  //Botões
  image(imginiciar, 270, 230)
  image(imginstrucoes, 270, 300)
  image(imgcreditos, 270, 370)



  // ============== Hover mouse ==============
  //hover iniciar
  if (mouseX > 270 && mouseX < 500 && mouseY > 230 && mouseY < 295){
    image(hoveriniciar, 270, 230)

    // Pressed mouse iniciar   
    if(mouseIsPressed){
      tela = 1
    }

  // Hover instrucões
  }else if(mouseX > 270 && mouseX < 500 && mouseY > 280 && mouseY < 360){
    image(hoverinstrucoes, 270, 300)

    // Pressed mouse instrucao
    if(mouseIsPressed){
      tela = 2
    }

    //hover creditos
  }else if(mouseX > 270 && mouseX < 500 && mouseY > 370 && mouseY < 430){
    image(hovercreditos, 270, 370)

    // Pressed mouse créditos
    if(mouseIsPressed){
      tela = 3
    }
  }
}

//========= Iniciar =======
function iniciar(){
  background(999)
  textSize(30)
  text('CONTINUE A SEQUÊNCIA', 300, 200)
  textSize(25)
  text('S T Q Q S * D', 400, 280)
  text('a) s', 300, 380)
  text('b) t', 380, 380)
  text('c) j', 460, 380)
  text('d) k', 540, 380)

}

//======= Instruções =======
function instrucao(){
  background(0)
  image(bginstrucoes,0,0)
  image(voltar, 600, 530)

  if(mouseX > 600 && mouseX < 772 && mouseY > 530 && mouseY < 570){
    image(hovervoltar, 600, 530)

    //voltar para menu
    if(mouseIsPressed){
    tela = 0
  }  
  }



}

//========= Créditos =========
function creditos(){
  background(0)
  image(bgcreditos,0,0)
  image(voltar, 308, 500)

  //hover voltar
  if(mouseX > 308 && mouseX < 480 && mouseY > 500 && mouseY < 550){
    image(hovervoltar, 308,500)

    //voltar para menu
    if(mouseIsPressed){
      tela = 0
    }
  }
}



// ******** FUNCTION DRAW ***********
function draw(){

  if (tela == 0){
    menu() 

  }else if (tela == 1){
    iniciar()

  }else if (tela == 2){
    instrucao()

  }else if (tela == 3){
    creditos()
  }
}













