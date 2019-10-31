import { LandingComponent } from './components/landing/landing.component';
import { GeoTablesContainerComponent } from './components/geo-tables-container/geo-tables-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'geo-tables', component: GeoTablesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
