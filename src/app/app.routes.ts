import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VagaComponent } from './pages/vaga/vaga.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'vaga/:id', component: VagaComponent },
  { path: '**', component: NotFoundComponent },
];
