import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  categories = [
    {
      icon: '🎨',
      name: 'Graphic Design',
      jobs: 'Creative projects'
    },
    {
      icon: '💻',
      name: 'Programming',
      jobs: 'Web & Software'
    },
    {
      icon: '📚',
      name: 'Tutoring',
      jobs: 'Share your knowledge'
    },
    {
      icon: '✍️',
      name: 'Writing',
      jobs: 'Content & Articles'
    },
    {
      icon: '🌍',
      name: 'Translation',
      jobs: 'Multiple languages'
    },
    {
      icon: '📱',
      name: 'Social Media',
      jobs: 'Digital marketing'
    }
  ];

  steps = [
    {
      number: '01',
      title: 'Create an Account',
      description:
        'Join our student community and build your profile.'
    },
    {
      number: '02',
      title: 'Find or Post a Job',
      description:
        'Discover opportunities or publish your own small job.'
    },
    {
      number: '03',
      title: 'Receive Bids',
      description:
        'Connect with students and choose the best offer.'
    },
    {
      number: '04',
      title: 'Complete & Review',
      description:
        'Finish the work and share your experience.'
    }
  ];
}