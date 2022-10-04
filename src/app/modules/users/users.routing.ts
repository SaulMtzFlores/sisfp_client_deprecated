import { Route } from "@angular/router";
import { UserViewComponent } from "./user-view/user-view.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";


export const usersRoutes: Route[] = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'add',
    component: UserComponent
  },
  {
    path: 'see/:id',
    component: UserViewComponent
  },
  {
    path: 'edit/:id',
    component: UserComponent
  }
];
