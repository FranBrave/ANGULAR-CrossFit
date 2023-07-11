import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/workout', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'resetpassword', loadChildren: () => import('./modules/auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'workout', canActivate: [AuthGuard], loadChildren: () => import('./modules/workout/workout.module').then(m => m.WorkoutModule) },
  { path: 'results', canActivate: [AuthGuard], loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule) },
  { path: '**', redirectTo: '/workout' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
