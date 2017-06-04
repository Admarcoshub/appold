import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibroFormComponent,
    LibroListaComponent
  ],
  imports: [  
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [LibroListaComponent]
})
export class AppModule { }
