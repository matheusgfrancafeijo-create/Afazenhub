let roca = [];

function formarRoca(){
  roca = [];
  const faz = jogadores.find(j=>j.fazendeiro);
  if(faz){
    const alvo = vivos().find(j=>j!==faz);
    roca.push(alvo);
  }
  while(roca.length<3){
    const p = vivos().find(j=>!j.imune && !roca.includes(j));
    if(!p) break;
    roca.push(p);
  }
  return `Roça formada: ${roca.map(j=>j.nome).join(", ")}`;
}
