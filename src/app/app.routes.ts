import {Routes} from "@angular/router";
import {ContenedorComponent} from "./contenedor/contenedor.component";
import {LoginComponent} from "./Login/login.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";
import {TseleccionComponent} from "./tseleccion/tseleccion.component";
import {TseleccionaComponent} from "./tselecciona/tselecciona.component";
import {TconfirmacionComponent} from "./tconfirmacion/tconfirmacion.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: ContenedorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'transferencia',
    component: TransferenciaComponent,
  },
  {
    path: 'tseleccion',
    component: TseleccionComponent,
  },
  {
    path: 'tselecciona',
    component: TseleccionaComponent,
  },
  {
    path: 'tconfirmacion',
    component: TconfirmacionComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  }
]
