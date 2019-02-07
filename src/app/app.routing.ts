import { CvComponent } from './cv/cv.component';
import { Routes , RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const ROUTING: Routes = [
  {
    path: 'todo' ,
    component: TodoComponent
  },
  {
    path: 'cv' ,
    component: CvComponent
  },

];


export const APP_ROUTING = RouterModule.forRoot(ROUTING);
