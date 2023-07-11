import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResetPasswordComponent } from './reset-password.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
  declarations: [
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
