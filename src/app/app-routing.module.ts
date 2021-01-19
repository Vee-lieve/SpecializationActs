import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { UpdateComponent } from './update/update.component';
import { ExternalComponent } from './external/external.component';

const routes: Routes = [
  { path: 'api', component: ApiComponent },
  { path:  'external', component: ExternalComponent},
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 