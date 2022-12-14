export class Registro{
    public create : string;
    public cod_clase : string;
    public hrs_clase : string;
    public sala_clase : string;
    public fec_clase : string;

    constructor(text : string){
        this.create = new Date().toString();
        this.determinarTipo(text);
    }

    private determinarTipo(text: string){
        const splittext = text.split('|');
        this.cod_clase = splittext[0];
        this.hrs_clase = splittext[1];
        this.sala_clase = splittext[2];
        this.fec_clase = splittext[3];
    }

    public convertirDatos(){
        return { create : this.create, cod_clase : this.cod_clase, hrs_clase : this.hrs_clase, sala_clase : this.sala_clase, fec_clase : this.fec_clase };
    }
}

