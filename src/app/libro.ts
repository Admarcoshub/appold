export class Libro {
	titulo:string;
	resena:string;
	autor:string;
	visible:boolean;

	constructor(titulo, resena, autor) {
			this.titulo = titulo;
			this.resena = resena;
			this.autor = autor;
			this.visible = false;

	}

	cambiarVisibilidad (){
		this.visible = !this.visible;
	}



}
