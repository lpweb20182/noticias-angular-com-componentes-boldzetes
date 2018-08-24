import { Component, OnInit, Output, EventEmitter} from '@angular/core';

/**
 * Componente BarraDeNavegacaoComponent.
 *
 * O componente recebe como entrada o nome da tela que foi selecionada. Clicando em uma
 * opcao da barra de naveção, o componente dispara um evento para permitir o componente host,
 * saber qual tela foi escolhida, e direcioná-lo para a mesma com todas as suas funcionalidades
 * carregadas.
 */
@Component({
  selector: 'app-barra_de_navegacao',
  templateUrl: './barra_de_navegacao.component.html',
  styleUrls: ['./barra_de_navegacao.component.css']
})
export class BarraDeNavegacaoComponent implements OnInit {
  /**
   * O evento que permite o componente host saber qual opção da barra de navegação foi clicada
   */
  @Output() apontou = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }
  /**
   * Método utilizado como tratador para o evento `apontou`. 
   * 
   * O parâmetro `nome` informa para o componente host qual o nome da tela que
   * foi clicada pelo usuário por meio do método `emit()` do atributo `apontou`.
   *
   * @param nome 
   */
  irPara(nome){
    this.apontou.emit(nome);
  }

}
