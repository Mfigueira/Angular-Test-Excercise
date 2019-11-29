import { LandingComponent } from './components/landing/landing.component';
import { GeoTablesContainerComponent } from './components/geo-tables-container/geo-tables-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'geo-tables', component: GeoTablesContainerComponent },
  { path: 'buttons', component: ButtonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
