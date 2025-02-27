import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { APP_ROUTES } from './config/app-routes.config';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
// cv
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'todo', component: TodoComponent },
  { path: APP_ROUTES.cv, component: CvComponent },
  {
    path: `${APP_ROUTES.cv}/add`,
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: `${APP_ROUTES.cv}/:id`, component: DetailsCvComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: ':quelqueChose', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
