import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Reviews } from './features/reviews/reviews';
import { FreelancerReviews } from './features/freelancer-reviews/freelancer-reviews';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'reviews',
    component: Reviews
  },
  {
    path: 'freelancer-reviews',
    component: FreelancerReviews
  }
];

