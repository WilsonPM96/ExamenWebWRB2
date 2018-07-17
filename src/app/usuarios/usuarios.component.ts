import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @Input() imagen:string;
  @Input() texto:string;
  @Output() selecciono:EventEmitter<string> = new EventEmitter();
  constructor() {
  }

  @Output() dioClick = new EventEmitter();

  ngOnInit() {

  }
  seleccionoUsuario(){
    console.log('Selecciono', this.texto);
    this.selecciono.emit(this.texto);
  }



}
