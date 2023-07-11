import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/workout', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'workout', loadChildren: () => import('./modules/workout/workout.module').then(m => m.WorkoutModule) },
  { path: 'results', loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule) },
  { path: '**', redirectTo: '/workout' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
