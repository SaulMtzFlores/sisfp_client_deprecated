import { Route } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';

export const appRoutes: Route[] = [
  // Auth routes for guests
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m=> m.AuthModule)
  },


  // Landing routes
  {
    path: 'users',
    component: LayoutComponent,
    // canActivate: [Guard],
    children: [
      {path: '', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
    ]
  },

  {
    path: '**', redirectTo: ''
  }
];

