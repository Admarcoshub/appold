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
		new Libro("El Perfume",  "La historia de un asesino que mata mujeres para robar sus aromas", "Patrick Suskind" , "http://es.web.img3.acsta.net/c_300_300/medias/nmedia/18/67/53/01/20064123.jpg"),
		new Libro("El Caballero Carmelo" , "La historia de un gallo viejo que da su última pelea", "Abraham Valdelomar" , "https://lh3.googleusercontent.com/WPIJfA0nVZSsuQqvw4wj5vTREuS4AJsT78tWDoX7xR24D5KcL9EGlDk_qvQ94RABsUg=w300"),
		new Libro("Los Simarilion" ,  "La historia anterior de un Hobbit", "Tolkien" , "https://images-eu.ssl-images-amazon.com/images/I/51jxM5rSbsL._AA300_.jpg")
  	]
  }
agregar(libro:Libro) {
	this.libros.unshift(libro);}



  ngOnInit() {
  }

}
