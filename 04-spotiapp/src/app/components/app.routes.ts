import { Routes } from "@agular/router";
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
