const casa = {
  eventos:[
    "brigou com",
    "formou aliança com",
    "falou mal de",
    "se aproximou de",
    "foi falso com"
  ],
  executar(){
    const a = vivos()[Math.floor(Math.random()*vivos().length)];
    const b = vivos()[Math.floor(Math.random()*vivos().length)];
    if(!a || !b || a===b) return "Dia calmo na casa.";
    a.pop += 2;
    b.pop -= 2;
    return `${a.nome} ${this.eventos[Math.floor(Math.random()*this.eventos.length)]} ${b.nome}`;
  }
};
