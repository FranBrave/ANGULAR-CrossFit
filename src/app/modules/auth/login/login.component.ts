import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router ) {}

  async onLogin() {
    try {
      const user = await this.authService.signIn(this.email, this.password);
      if (user) {
        console.log('Login successful for user: ', user.user.email);
        // Here, you can route the user to the dashboard or home page.
        // this.router.navigate(['/home']);
      } else {
        console.log('No user');
      }
    } catch (err) {
      // Handle login error here
      console.log('Login error', err);
    };
  };

  async onLoginWithGoogle() {
    try {
      const user = await this.authService.signInWithGoogle();
      // Lógica adicional después de iniciar sesión correctamente
      console.log('logged with google: ', user.user.email);
    } catch (err) {
      // Manejo de errores de inicio de sesión con Google
    };
  };
};