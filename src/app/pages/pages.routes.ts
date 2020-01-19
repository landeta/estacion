import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { GraficosComponent } from './index.paginas';


const pagesRoutes: Routes = [
  {
      path: '',
      component: PagesComponent,
      children : [
         { path: '', component: GraficosComponent },
        // { path: 'about', component: AboutComponent },
        // { path: 'torneos', component: TorneosComponent},
        { path: '**', pathMatch: 'full', redirectTo: ''}
    ]}
];



export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
