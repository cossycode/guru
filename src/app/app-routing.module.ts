import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QaComponent } from './qa/qa.component';
import { QaintroComponent } from './qaintro/qaintro.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'qas',
    component: QaintroComponent
  },
  { path: 'qa',
    component: QaComponent },
  {
    path: 'splash',
    component: AppComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
