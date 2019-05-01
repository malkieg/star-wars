import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './views/search/search.component';
import {ResultsComponent} from './views/results/results.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SearchComponent},
  {path: 'results/:query', component: ResultsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
