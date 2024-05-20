import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { UsuariosInterface } from 'src/app/core/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const userSession = sessionStorage.getItem('authToken');

    if (userSession == null) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    
    return new Promise<boolean>((resolve) => {
      this.userService.getUserData(Number(sessionStorage.getItem('i'))).subscribe({
        next: (userData) => {
          this.authService.currentUserLoginOn.next(true);
          this.authService.currentUserData.next(userData);
          resolve(true);
        },
        error: (err) => {
          console.error(err);
          resolve(false);
        },
      });
    });
  }
}
