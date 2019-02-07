import { UserdetailComponent } from './userdetail/userdetail.component';
import { CvComponent } from './cv/cv.component';
import { Routes , RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ColeurComponent } from './coleur/coleur.component';

const ROUTING: Routes = [
  {
    path: 'todo' ,
    component: TodoComponent
  },
  {
    path: 'cv' ,
    component: CvComponent
  },
  {
    path: 'color/' ,
    component: ColeurComponent
  },
  {
    path: 'details/:id' ,
    component: UserdetailComponent
  },


];


export const APP_ROUTING = RouterModule.forRoot(ROUTING);
