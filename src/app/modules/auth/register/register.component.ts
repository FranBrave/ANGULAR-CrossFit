import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  lastName1: string = '';
  lastName2: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordsMatch: boolean = true;
  userExistsError: boolean = false;

  constructor(private authService: AuthService) {}

  async onRegister() {
    if (this.password !== this.confirmPassword) {
      this.passwordsMatch = false;
      return;
    }

    try {
      await this.authService.signUp(this.email, this.password, this.name, this.lastName1, this.lastName2);
      // Aquí puedes manejar el registro exitoso
    } catch (err: any) {
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
    }
  }
}
