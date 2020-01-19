import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const APP_ROUTES: Routes = [
 //  { path: '', redirectTo: '/home-torneo', pathMatch: 'full' },
 //  { path: 'about', component: AboutComponent },
  { path: '**', component: NopagefoundComponent}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
