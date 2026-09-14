import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { SocialLinks } from './components/social-links/social-links';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'links',
    component: SocialLinks
  },

  {
    path: '**',
    redirectTo: ''
  }

];