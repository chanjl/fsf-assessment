import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form.component';
import { SubmittedFormComponent } from './components/submitted-form.component';

const appRoutes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'done', component: SubmittedFormComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
