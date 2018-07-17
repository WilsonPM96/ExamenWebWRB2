import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../usuarios/Usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
              private _httpClient: HttpClient) { }

  ngOnInit() {

  }

  login(formulario) {
    const username = formulario.controls.usuario.value;
    const password = formulario.controls.password.value;
    const rutaLogin = '/login';
    const rutaHome = '/home';

    const usuario: Usuario = {
      id: 0,
      usuario: username,
      password: password,
      imagenUrl: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg'
    };

    const body = `usuario=${usuario.usuario}&password=${usuario.password}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      })
    };


    const login$ = this._httpClient
      .post<Usuario>('http://localhost:1337/Autorizacion/iniciarSesion', body, httpOptions);
    login$.subscribe(
      value => {
        this._router.navigate([rutaHome]);
      },
      error1 => {
        this._router.navigate([rutaLogin]);
      },
      () => {
        this._router.navigate([rutaHome])
      });
  }
}


