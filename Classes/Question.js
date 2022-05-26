class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Digite seu nome aqui...");
    this.input2 = createInput("").attribute("placeholder", "Digite a letra da alternativa...");
    this.button = createButton('Enviar');
    this.button2 = createButton('Reiniciar');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("GATAS DA PROFF");
    this.title.position(550, 27);

    this.question.html("Qual das opções abaixo possui o nome das duas gatas da professora Melissa?");
    this.question.position(310, 80);
    this.option1.html("a) Sombra & Toph");
    this.option1.position(360, 180);
    this.option2.html("b) Serafina & Sombra");
    this.option2.position(830, 180);
    this.option3.html("c) Toph & Serafina");
    this.option3.position(360, 290);
    this.option4.html("d) Sombra & Mel");
    this.option4.position(830, 290);

    this.input1.position(490, 410);
    this.input2.position(690, 410);
    this.button.position(652, 490);
    this.button2.position(644.63, 540);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
