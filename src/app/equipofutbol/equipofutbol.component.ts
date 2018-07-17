import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipofutbol',
  templateUrl: './equipofutbol.component.html',
  styleUrls: ['./equipofutbol.component.css']
})
export class EquipofutbolComponent implements OnInit {
  @Input() imagen:string;
  @Input() texto:string;
  @Input() texto2:string;
  constructor() { }

  ngOnInit() {
  }

}
