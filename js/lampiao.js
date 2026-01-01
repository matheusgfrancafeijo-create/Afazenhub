function sortearPoder(){
  const poderes=[
    "Trocar alguém da roça",
    "Anular um voto",
    "Mandar alguém direto pra roça",
    "Dar voto duplo"
  ];
  return poderes[Math.floor(Math.random()*poderes.length)];
}
