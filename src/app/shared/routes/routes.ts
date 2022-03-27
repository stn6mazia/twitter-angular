import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { 
        path: 'login', 
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule)
    },
    { 
        path: 'register', 
        loadChildren: () => import('../../pages/register/register.module').then(m => m.RegisterModule)
    },
    { 
        path: 'feed', 
        loadChildren: () => import('../../pages/feed/feed.module').then(m => m.FeedModule)
    },
] 