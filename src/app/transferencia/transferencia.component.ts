import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

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

  arregloJugador2 = [
    {
      id:5,
      imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gianluigi_Buffon_%282014%29.jpg/245px-Gianluigi_Buffon_%282014%29.jpg',
      texto: 'Buffon',
      texto2: 'Arquero',
      text3: '2',
      texto4: '40 Años'
    },
    {
      id:6,
      imagen:'https://images.clarin.com/2018/07/10/HkNrHtGX7_930x525__1.jpg',
      texto: 'Mbappé',
      texto2: 'Medio',
      text3: '24',
      texto4: '19 Años'
    },
    {
      id:7,
      imagen:'https://www.mundodeportivo.com/r/GODO/MD/p5/Futbol/Imagenes/2018/07/13/Recortada/img_jsegura_20180711-170351_imagenes_md_getty_gettyimages-868738682-kvBE-U458759775292B-980x554@MundoDeportivo-Web.jpg',
      texto: 'Neymar',
      texto2: 'Delantero',
      text3: '37',
      texto4: '26 Años'
    },
    {
      id:8,
      imagen:'http://www.ecuavisa.com/sites/default/files/styles/destacado_redes/public/fotos/2016/03/30/antonio-valencia-30-03-2016.jpg?itok=IFnT3rZE',
      texto: 'Valencia',
      texto2: 'Lateral Derecho',
      text3: '12',
      texto4: '32 Años'
    }
  ];

  arregloUsuarios = [
    {
      id:1,
      imagen:'data:image/jpeg;base64,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',
      texto: 'Mourinho'
    }/*,
    {
      id:2,
      imagen:'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/04/18/Recortada/20180414-636593398705522559_20180414220142-kcJ-U442692550741ZPB-992x558@LaVanguardia-Web.jpg',
      texto: 'Guardiola'
    },
    {
      id:3,
      imagen:'https://cdn-pro.elsalvador.com/wp-content/uploads/2017/02/10051027/1398265813163.jpg',
      texto: 'Ferguson'
    },
    {
      id:4,
      imagen:'http://www.estadio.ec/sites/default/files/fotos/2017/10/11/gomez_ec.jpg',
      texto: 'Bolillo'
    }*/
  ];

  arregloUsuarios2 = [

    {
      id:5,
      imagen:'https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2017/03/29/58db9d24d9f57.jpeg',
      texto: 'Allegri'
    },
    {
      id:6,
      imagen:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhAQEBAQFRAQEA8QDxAPDw8PEA8PFREWFhURFRUYHSggGBolGxUVIjEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0dHR8tKy0rLSstLTctKy0vListLSstLS0tLS0rLS0rLS0rLS0tLSstLS0tLS0tLS0tLS0tLf/AABEIALUBFgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAYFBwj/xABCEAACAQIDBQUFBAYKAwEAAAABAgADEQQSIQUxQVFhBhMicYEHMpGhsULB0fAUIzNSYuEkQ1Nyc4KSorLxo8LDFv/EABsBAQEBAQEBAQEAAAAAAAAAAAABAgMEBQYH/8QALBEBAQACAQMBBgUFAAAAAAAAAAECEQMSITFBBDRRcYGxBRMyM6EiQmFykf/aAAwDAQACEQMRAD8A8TiiigKKKKAooooCiiigKKKPaA0UUUBRRWitAUUVoaUidwJPAAEk/CAEU7mB7JYyrfJha/u5hek6g9LkWv0veBtfYFbD/tKVVQcuUMjAm4uR6W+cG3HAjy8dluER7aOpbXQ5QSL+Wn1lJlI0MBooooCjGFGMAYorRQFFFFAUe0QEcCFNaK0K0aEDEIUUBRRwI0AYo9oxEBRRR7QGiAitCgNaK0KK0BhFHtFaA1orQgI8AbRwhOgFydwGpMK09P8AZr2W7sDHYlASwU4dDqQDr3hB3Hlxgqj2T9ltWuq1sW/cU9CKVr1nXr+5f49J6bsLYWCwI/o9FQ241nAeof8AMdfhIsRiqrGwKqvC9yB6HfJRV8BJa44tmNr9cg3SbZ7u3TxysdHt53GvxtIsfSWsjUsRTV6bC12I0PMH7J6iZbFo6Nnp5SQt2XPcFd9xz+k7WBxGdBUQ95oNB4T1Ui1rg8D8pnbWnNq9hKDhVSoyZQFuLZmUfZvbQX5dJhO3fYX9HpvVRSAviL2VgVG+7Eg/Keq4auDckWKhcoBuwFzvAJlza+HNbD1ES2dqbd0W93Pa2VuW+a6mdafKdorSWvSZWdGWzIzKy6eFgSCummhECVoMaEYMBRER7R7QI7RWklorQBEIRwI9pA0Ew7RiJQwitHigICKEBFAjiIj2itCgtCtFFAa0eKOBCFaPHAhWkXSMiPDIjAQhgse0IQgIGg7D7EGJxALj9TRtUq/xa+FOpJnrVes7/sgbLpfQL5Anf5zA+zn3Kigm/eqSo3tdCqD4lj6TavizT8BNjbWwJsOC9OE5ZZ6uk9Vulhm4gZt98zE/f8jHJt4WW3DMrEg+ebcek49TtEuoC1LLpmDAa/G5lHEdqHt4SpHJqYZj57pOuN9GV9HXfwXDsQoYlWA3dCD7p8tDeBgdppharXYNSqgZgLgg/vG268yVTtBjGvdUy8jTvb4mBQFViGcKt9wVbD0ElyjpOLKvVaO0qNQA03Bc6rnJBYbrciZ06VfKTTOu5gfPcfunlVCu1Ozcjfjv3zTbM7Tq5s53AKTyViB9T9JJntnPjuLA+1nZXd4zvlHgxCB7jdn3N90w5Wewe1JRWwiVSFDUqi7wLjNdWVTw1UH08p5KUnfG7jmqkQQJM6yOaCjxoYEAbRwsNRCtChAj2hqsfLIIiIJEnKwcsqIbRASRlggQCCxpMgikFSEBHCyZElVDkjFJb7uAUgVbRSV1gWgEse0YQ1EBrRWhmNaAwEK0cLCtIjYezeqFeuLgNlRlNr2tcE+mabfF0EqkFTqd99585hPZzh89eqMwH6htCDdiWFgOU9G2Xhcma9rhtTxsN/znl5f1OnHO/dGuxqe4j0C3Mr4vY1O2ZVe41uQtNRbhrx9I+3e0yUV1IA3KPCGbmddw6DWYzHds6TArTVw375csb216WmJhb4erHOTzWnw2z6OY5m3i91rO4zAXKnS24y3XeiHFNQha326qhUHXed8yFerXpYOnicn6ssM7AktqoXMelwJxaXaqsA3cooJu1Rgqln6m81jha1nyYxv9r7KtTLjLbLfwkWHXW2nWZnZeHzvkD2Y+FSb2aU9n9qc1u+erTzbwEHdv5qNL9frO/T2erPTZToSCG3HXcSOB6cJdWdnLKzKI+1ornBsSUKCqne3YZit/Cyg6nxEXnnpE3faTGpVoVzc3pN3RTcmY1NGX1U385hTPRxXccOTDp1/mIXWRlJOYJE6VzQZYQEMLDCyAAsMLCyxwJFNaNaSWgkQGyxislAiMCAiMEk2WGKcGkKiKGVigQIsnCwEEmtNRCAkbCTgSJoFdxI7SZ5GZAMJYrQgJVIQwIwWEJA9ogI4MMCRXd7DYhUxdPNoKg7scPFmVgPXLb1np+ysQXLPYgMzix3ghrEX4zxZCVIYe8pDL5g3E9uwjL3dN0Phqr3yC1rBrN8739Z5uad9u3H3nycjbHZ9bmowQu39ZU1sp0yjTQb/P6cjZ3YRGbNlyoDe9j4vIGbqnVNvEdOVtTyF5wtqdp1WulEMQou9ZlGYrTQE5RbiSAPWYxy+DvjjKt7W2Wf0A4amt1ACFd90vMhhey5CeBAb6EGwb4marHdtsPTRWS794t10yi3W+7yMxn/6zx97hlqLSJIqqxuMw+2o4A33dOs36dl7eq9h8AlAnv0pi9rICz1GPUnQDynYwVNKhzcEBKqNAdNDbhK2FxgxakFhzBPPlL+CwgpFDrZhl+RP4j0mN90yk8M12s2V3eFqYiwArVaLqq7rGxLdLlvrymCJmu7Xdpkej+gUabKq1Q1dmJN2S4CrroL68tJj56+KaxeXmy3kK0WWOklCzbkhCSRFkuSICZDFJGacsiAwlghtBIktoskoiUx7RytoSLI1CVZJklilRk/ciRdOY6xS81CKEclZKrSIwlM0ynzSNzAYwbwI3MG0lKQqdORQKse0sd3IWEB1EZxHQx2EAFlinIQsnpCSrBNNPsXtvUpJQw9RVNKmyqKm50o33W3Gw+QmZYSJ1mbjLNVrdl7PdK2IApltPduCNb9ZhtisperWexaozAX4KDb8YXZnbne4ZaTE56IFJjzpnSm3yt6Sjg9nZw+ZnCKzgBGy315jX4GePWrZXqwu52V+02GR2WzWAvmGcD5SmmPoU0y5kvyB3w9o7Owy6d34uj1tfn98gw1NLhaNK27UJqfNjcmeiSa8rcNXe4ubCxP6whD4TYi3A8R+ec1tLH5qdME+IEEdTmIt85lsWRSys1gwBvzJh9nqj1cRRpKNSy2B0Gcnwg+pnPp3ds267Mlja2epUqDc9R2HkWJgosKphWps1KopV6ZNN0bQq6mxU+REkRJ7HiMqSemsJKcLLIEBAeShYzJIlQXjx2WDeaIcCFHQR2WK1ETCTUEgKustUqcy1FinTkndw6a6SYLKqoViktURQM0ojEQo14ZgTHVYrSVBIGyySmsJVj5ZSnIkDpLAiKwirljGTOJADrICtJacECEIEsBxCUxnMNbdTsZVAxQpt7tdHpkcMwGZf+JHrNTUQ4dyH8VJ9Qbe6ev4zh+zXDrU2hSUi5FLFNTB/tO4cD6mazbIDKLbj6aGebnx1ZXXhtvaKlSvhrahdRe5BM59fbFCn7oW28AWufgJwdsYd0YKmoYA24AzktmW4bU+UYzcdbyWeifaePNZxfcOHPWbH2b4Q1MZR090mo55KvP1I+ImK2VgHr1Vp01LOx0A+p5DrPc+yGxFwlPItjUaxrVLe8RuUclHD4z0YcfVdejzZ8vTLb5rO+0zs/SrY1smVKtbDpXD20aoGZGV7bwQqm+8G/lPNq+Cek5p1VKsOB3EcwdxHUTa9stpd5tGqVOlBKdAEHit2b/c5HpIamLR1yVsjLwzXup5qRqJ6bht5JnplaVOE9OdAvSUlTTOnGm7DMOYzXkowtJ/cq2vuFRdP9S/hMXiydZyYuOEjsJ1W2PV+yocc6bK3y3/KUMTQZdGVlPJlK/Wc7LPMdJ03xVGrIBJaxgUxIaS0xDcQFktoa0GmkuUkgUVkw0giUGWaY0lIGTirYSkR4g6xSGs+sUmzTP3kbGE0AzTmkSTAyGkZIJGlilJ8khoCW1Gkiq1odo7LGMJpXqyDLJ3EC0IFYRMjbSKmCxCqCWO4AXJl0iUNCpUmchUUljuA/Ok6OH2QBrWbX+zQgt6tuHpedbDutNbKiqONhr6njOuPDb57OWXLJ47rfYKgMPtDAAkd5Uq1FcjcAaFSyD1trPR+0/ZtiXq0BcMS1SkN4bi6ee8rz1HKeWdn6xbaOBa9guIUj4EffPoZNdDvjkwxymvQ4+TLG79XheIpDu3ze8GPQix3ee+ZrD7Gq16wp00LO58I3Ac2J4Ac56N2+2thu+enRo56im1WsrhF7waFbWIa24n04TgdnO3IwdW1ahTGHqWWo9MFq6cnuT4gOKgDprv8WOMxz1t9rP2bm/J/NuGvWbbLsz2Yp4KnYeKswHe1OLH91eSjlO07lFZ+CqWPQAXnTwtNKqrVpur06ihkdCCrKdxBnG9oFUUdn4tr2LU+6XnmqkJ/7fKfQxkk7PhZbt3XhFPEsXaqfequ1Rgf3mYsfrOpSqq27Q23Hf6TkJJlN9/x4iMbpcpsWJrBPE50voNSSenWFSrG19QDrY7wOsrfo4zFtWPNtbDkOUkLRumlyljWX3SR6y/Q29VGmc26m84amIvL1VOmNG21w4/WU6Tf3qaH6iCf0RiM1BV5lGan8gbTOtiICYrXf5g7iOUlyl8wmNniurtrZgpHPTzd3pcNqyE7teKngf5X56ToYXGA/q2OZO7qd3c+I07AvSP8SkAjoZXShYkcjv59Zxyk29GGVs1RUlk6LCRJYp05JG0IpxzRvLgowgsaa3py3oRTpGleNGk2xrrIyktOsALIxpXUSdBFkiWBborJS1pFTeOxmWxqYziCkmtArlIVHCs5siljyAvbz5ToUKVIAGoGLMfCAbADfc8/5yepjjbKgyryXQTtjxb72uGXJrtIpLsMb6tQKP3UszeV9w+cso6UxloqF5tvdvNpWqVZGHnWax8OV3fKzSxQJIOhHA8evWNXxObThKl44MvVTTRdgqAfaGGBG7vG9Qt57f2n2mMLhcRieNKkxQfvVDoi+rETxH2evbaOG6iqP/GZ6b26D4ruMLTB7u/e1jzKmyJ8bn0ExlutY628pqGyDMbnKMxO8tbUn1mWxTGq+g45VA1LHgBO9tCpUYMMgXeLM5zL0Itoek7fs17PCrU791utJ8ii4IFS2bMfQieHhx3k/Yfi3P08WMk7Sf8Aa0ns5pYnAUxTcl6TsWele/dk8afLqNxln2x7SBw2HpI37WtnP91EO/1ZfhNph8EvKeW+19x+lUaY+xQznzdyP/n8579STs/H223dYAzZ+ybACtjWLojUqOHqMwdQy52ZUW4Om4v8JinbhO1sTtPjMJTqUsLWFNajB2ORKjAgW8OcFRfS+nATlyS3HUamt93a9qgpUsaKVCjSpomHps3dIlPPUZ3NzYAHQLMRQYtduBOnkOM6PaPbNbGVBUxBQ1SoQslNad0HO2/+elpSy20/NowlmMlLrZZpG9SO0rVGmrSQWfUkcJGSG0vY/AGR5tPWOLNodOR5TKpaVRkOV7gXBDWvkcbn+t+YJmoalbIRxRevC30AmSFe3gqajgeI6iaHZFa6ZM2bJ7p5ofwP1El8LPLpIkmVZGpjs8zHZaBgEQKbSYTTPkkSKSUzFBtkXpyuwlktIHmSorQHkrSvUaESpUkoaUVaWabwsqbPDSrISYNPeB1jRat4qr4l87fKEKsoYp9M3W4+MdHnbqcNLbP1ggyMGPm4xs0mAt6xXkTP84e6VHd7FPbaGD61HX40nnue2MUmHoVa7AfqkLD+JrWVfUkD1ngfZirlxuDblWHzUj756l7UsaRhaFMf11XM3Vaa3t/qZfhJnl04WvT7Hwzm9ow474t7/L1/h5e5Jvc3J1J5niZq/Zdje7xDUCfDXBK34VUF/mub4CZNTLey8UaNalWB/ZVabnyDAsPhcT5vHl05Sv3Htfs85+HLC/C6+fo9/pieE+0vFZ9oYnlT7umvktNb/wC4tPdaW6/A7p85dpsXnxWKqb82IrkeXeG3ytPqV/PnKKxj5yRKgMauumliToP+plVeiSSWPkPL8/ST5o3d2sIxkAO0qVmlio0o4hpK1BhvCD5wM94qW4SN5lpbVRUGQ2zj3Dz/AITA2ZjTQq+IHLfLUU78p0PqN/pK6PadOsFxFMm39Ipi9x/WoN6nmw3j4R5Tw0uf884zPObsjEZqSdBlP+XQfK0uGpObtFrD1JdB0nISpLlFyRLtFsVbRSoYpeo0zdRpFmgs8jzQwOo8qVHklV5UdpRMhlukJRpGdChAlCxZd56H6SUR9OPDWFs7KuKH2eQtIMMfwhubkn1kWGPiI9Zpz9FswgIMIGaQdFfjDO+NTbS0dRNMrWyKmXEYZuWIo/OoB989C9qFfMcFyyYg/OlPNKTeOmeVWkfg4m/9oj64L/CrfNqf4Tnzft36Po/hPvmH1+1ZJTJCND5QFEkE+a/c4PcNj7RzYOlWO4YdahPlTufpPnao1951Op857HgsWF2JVcm2XB1kvyOUoJ4o+ITepvPq7/pj+dcuPTy5z4W/cnQjdApubk8Bp+MB8Zp9IKhrC/8A2ZlnS0cRI2qyIJ5xGwjZoLEn+crVzJ3aV6gmasNSbQREQaZ0ikUxh0KpUhgbEG4PWDaNCu/sxh48uiuRUAH2W3OvlfKR0YS25M4+xMQFcK3uvp5NwM0jUZK1j40iopL9DSQ01k4WRvQazRROkUDGs0cGKKVyR1ZXIiilgmpCX8MI8UC1lgVdx9BFFE8tZfpUGO+RUvfHkYopXNcjiPFNMnBg1qpiilIHDHj1X6ieie0I+LBf4NX/AJJFFOfJ+3fo934b73h9fszKyQR4p89+6weg9lsMK+ysRRf3WTELe17EFiDboQDPDMVTCsbbvyYop9P+zF/P/afeeT/a/c2GW5ueGvrLlR7RRSTw43yTC35tI3MUUJELSOoY0UjSFDv84YaKKRRmBHigOomywdYtTpsd5XXqQSL+tr+sUUXw1h5WqMthYopl2gWWKKKRX//Z',
      texto: 'Wenger'
    },
    {
      id:7,
      imagen:'https://bolavip.com/__export/1523282306211/sites/bolavip/img/2018/04/09/gettyimages-942010064_crop1523282304861.jpg_1693159006.jpg',
      texto: 'Di Francesco'
    },
    {
      id:8,
      imagen:'http://diariometro.com.ni/wp-content/uploads/2016/06/636027360722348932w-800x500.jpg',
      texto: 'Emery'
    }

  ];

}
