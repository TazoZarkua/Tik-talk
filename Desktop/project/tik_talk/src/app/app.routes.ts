import { Routes } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';
import { canActivatAuth } from './auth/access.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./common-ui/layout/layout').then(component => component.Layout),
        children: [{
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
        },
            {
                path: 'search',
                loadComponent: () => import('./pages/search-page/search-page').then(component => component.SearchPage)
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile-page/profile-page').then(component => component.ProfilePage)
            },
            {
                path: 'settings',
                loadComponent: () => import('./pages/settings-page/settings-page').then(component => component.SettingsPage)
            }
        ],
        canActivate: [canActivatAuth]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page').then(component => component.LoginPage)
    }
];
