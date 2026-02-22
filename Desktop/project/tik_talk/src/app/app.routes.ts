import { Routes } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./common-ui/layout/layout').then(component => component.Layout),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/search-page/search-page').then(component => component.SearchPage)
            },
            {
                path: 'profile/:id',
                component: ProfilePage
            },
            {
                path: 'settings',
                loadComponent: () => import('./pages/settings-page/settings-page').then(component => component.SettingsPage)
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page').then(component => component.LoginPage)
    }
];
