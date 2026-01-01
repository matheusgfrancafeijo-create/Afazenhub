function eliminar(){
  const sai = roca[Math.floor(Math.random()*roca.length)];
  sai.vivo=false;
  jogadores.forEach(j=>j.imune=false);
  return `${sai.nome} foi eliminado com ${(Math.random()*40+30).toFixed(1)}% dos votos.`;
}
