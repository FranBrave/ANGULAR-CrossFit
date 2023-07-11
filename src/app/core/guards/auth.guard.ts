import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth 
  ) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe( 
      map(user => {
        if (user) {
          console.log('Bienvenido ' + user.email);
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
