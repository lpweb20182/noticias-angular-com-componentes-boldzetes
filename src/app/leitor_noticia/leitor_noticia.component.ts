import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

/**
 * Componente LeitorDeNoticiaComponent.
 *
 * O componente recebe como entrada os elementos da notícia selecionada. Clicando na
 * opcao da fechar, o componente dispara um evento para permitir o componente host,
 * redirecionar para a tela com os detalhes da notícia.
 */
@Component({
  selector: 'app-leitor_noticia',
  templateUrl: './leitor_noticia.component.html',
  styleUrls: ['./leitor_noticia.component.css']
})
export class LeitorDeNoticiaComponent implements OnInit {
  
   /**
   * A propriedade de entrada que representa a notícia que deve ser apresentada.
   */
  @Input() leituraNoticia;
  
  constructor() { }

  ngOnInit() {
  }
  
  /**
   * O evento que permite o componente host saber quando e qual notícia foi fechada.
   */
  @Output()
  fechou = new EventEmitter<any>();

  /**
   * Método utilizado como tratador para o evento `fechou`. 
   * 
   * O componente host é informado por meio do método `emit()`
   * e leva o atributo `fechou`.
   * 
   */
  fechar(){
    this.fechou.emit();
  }

}
