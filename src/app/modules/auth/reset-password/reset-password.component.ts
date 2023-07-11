import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  async onSubmit() {
    try {
      await this.authService.sendPasswordResetEmail(this.email);
      // Mostrar un mensaje de éxito o redirigir a una página de confirmación de restablecimiento de contraseña
    } catch (error) {
      console.log(error);
      // Mostrar un mensaje de error al usuario
    }
  }
}
