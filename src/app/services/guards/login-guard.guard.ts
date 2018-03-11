import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) {}
  canActivate( ) {
    if (this._usuarioService.estaLogueado()) {
      console.log('Paso el GUARDS');
      return true;
    } else {
      console.log('Bloqueado por el GUARDS');
      this.router.navigate(['/login']);
      return false;
    }
     }
}
