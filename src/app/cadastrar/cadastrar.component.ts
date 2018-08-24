import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.html',
  styleUrls: ['./cadastrar.css']
})
export class CadastrarNoticiaComponent implements OnInit {
  titulo = null;
  conteudo = null;
  autor = null;
  emailDoAutor = null;
  data = null;

  @Output() salvou = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  salvar(){
    const noticia = {
      titulo: this.titulo,
      conteudo: this.conteudo,
      autor: this.autor,
      emailDoAutor: this.emailDoAutor,
      data: this.data,
    };
    this.salvou.emit(noticia)
  }
}
