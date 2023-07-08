import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateViewSectionComponent } from './components/create-view-section/create-view-section.component';

const routes: Routes = [
  { path: 'create', component: CreateViewSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
