import { Routes } from '@angular/router';
import { Home } from './component/home/home';

export const routes: Routes = [
    {path: ':language?',component: Home},
    { path: '', component: Home }, 
    {path: '**', pathMatch: 'full', redirectTo: '/'},
];
