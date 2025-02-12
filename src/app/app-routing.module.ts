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
// cv
const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: 'todo', component: TodoComponent},
  { path: APP_ROUTES.cv, component: CvComponent},
  { path: `${APP_ROUTES.cv}/:id`, component: DetailsCvComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'color', component: ColorComponent},
  { path: ':quelqueChose', component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
