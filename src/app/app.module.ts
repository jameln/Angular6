import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColeurComponent } from './coleur/coleur.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListeEmbaucheComponent } from './liste-embauche/liste-embauche.component';
import { APP_ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { NotfountComponent } from './notfount/notfount.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColeurComponent,
    FilsComponent,
    CvComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    NgStyleComponent,
    RainbowDirective,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    ListeEmbaucheComponent,
    HeaderComponent,
    UserdetailComponent,
    NotfountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
