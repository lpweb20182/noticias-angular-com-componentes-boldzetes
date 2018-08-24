import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Noticia} from '../noticia.model';

@Component({
  selector: 'app-noticiasAll',
  templateUrl: './noticiasAll.component.html',
  styleUrls: ['./noticiasAll.component.css']
})
export class TodasAsNoticiasComponent implements OnInit {
   /**
   * Atributo utilizado para controlar a pesquisa da lista de notícias
   */
  listaPesquisa = null;

  @Input() noticias;
  @Output() editor = new EventEmitter<Noticia>();
  @Output() remover = new EventEmitter<Noticia>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Encontra e retorna as notícias para a lista conforme o campo 
   * de pesquisa [`listaPesquisa`]{@link AppComponent#listaPesquisa}
   * considerando que seu valor está presente no título, conteúdo ou 
   * nome do autor.
   * 
   * @returns A lista de notícias para apresentar
   */
  noticiasParaLista() {
    if (this.listaPesquisa) {
      return this.noticias.filter(n =>
        n.titulo.indexOf(this.listaPesquisa) !== -1
        || n.conteudo.indexOf(this.listaPesquisa) !== -1
        || n.autor.indexOf(this.listaPesquisa) !== -1
      );
    } else {
      return this.noticias;
    }
  }

  editar(noticia){
    this.editor.emit(noticia)
  }
  excluir(noticia){
    this.remover.emit(noticia)
  }

}

