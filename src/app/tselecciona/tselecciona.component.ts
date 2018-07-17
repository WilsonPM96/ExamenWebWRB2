import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tselecciona',
  templateUrl: './tselecciona.component.html',
  styleUrls: ['./tselecciona.component.css']
})
export class TseleccionaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arregloJugador = [
    {
      id:1,
      imagen:'http://www.preferente.com/wp-content/uploads/2018/04/Lionel-Messi-687879.jpg',
      texto: 'Messi',
      texto2: 'Medio',
      text3: '50',
      texto4: '31 Años'
    },
    {
      id:2,
      imagen:'https://www.infobae.com/new-resizer/DUR37cFBjClCwR0KyX2Yu0O6IOA=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/20093122/cristiano-ronaldo-barba-1920-1.jpg',
      texto: 'Cristiano',
      texto2: 'Delantero',
      text3: '45',
      texto4: '33 Años'
    },
    {
      id:3,
      imagen:'https://ep01.epimg.net/deportes/imagenes/2018/01/21/actualidad/1516571661_891247_1516571779_miniatura_normal.jpg',
      texto: 'Ronaldinho',
      texto2: 'Medio',
      text3: '35',
      texto4: '38 Años'
    },
    {
      id:4,
      imagen:'https://historia-biografia.com/wp-content/uploads/2018/01/Sin-t%C3%ADtulo-38.jpg',
      texto: 'Ronaldo',
      texto2: 'Delantero',
      text3: '53',
      texto4: '41 Años'
    }
  ];

}
