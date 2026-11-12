
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewApi } from '../reviews/review-api';

@Component({
  selector: 'app-freelancer-reviews',
  imports: [CommonModule, FormsModule],
  templateUrl: './freelancer-reviews.html',
  styleUrl: './freelancer-reviews.css'
})
export class FreelancerReviews implements OnInit {

  reviews: any[] = [];

  review = {
    reviewerId: 0,
    reviewedUserId: 0,
    rating: 5,
    comment: ''
  };

  constructor(private reviewApi: ReviewApi) {}

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewApi.getReviews().subscribe({
      next: (data: any) => {
        this.reviews = data.filter(
          (r: any) => r.reviewType === 'FREELANCER'
        );
      },
      error: (err) => console.log(err)
    });
  }

  addReview() {
    const newReview = {
      ...this.review,
      reviewType: 'FREELANCER'
    };

    this.reviewApi.addReview(newReview).subscribe({
      next: () => {
        alert('Etudiant review added successfully!');

        this.review = {
          reviewerId: 0,
          reviewedUserId: 0,
          rating: 5,
          comment: ''
        };

        this.loadReviews();
      },
      error: (err) => {
        console.log(err);
        alert('Error adding review!');
      }
    });
  }
}

