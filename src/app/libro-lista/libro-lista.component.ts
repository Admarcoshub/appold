import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';


@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
	libros:Array<Libro> // Es un array de tipo clase

  constructor() { 
  	this.libros = [
		new Libro("El Perfume",  "La historia de un asesino que mata mujeres para robar sus aromas", "Patrick Suskind"),
		new Libro("El Caballero Carmelo" , "La historia de un gallo viejo que da su última pelea", "Abraham Valdelomar"),
		new Libro("Los Simarilion" ,  "La historia anterior de un Hobbit", "Tolkien")
  	]
  }
agregar(libro:Libro) {
	this.libros.unshift(libro);}



  ngOnInit() {
  }

}
