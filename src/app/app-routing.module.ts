import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarLibrosComponent } from './consultar-libros/consultar-libros.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { ShowCronometroComponent } from './show-cronometro/show-cronometro.component';

const routes: Routes = [
  { path: 'Libros', component: ConsultarLibrosComponent },
  { path: 'Cronometro', component: CronometroComponent },
  { path: 'ShowCronometro', component: ShowCronometroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
