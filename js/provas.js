const provas = {
  lampiao(){
    const sorteados = vivos().sort(()=>0.5-Math.random()).slice(0,3);
    const win = sorteados[Math.floor(Math.random()*sorteados.length)];
    jogadores.forEach(j=>j.lampiao=false);
    win.lampiao = true;
    win.poder = sortearPoder();
    return `Prova do Lampião: ${win.nome} venceu.`;
  },
  fazendeiro(){
    const sorteados = vivos().sort(()=>0.5-Math.random()).slice(0,4);
    const win = sorteados[Math.floor(Math.random()*sorteados.length)];
    jogadores.forEach(j=>j.fazendeiro=false);
    win.fazendeiro=true;
    win.imune=true;
    return `Prova do Fazendeiro: ${win.nome} está imune.`;
  }
};
