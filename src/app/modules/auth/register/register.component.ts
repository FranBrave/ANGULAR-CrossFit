import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordsMatch: boolean = true;
  userExistsError: boolean = false;

  constructor(private authService: AuthService) {}

  async onRegister() {
    // Validar si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      this.passwordsMatch = false;
      return; // Detener el registro
    }

    try {
      const user = await this.authService.signUp(this.email, this.password);
      // Handle successful registration here
    } catch (err: any) {
      // Handle registration error here
      if (err.code === 'auth/email-already-in-use') {
        this.userExistsError = true;
      }
    }
  }

  async onLoginWithGoogle() {
    try {
      const user = await this.authService.signInWithGoogle();
      // Lógica adicional después de iniciar sesión correctamente con Google
    } catch (err) {
      // Manejo de errores de inicio de sesión con Google
    };
  };
};
