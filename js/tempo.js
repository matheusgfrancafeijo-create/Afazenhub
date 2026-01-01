const tempo = {
  semana:1,
  turno:"DIA",
  alternar(){
    this.turno = this.turno === "DIA" ? "NOITE" : "DIA";
  }
};
