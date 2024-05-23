import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) }, 
  { path: 'gym', loadChildren: () => import('./gym/gym.module').then(m => m.GymModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
