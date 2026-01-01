let jogadores = [];

async function carregarJogadores(){
  const r = await fetch("data/jogadores.json");
  jogadores = (await r.json()).map(j => ({
    ...j,
    vivo:true,
    imune:false,
    lampiao:false,
    fazendeiro:false,
    poder:null
  }));
}

function vivos(){
  return jogadores.filter(j=>j.vivo);
}
