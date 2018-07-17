import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  @Input() imagen;
  @Input() texto;
  @Input() texto2;
  @Input() text3;
  @Input() texto4;
  constructor() { }

  ngOnInit() {
  }

}
