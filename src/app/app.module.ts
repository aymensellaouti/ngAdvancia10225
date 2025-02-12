import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './communication/pere/pere.component';
import { FilsComponent } from './communication/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { LoggerService } from './services/logger.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    CvItemComponent,
    CvListComponent,
    CvCardComponent,
    MiniWordComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    Btc2usdPipe,
    TodoComponent,
    WeekTodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    DetailsCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
