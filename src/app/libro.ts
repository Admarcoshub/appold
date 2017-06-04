export class Libro {
	titulo:string;
	resena:string;
	autor:string;
	imagen:string;
	visible:boolean;

	constructor(titulo, resena, autor, imagen) {
			this.titulo = titulo;
			this.resena = resena;
			this.autor = autor;
			this.imagen = imagen;
			this.visible = false;

	}

	cambiarVisibilidad (){
		this.visible = !this.visible;
	}



}
