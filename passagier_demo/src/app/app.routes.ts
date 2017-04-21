import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);