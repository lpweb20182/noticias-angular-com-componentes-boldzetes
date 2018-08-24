import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { BarraDeNavegacaoComponent } from './barra_de_navegacao/barra_de_navegacao.component';
import { LeitorDeNoticiaComponent } from './leitor_noticia/leitor_noticia.component';
import { TodasAsNoticiasComponent } from './noticiasAll/noticiasAll.component';
import { CadastrarNoticiaComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    BarraDeNavegacaoComponent,
    LeitorDeNoticiaComponent,
    TodasAsNoticiasComponent,
    CadastrarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
