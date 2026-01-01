const log = document.getElementById("log");
const info = document.getElementById("info");
const local = document.getElementById("local");

const fases = [
  "CASA",
  "LAMPIAO",
  "FAZENDEIRO",
  "ROCA",
  "ELIMINACAO"
];

const game = {
  fase:0,
  async iniciar(){
    await carregarJogadores();
    this.atualizar();
  },
  avancar(){
    if(vivos().length<=1){
      log.innerHTML = `🏆 ${vivos()[0].nome} é o CAMPEÃO!`;
      return;
    }

    let texto="";
    switch(fases[this.fase]){
      case "CASA":
        local.textContent="🏠 Sede da Casa";
        texto = casa.executar();
        break;
      case "LAMPIAO":
        local.textContent="⚡ Prova do Lampião";
        texto = provas.lampiao();
        break;
      case "FAZENDEIRO":
        local.textContent="🚜 Prova do Fazendeiro";
        texto = provas.fazendeiro();
        tempo.alternar();
        break;
      case "ROCA":
        local.textContent="🔥 Formação da Roça";
        texto = formarRoca();
        break;
      case "ELIMINACAO":
        local.textContent="❌ Eliminação";
        texto = eliminar();
        tempo.semana++;
        tempo.turno="DIA";
        break;
    }

    log.innerHTML += `<div>• ${texto}</div>`;
    this.fase = (this.fase+1)%fases.length;
    this.atualizar();
  },
  atualizar(){
    info.textContent = `Semana ${tempo.semana} • ${tempo.turno}`;
  }
};

game.iniciar();
